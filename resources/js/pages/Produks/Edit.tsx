import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { Textarea } from '../User/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CloudAlert } from 'lucide-react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit a Produks',
        href: 'Produk/Edit',
    },
];

interface Produk {
    id: number;
    nama: string;
    deskripsi: string;
    harga: string;
    gambar: string;
}

interface Props {
    produk: Produk;
}

export default function Index(produks: Props) {
    const { data, setData, put, processing, errors } = useForm({
    nama: produks.produk.nama,
    deskripsi: produks.produk.deskripsi,
    harga: produks.produk.harga,
    gambar: null,
});

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('Produk.Update', produks.produk.id));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="w-9/12 gap-4 p-4 m-4 border rounded-lg w-9/">
                <form onSubmit={handleUpdate} className="space-y-4">
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
                        Edit Product
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}
