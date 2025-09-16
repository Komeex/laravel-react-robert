import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { useForm } from '@inertiajs/react';
import { CloudAlert } from 'lucide-react';
import { Textarea } from '../User/components/ui/textarea';
import { Select } from 'react-day-picker';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a Produks',
        href: 'Produks/Create',
    },
];
export default function Index() {
    const { data, setData, post, processing, errors } = useForm({
        nama: '',
        deskripsi: '',
        kategori: '',
        harga: '',
        gambar: 'default.png',
    });

    const handleSumbit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('Produks.Store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="w-9/12 gap-4 p-4 m-4 border rounded-lg w-9/">
                <form onSubmit={handleSumbit} className="space-y-4">
                    {/* validate data */}

                    {Object.keys(errors).length > 0 && (
                        <Alert>
                            <CloudAlert />
                            <AlertTitle>Data Harus Di isi!!</AlertTitle>
                            <AlertDescription>
                                <ul>
                                    {Object.entries(errors).map(([key, message]) => (
                                        <li key={key}> {message as string} </li>
                                    ))}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}

                    <div className="gap-2 mb-2">
                        <Label htmlFor="product name">Name</Label>
                        <Input placeholder="Product Name" value={data.nama} onChange={(e) => setData('nama', e.target.value)}></Input>
                    </div>
                    <div className="gap-2 mb-2">
                        <Label htmlFor="product description">Product Description</Label>
                        <Textarea
                            placeholder="Product Description"
                            value={data.deskripsi}
                            onChange={(e) => setData('deskripsi', e.target.value)}
                        ></Textarea>
                    </div>
                    <div className="gap-2 mb-2">
                        <Label htmlFor="kategori">Kategori</Label>
                        <Select
                            id="kategori"
                            value={data.kategori}
                            onChange={(e) => setData('kategori', e.target.value)}
                            className="w-full p-2 border rounded-md border-border bg-background text-foreground"
                        >
                            <option value="" disabled defaultChecked>Pilih Kategori</option>
                            <option value="elektronik">Elektronik</option>
                            <option value="pakaian">Pakaian</option>
                            <option value="makanan">Makanan</option>
                        </Select>
                    </div>

                    <div className="gap-2 mb-2">
                        <Label htmlFor="product price">Price</Label>
                        <Input
                            type="number"
                            placeholder="Product Price"
                            value={data.harga}
                            onChange={(e) => setData('harga', e.target.value)}
                        ></Input>
                    </div>
                    <div className="gap-2 mb-2">
                        <Label htmlFor="product image">Product Image</Label>
                        <Input type="file" onChange={(e) => setData('gambar', e.target.files?.[0] || null)}></Input>
                    </div>
                    <Button className="mt-2" type="submit">
                        Add product
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}
