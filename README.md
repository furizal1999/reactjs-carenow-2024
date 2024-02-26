Projek ini adalah projek test di CareNow Indonesia dengan intruksi terdapat di folder ROOT (SoftwareEngineerAtCareNow.pdf) yang diperoleh pada tanggal 21 Februari 2024 (deadline: 26 Februari 2024 23:59 PM ). Project ini dibuat dengan reactjs (Front-end), expressjs (Back-end/api endpoint, link: https://github.com/furizal1999/expressjs-carenow-2024) dan database Firestore.

Setup:

<h1>Back-end project:</h1>
<ol>
    <li>Clone project pada link ini: https://github.com/furizal1999/expressjs-carenow-2024</li>
    <li>Download file authentication key yang sudah di lampirkan pada email careers@carenow.id (file name: <b>carenow-2024-firebase-adminsdk-o57sq-337cbb8d9a.json</b>).</li>
    <li>Jangan mengganti nama file authentication key nya.</li>
    <li>Masukkan file authentication key yang sudah didownload ke folder ROOT project expressjs yang sudah di clone pada tahap 1.</li>
    <li>Jalankan project pada terminal/cmd dengan menggunakan sintaks: <b>npm run api-service</b> (diasumsikan anda sudah mengintall node.js)</li>
    <li>Setelah itu, maka secara otomatis sistem ini akan berjalan pada port <b>3000</b></li>
    <li>Setelah sistem back-end berhasil dijalankan, silahkan selanjutnya setup sistem front-end.</li>
</ol>

<h1>Front-end project:</h1>
<ol>
    <li>Clone projek pada link ini: https://github.com/furizal1999/reactjs-carenow-2024</li>
    <li>Setelah project berhasil di clone, silahkan jalankan project dengan menggunakan sintaks: <b>pnpm run dev</b></li>
    <li>Jika belum menginstal pnpm, silahkan install terlebih dahulu dengan menggunakan sintaks: <b>npm install pnpm</b></li>
    <li>Setelah berhasil menginstall pnpm, silahkan ulangi langkah nomor 2.</li>
    <li>Setelah projek berhasil di jalankan, projek akan dijalankan secara default pada port <b>5173</b>, maka sistem akan dapat di akses dengan menggunakan url: http://localhost:5173/ (local host)</li>
    <li>Sebelum melakukan pengujian, pastikan project back-end sudah di setup dan dijalankan pada port <b>3000</b></li>
    <li>Silahkan uji sistem dengan mengisi form yang sudah dibuat pada sistem front-end nya.</li>
</ol>

<h1>Testing:</h1>
<ol>
    <li>Kunjungi http://localhost:5173/ atau sesuaikan dengan port yang telah digunakan.</li>
    <li>Masukkan Form berupa:
        <ul>
            <li>patientName: String,</li>
            <li>patientId: String,</li>
            <li>dateOfTreatment: Date,</li>
            <li>treatmentDescription: [Array of String] -> MultiSelect,</li>
            <li>medicationsPrescribed: [Array of String] -> MultiSelect,</li>
            <li>costOfTreatment: Number,</li>
        </ul>
    </li>
    <li>Klik tombol submit, maka akan muncul alert bahwa data sudah berhasil diinput (jika berhasil). jika tidak berhasil, kemungkinan masih terjadi kesalahan saat setup (hub WA: 082386092684).</li>
    <li>Setelah data berhasil disubmit, maka form kembali dibersihkan untuk menginput data yang baru. Ulangi langkah nomor 2 untuk memasukkan ulang.</li>
</ol>

More question:
Email: furizal.id@gmail.com,
Phone: 082386092684
