<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Http\Requests\StoreProdukRequest;
use App\Http\Requests\UpdateProdukRequest;
use Inertia\Inertia;


class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function indexDasboard()
    {
        $produks = Produk::all();
        return Inertia::render('Produks/Index', [
            'produks' => $produks,
        ]);
    }

    public function indexProduct()
    {
        $produks = Produk::all();
        return Inertia::render('User/App', [
            'produks' => $produks,
        ]);
    }

    public function create()
    {
        $produks = Produk::all();
        return Inertia::render('Produks/Create', [
            'produks' => $produks
        ]);
    }

    public function store(StoreProdukRequest $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'harga' => 'required|numeric',
            'deskripsi' => 'required|nullable|string',
            'kategori' => 'required|nullable|string',
            'gambar' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        
        $path = $request->file('gambar')->store('products', 'public');
        Produk::create([
            'nama' => $request->input('nama'),
            'harga' => $request->input('harga'),
            'deskripsi' => $request->input('deskripsi'),
            'kategori' => $request->input('kategori'),
            'gambar' => $path,
        ]);
        return redirect()->route('Produks.indexDasboard')->with('success', 'Produk created successfully.') -> with('message', 'Produk Berhasil Ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(Produk $produk)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produk $produk)
    {
        return Inertia::render('Produks/Edit', compact('produk'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProdukRequest $request, Produk $produk)
    {
           $request->validate([
            'nama' => 'string|max:255',
            'harga' => 'numeric|max:255',
            'deskripsi' => 'nullable|string',
            'gambar' => 'nullable|image|max:2048',
        ]);

        $path = $request->file('gambar')->store('products', 'public');
        $produk->update([
            'nama' => $request->input('nama'),
            'harga' => $request->input('harga'),
            'deskripsi' => $request->input('deskripsi'),    
            'gambar' => $path,
        ]);

        return redirect()->route('Produks.indexDasboard')->with('message', 'Produk berhasil diedit');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produk $produk)
    {
        $produk->delete();
           return redirect()->route('Produks.indexDasboard')->with('message', 'Produk Berhasil Dihapus'); 
    }
}
