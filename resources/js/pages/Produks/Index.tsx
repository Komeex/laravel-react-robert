import AppLayout from "@/layouts/app-layout"
import { type BreadcrumbItem } from "@/types";
import MetricsCard from "@/components/produkcomponents/metricscard";

interface Produk {
    id: number;
    nama: string;
    deskripsi: string;
    harga: number;
    gambar: string;
}

interface Props {
    produks: Produk[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Produks',
        href: '/Produks',
    },
];


export default function Index({ produks }: Props) {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const totalProduk = produks.length;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
          <MetricsCard/>
            <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Complete Product Overview</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-[#008b5e] text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Product</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Description</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Image</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {produks.map((produk, index) => (
                                    <tr key={produk.id} className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'} hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200`}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-[#008b5e] text-white rounded-full text-sm font-medium">
                                                {produk.id}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-gray-900 dark:text-white">{produk.nama}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate" title={produk.deskripsi}>
                                                {produk.deskripsi}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                                                {formatCurrency(produk.harga)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={produk.gambar}
                                                    alt={produk.nama}
                                                    className="w-16 h-16 object-cover rounded-lg shadow-md border-2 border-gray-200 dark:border-gray-600"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </AppLayout>
    );
}