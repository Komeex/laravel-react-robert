<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProdukController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('user', function () {
    return Inertia::render('User/App');
})->name('user');

// Route::get('/produks', function () {
//     return Inertia::render('User/App'); 
// })->name('product.index');

// Route::get('/products', [ProdukController::class, 'index'])->name('Produks.Index');




Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/produk', [ProdukController::class, 'indexDasboard'])->name('Produks.indexDasboard');
    Route::get('/test', [ProdukController::class, 'indexProduct'])->name('Produks.indexProduct');
    Route::get('/produks', [ProdukController::class, 'indexProduct'])->name('Produks.indexProduct'); 
    Route::post('/produk', [ProdukController::class, 'store'])->name('Produks.Store');
    Route::get('/produk/createProduct', [ProdukController::class, 'create'])->name('Produks.Create');
    Route::get('/produk/{produk}/edit', [ProdukController::class, 'edit'])->name('Produk.Edit');
    Route::put('/produk/{produk}', [ProdukController::class, 'update'])->name('Produk.Update');
    Route::delete('/produk/{produk}', [ProdukController::class, 'destroy'])->name('Produks.Destroy');




    // Route::get('/products', [ProdukController::class, 'indexProduct'])->name('Produks.indexProduct');

    // Route::get('createproduk', [ProdukController::class, 'create'])->name('Produks.Create');
    // routes/api.php
    Route::get('/products', function () {
        return App\Models\Produk::all();
    });
});
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
