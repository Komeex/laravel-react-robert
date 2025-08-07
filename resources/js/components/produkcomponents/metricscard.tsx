import { Link, usePage } from '@inertiajs/react';

export default function MetricsCard() {
    const { produks } = usePage().props;
    const totalProduk = Array.isArray(produks) ? produks.length : 0;
    const totalHarga = Array.isArray(produks) ? produks.reduce((total, item) => total + Number(item.harga), 0) : 0;

    const metrics = [
        {
            title: 'Total Order',
            value: '1',
            icon: (
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            bgColor: 'bg-gradient-to-br from-purple-600 to-purple-700',
        },
        {
            title: 'Pendapatan',
            value: `Rp ${totalHarga.toLocaleString('id-ID')}`,
            icon: (
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                </svg>
            ),
            bgColor: 'bg-gradient-to-br from-emerald-600 to-emerald-700',
        },
        {
            title: 'Total Products',
            value: totalProduk.toString(),
            icon: (
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                </svg>
            ),
            hasButton: true,
            bgColor: 'bg-gradient-to-br from-indigo-600 to-indigo-700',
        },
    ];

    return (
        <div className="bg-gray-900 p-6">
            <div className="mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Product Management</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Manage and view all your products in different layouts</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="hover:bg-gray-750 h-[200px] transform rounded-xl border border-gray-700 bg-gray-800 p-6 transition-all duration-300 hover:scale-105"
                        >
                            <div className="flex h-full flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">{metric.title}</p>
                                        <p className="mt-2 text-3xl font-bold text-white">{metric.value}</p>
                                    </div>
                                    <div className={`h-14 w-14 ${metric.bgColor} flex items-center justify-center rounded-lg shadow-lg`}>
                                        {metric.icon}
                                    </div>
                                </div>
                                
                                {metric.hasButton && (
                                    <div className="mt-4 flex justify-end">
                                        <Link
                                            href="/createproduk"
                                            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        >
                                            Tambah Products
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}   