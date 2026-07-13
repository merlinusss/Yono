<div align="center">

# ☁️ YONO BOT ☁️
<p align="center">
  <img src="https://img.shields.io/badge/Node.js-00BFFF?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS">
  <img src="https://img.shields.io/badge/Baileys-87CEEB?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Baileys">
  <img src="https://img.shields.io/badge/Docker-00BFFF?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Pterodactyl-87CEEB?style=for-the-badge&logo=pterodactyl&logoColor=white" alt="Pterodactyl">
</p>

> *Bot WhatsApp Multi-Device Ringan, Cepat, dan Responsif.* 🦋

</div>

---

## 🌀 Tentang Project

**Yono Bot** adalah asisten WhatsApp cerdas yang dibangun menggunakan ekosistem Node.js dan *library* Baileys (Multi-Device). Dirancang untuk memberikan hiburan, kemudahan, serta menjaga keamanan grup secara otomatis tanpa henti.

---

## 💎 Fitur Utama

### 🛡️ Sistem Moderasi Grup
Bot Yono siap menjaga grupmu dari pesan yang tidak diinginkan secara otomatis:
*   **Anti-Link:** Mendeteksi dan menghapus promosi tautan grup lain.
*   **Anti-SW:** Mencegah *member* meneruskan (forward) Status WhatsApp ke dalam grup.
*   **Anti-Toxic:** Menjaga kebersihan obrolan dari kata-kata kasar.

### 🎮 Game Interaktif Multiplayer
Nikmati berbagai macam *game* seru yang bisa dimainkan bersama-sama (*multiplayer*) di dalam grup:
*   **Tebak Angka:** (1-100 dengan sistem *clue* kebesaran/kekecilan).
*   **TicTacToe:** Game klasik ❌⭕ melawan teman.
*   **Suit:** Adu batu, gunting, kertas.
*   **Berbagai Kuis:** Kuis Matematika, Tebak Gambar, Kata, Kalimat, Lirik, dan Cak Lontong.

### ⚙️ Utilitas & Media
*   **Tiktok Downloader** (Otomatis menghapus file sampah dari *storage*).
*   **Get Profile & Get Name:** Ekstrak informasi dari pengguna lain dengan mudah.

---

## ✈️ Persyaratan Sistem

Pastikan *environment* kamu sudah memenuhi spesifikasi berikut sebelum melakukan instalasi:
*   [Node.js](https://nodejs.org/en/) (Versi 18.x atau lebih baru)
*   Git
*   FFmpeg (Untuk keperluan konversi media/stiker)

---

## 💧 Instalasi (Lokal)

Ikuti langkah-langkah di bawah ini untuk menjalankan Yono Bot di komputermu:

1. **Clone Repositori**
   ```bash
   git clone https://github.com/merlinusss/Yono.git
   cd yono-bot

2. **Install Modul**
   ```bash
    npm install

3. **Start the bot**
   ```bash

    npm start
    # atau
    node index.js

4. **Pairing**
   ```bash
    
    Buka WhatsApp di HP kamu, masuk ke Perangkat Taut, dan scan QR Code / masukkan nomor hp kamu yang muncul di terminal.

## 🌊 Deployment (VPS / Panel)

Yono Bot sangat dioptimalkan untuk berjalan di atas server berbasis Arch/Ubuntu Linux dan berjalan mulus jika kamu menggunakan containerization.

Jika kamu menggunakan Pterodactyl Panel atau Docker:

    Gunakan image Docker berbasis node:20 agar resource lebih hemat.

    Pastikan alokasi storage memadai, terutama saat menggunakan fitur downloader media.

    Masukkan perintah startup: node index.js.

## 📝 Lisensi & Kredit

Proyek ini dikembangkan oleh Merlinus Store.
Terima kasih kepada seluruh kontributor open-source dan penyedia library Baileys (whiskeysockets).