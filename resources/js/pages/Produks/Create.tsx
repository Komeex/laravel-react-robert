import AppLayout from "@/layouts/app-layout"
import { type BreadcrumbItem } from "@/types";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'CreateProduks',
        href: '/Create',
    },
];
export default function Create() {
    return (
      <AppLayout breadcrumbs={breadcrumbs}>
        <div className="min-h-screen p-6">
            <div className="mx-auto ">
                <div className="rounded-t-xl border border-gray-700 bg-gray-800 p-6">
                    <h2 className="mb-2 text-2xl font-bold text-white">Tambah Produk Baru</h2>
                    <p className="text-gray-400">Isi form di bawah untuk menambahkan produk ke sistem</p>
                </div>

                <div className="space-y-6 rounded-b-xl border-x border-b border-gray-700 bg-gray-800 p-6">
                    <div>
                        <label htmlFor="nama" className="mb-3 block text-sm font-semibold text-gray-300">
                            Nama Produk *
                        </label>
                        <input
                            type="text"
                            id="nama"
                            name="nama"
                            className="w-full rounded-lg border-2 border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                            placeholder="Masukkan nama produk"
                        />
                    </div>

                    <div>
                        <label htmlFor="deskripsi" className="mb-3 block text-sm font-semibold text-gray-300">
                            Deskripsi Produk *
                        </label>
                        <textarea
                            id="deskripsi"
                            name="deskripsi"
                            rows={4}
                            className="w-full resize-none rounded-lg border-2 border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                            placeholder="Masukkan deskripsi produk"
                        />
                    </div>

                    <div>
                        <label htmlFor="harga" className="mb-3 block text-sm font-semibold text-gray-300">
                            Harga Produk *
                        </label>
                        <div className="relative">
                            <span className="absolute top-1/2 left-4 -translate-y-1/2 transform font-medium text-gray-400">Rp</span>
                            <input
                                type="number"
                                id="harga"
                                name="harga"
                                className="w-full rounded-lg border-2 border-gray-600 bg-gray-700 py-3 pr-4 pl-12 text-white placeholder-gray-400 transition-all duration-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                                placeholder="0"
                                min="0"
                                step="1000"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="gambar" className="mb-3 block text-sm font-semibold text-gray-300">
                            Gambar Produk *
                        </label>
                        <div className="space-y-4">
                            <div className="rounded-lg border-2 border-dashed border-gray-600 bg-gray-700/50 p-8 text-center transition-all duration-200 hover:border-green-500 hover:bg-gray-700">
                                <input type="file" id="gambar" name="gambar" accept="image/*" className="hidden" />
                                <label htmlFor="gambar" className="flex cursor-pointer flex-col items-center space-y-3">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-600">
                                        <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-medium text-gray-300">Klik untuk upload gambar</p>
                                        <p className="mt-1 text-xs text-gray-500">PNG, JPG, atau JPEG (Maksimal 5MB)</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4 border-t border-gray-700 pt-6">
                        <button
                            type="button"
                            className="rounded-lg border-2 border-gray-600 px-6 py-3 font-medium text-gray-300 transition-all duration-200 hover:border-gray-500 hover:bg-gray-700"
                        >
                            Reset
                        </button>
                        <button
                            type="button"
                            className="transform rounded-lg bg-green-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-green-700"
                        >
                            Simpan Produk
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </AppLayout>

    );
}
