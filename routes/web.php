<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProdukController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('produk', [ProdukController::class, 'index'])->name('Produks.Index');
    Route::get('createproduk', [ProdukController::class, 'create'])->name('Produks.Create');
    
    });
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
