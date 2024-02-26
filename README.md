Projek ini adalah projek test di CareNow Indonesia dengan intruksi terdapat di folder ROOT (SoftwareEngineerAtCareNow.pdf) yang diperoleh pada tanggal 21 Februari 2024 (deadline: 26 Februari 2024 23:59 PM ). Project ini dibuat dengan reactjs (Front-end), expressjs (Back-end/api endpoint, link: https://github.com/furizal1999/expressjs-carenow-2024) dan database Firestore.

Setup:

<h1>Back-end project:</h1>
1. Clone project pada link ini: https://github.com/furizal1999/expressjs-carenow-2024
2. Download file authentication key yang sudah di lampirkan pada email careers@carenow.id (file name: <b>carenow-2024-firebase-adminsdk-o57sq-337cbb8d9a.json</b>).
3. Jangan mengganti nama file authentication key nya.
4. Masukkan file authentication key yang sudah didownload ke folder ROOT project expressjs yang sudah di clone pada tahap 1.
5. Jalankan project pada terminal/cmd dengan menggunakan sintaks: <b>npm run api-service</b> (diasumsikan anda sudah mengintall node.js)
6. Setelah itu, maka secara otomatis sistem ini akan berjalan pada port <b>3000</b>
7. Setelah sistem back-end berhasil dijalankan, silahkan selanjutnya setup sistem front-end.

<h1>Front-end project:</h1>
1. Clone projek pada link ini: https://github.com/furizal1999/reactjs-carenow-2024
2. Setelah project berhasil di clone, silahkan jalankan project dengan menggunakan sintaks: <b>pnpm run dev</b>
3. Jika belum menginstal pnpm, silahkan install terlebih dahulu dengan menggunakan sintaks: <b>npm install pnpm</b>
4. Setelah berhasil menginstall pnpm, silahkan ulangi langkah nomor 2.
5. Setelah projek berhasil di jalankan, projek akan dijalankan secara default pada port <b>5173</b>, maka sistem akan dapat di akses dengan menggunakan url: http://localhost:5173/ (local host)
6. Sebelum melakukan pengujian, pastikan project back-end sudah di setup dan dijalankan pada port <b>3000</b>
7. Silahkan uji sistem dengan mengisi form yang sudah dibuat pada sistem front-end nya.

<h1>Testing:</h1>
1. Kunjungi http://localhost:5173/ atau sesuaikan dengan port yang telah digunakan.
2. Masukkan Form berupa:
    - patientName: String,
    - patientId: String,
    - dateOfTreatment: Date,
    - treatmentDescription: [Array of String] -> MultiSelect,
    - medicationsPrescribed: [Array of String] -> MultiSelect,
    - costOfTreatment: Number,
3. Klik tombol submit, maka akan muncul alert bahwa data sudah berhasil diinput (jika berhasil). jika tidak berhasil, kemungkinan masih terjadi kesalahan saat setup (hub WA: 082386092684).
4. Setelah data berhasil disubmit, maka form kembali dibersihkan untuk menginput data yang baru. Ulangi langkah nomor 2 untuk memasukkan ulang.

More question:
Email: furizal.id@gmail.com,
Phone: 082386092684
