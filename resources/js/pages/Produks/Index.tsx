import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Link, usePage, useForm } from '@inertiajs/react';
import { Megaphone } from 'lucide-react';
import { Button } from '../User/components/ui/button';
import { FileX, PencilLine } from 'lucide-react';


interface Produk {
    id: number;
    nama: string;
    deskripsi: string;
    kategori: string;
    harga: number;
    gambar: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Produks',
        href: '/Produks',
    },
];

interface pageProps {
    flash: {
        message?: string;
    };
    produks: Produk[];
}

export default function edit({ produks }: pageProps) {
    const {processing, delete:destroy} = useForm();
    
    const handleHapus = (id: number, nama:string) => {
       if(confirm('Kamu yakin ingin menghapus produk ' + id + ' - ' + nama + '?')){
        destroy(route('Produks.Destroy', id));
    }}

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const totalProduk = produks.length;

    const { flash } = usePage().props as unknown as pageProps as any;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="m-4">
                <Link href={route('Produks.Create')}>
                    <Button>Create a product</Button>
                </Link>
            </div>
            <div className="m-4">
                <div>
                    {flash.message && (
                        <Alert>
                            <Megaphone />
                            <AlertTitle>Notifikasi!</AlertTitle>
                            <AlertDescription>{flash.message}</AlertDescription>
                        </Alert>
                    )}
                </div>
            </div>

            {produks.length > 0 && (
                <div className="m-4">
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Id</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Deskripsi</TableHead>
                                <TableHead>Kategori</TableHead>
                                <TableHead>Harga</TableHead>
                                <TableHead>Image</TableHead>
                                <TableHead >Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {produks.map((produk) => (
                                 <TableRow>
                                <TableCell className="font-medium">{produk.id}</TableCell>
                                <TableCell>{produk.nama}</TableCell>
                                <TableCell>{produk.deskripsi}</TableCell>
                                <TableCell>{produk.kategori}</TableCell>
                                <TableCell>{produk.harga}</TableCell>
                                <TableCell><img className='w-12 h-16' src={`/storage/${produk.gambar}`} alt={produk.nama} /></TableCell>
                                <TableCell className="flex gap-2">
                                    <Button disabled={processing} onClick={() => handleHapus(produk.id, produk.nama)} className='bg-red-500 cursor-pointer hover:bg-red-700'><FileX ></FileX> Delete</Button>
                                    <Link href={route('Produk.Edit', produk.id)}><Button className='bg-blue-500 cursor-pointer hover:bg-blue-700'><PencilLine ></PencilLine> Edit</Button></Link>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </AppLayout>
    );
}
