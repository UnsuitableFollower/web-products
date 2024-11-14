# Toko Produk JavaScript 🛍️

Proyek ini adalah toko e-commerce sederhana yang dibangun dengan JavaScript, menampilkan produk yang diambil dari API. Pengguna dapat mencari dan memfilter produk berdasarkan kategori. Situs web ini menampilkan daftar produk dengan gambar, deskripsi, dan harga, serta menyediakan sistem pencarian dan filter untuk kemudahan pengguna.

## Fitur 🌟

- **Daftar Produk**: Menampilkan daftar produk dengan gambar, judul, dan harga. 🖼️
- **Fungsi Pencarian**: Memungkinkan pengguna mencari produk berdasarkan nama. 🔍
- **Fungsi Filter**: Menyaring produk berdasarkan kategori (misalnya, Ikea, Marcos). 🏷️
- **Desain Responsif**: Tampil dengan desain responsif, ramah mobile, dan menyesuaikan tampilan untuk berbagai ukuran layar. 📱
- **Toggle Mode Gelap**: Pengguna dapat beralih antara mode gelap dan terang. 🌙💡

## Teknologi yang Digunakan 💻

- **HTML**: Struktur halaman.
- **CSS**: Styling untuk tata letak dan desain.
- **JavaScript**: Untuk mengambil data dari API, menampilkan produk, dan menangani fungsionalitas filter/pencarian.

## Dokumentasi API 📚

Proyek ini menggunakan API berikut untuk mengambil data produk:

- **API Endpoint**: [https://www.course-api.com/javascript-store-products](https://www.course-api.com/javascript-store-products)

### Format Respons

API mengembalikan array produk dengan struktur berikut:

```json
{
  "id": "product-id",
  "fields": {
    "name": "Nama Produk",
    "price": 1999,
    "image": [
      {
        "url": "https://example.com/product-image.jpg"
      }
    ]
  }
}
