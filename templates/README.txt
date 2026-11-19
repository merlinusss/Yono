=== PANDUAN EDIT TEMPLATE TEKS PERMANEN ===

Cukup edit file .txt di folder ini lalu SIMPAN (tidak perlu restart bot).
Perubahan akan otomatis menjadi teks bawaan baru untuk semua grup yang belum di-custom lewat command settext.

Daftar File:
- menu.txt   -> Tampilan & simbol command "menu"
- list.txt   -> Template & simbol item command "list"
- proses.txt -> Template bawaan command "proses"
- done.txt   -> Template bawaan command "done"
- close.txt  -> Template bawaan command "close" (tutup grup)
- open.txt   -> Template bawaan command "open" (buka grup)

=== FORMAT SIMBOL & PERULANGAN (@ITEM / @HEADER / @FOOTER) ===
Di bagian atas menu.txt dan list.txt (sebelum garis ---), kamu bisa atur gaya tiap baris perulangan:
- Bungkus langsung dengan gaya WhatsApp:
  *tebal*   -> *{CMD}* atau *{KEY}*
  _miring_  -> _{CMD}_ atau _{KEY}_
  `kode`    -> `{CMD}` atau `{KEY}`
- Pilihan huruf besar/kecil:
  {CMD} / {KEY}             -> Kapital awal / asli
  {CMD_UPPER} / {KEY_UPPER} -> HURUF BESAR SEMUA
  {CMD_LOWER} / {KEY_LOWER} -> huruf kecil semua
  {NO}                      -> Nomor urut (1, 2, 3, ...)

Contoh @ITEM di menu.txt:
  @ITEM = ▸ *{NO}. {CMD_UPPER}*
  @ITEM =  ⋮ ⌗ ┆ _{CMD}_

Contoh @ITEM di list.txt:
  @ITEM =     ⋆˙⟡ *{KEY}*
  @ITEM = ▸ {NO}. *{KEY_UPPER}*

=== PLACEHOLDER UTAMA ===
menu.txt:
- {RUNTIME}, {CREATOR}, {NAME}, {NUMBER}, {STATUS}, {MENU} (wajib ada)
- @HEADER: {CATEGORY}, {CATEGORY_UPPER}, {CATEGORY_LOWER}

list.txt, close.txt, open.txt:
- {GROUPNAME}, {TAG}, {JAM}, {NAMAHARI}, {TANGGAL}
- {SIMBOL} -> Daftar item list (wajib ada di list.txt)

proses.txt & done.txt:
- {GROUPNAME}, {TAGDIRI}, {TAGREPLY}, {PESANAN}
- {HARI}, {TANGGAL}, {BULAN}, {NAMABULAN}, {TAHUN}
- {JAM}, {MENIT}, {DETIK}
