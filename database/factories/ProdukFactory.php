<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Produk>
 */
class ProdukFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->word,
            'deskripsi' => $this->faker->sentence,
            'harga' => $this->faker->randomFloat(2, 1000, 100000),
            'gambar' => $this->faker->imageUrl(640, 480, 'products', true), 
        ];
    }
}
