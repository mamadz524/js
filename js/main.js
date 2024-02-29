// // menampilkan notif alert("HEY");
// // meanmpilkan komen dalam notif prompt("masukkan usia anda?");
// // var usia = 30;
// // const usia = 30;

// //jika const  dan usia dan console... maka hasilnya eror
// // karena variabelnua berbentuk konstan
// // dan jika di ganti let  variabelnya usia = 30
// // dan usia = 35 maka hasilnya 35 kak yang 30 nya kemana jadi
// // gini let usia akan di eksekusi dari atas ke bawah lalu yang ke 2 diganti 35
// // dan console.log itu yang di ambil usia yang terahir dan sedang kan yang terahir 35

// // let usia = 30;
// // usia = 35;
// // console.log("heyhoo usia kamu adalah " + usia);
// // alert("usia kamu adalah" + usia);

// let usia = prompt("berapa usia kamu?");
// alert("usia anda adalah" + usia);
// let nama = "azhar ahmad"; //tipe string
// let usia = parseInt("30"); //tipe integer number
// let tinggibadan = 173.5; //tipe dauble float
// let beratbadan = ""; //tipe integer
// let pacar = 1;

// beratbadan = 60;

// if (pacar == null) {
//   pacar = "belum punya";
// } else {
//   pacar = "udah punya";
// }

// let saldoAwal = 50000;
// let saldoTambahan = 80000;
// const hutang = 30000;
// const saldoAkhir = saldoAwal + saldoTambahan - hutang;

// const x = 9;
// const y = 2;
// const z = x / y;

// alert("nilai x = ${x} / nilai y =${y} maka hasilnya adalah ${z}");

// // alert("nama anda adalah" + nama + "dan usia anda adalah" + usia);
// alert(
//   `Nama saya ${nama}, usia saya ${usia}, tinggi badan saya adalah ${tinggibadan}cm, berat badan saya adalah ${beratbadan}kg, dan pacar saya ${pacar}.`
// );

// alert(
//   `saldo awal saya sebesar Rp.${saldoAwal} & saldo tambahan saya akan saya miliki sebesar Rp.${saldoTambahan} jadi total saldo saya miliki adalah sebanyak Rp.${saldoAkhir}`
// );

let namaGuru = ["jodi", "tomi", "tofik"];
namaGuru.push("dea", "fikri");
namaGuru.shift(); //untuk menghapus yang awal
namaGuru.pop(); //untuk menghapus yang akhir
alert(namaGuru);

// for loop
// 3 statement

// for (let i = 1; i <= 20; i = i + 1) {
//   console.log("azhar ahmad");
// }

// const namaGuru = ["dea", "fikri", "retno", "bunga"];
// for (let i = 0; i < namaGuru.length; i++) {
//   console.log(namaGuru[i]);
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log("dea afrizal");
// }
// let i = 0;
// do {
//   console.log("azhar ahmad");
// } while (i < 10);
// Deklarasi variabel
// let saldoAwal = 0;
// let setoran = 0;
// let tarikan = 0;

// // Prompt saldo awal
// saldoAwal = prompt("Saldo awal Anda berapa?");

// // Prompt setoran
// setoran = prompt("Berapa setoran Anda?");

// // Prompt tarikan
// tarikan = prompt("Berapa tarikan Anda?");

// // Hitung saldo akhir
// saldoAkhir = saldoAwal + setoran - tarikan;

// // Tampilkan saldo akhir
// console.log("Saldo akhir Anda adalah " + saldoAkhir);
// const notification = new Notification(judul, {
//   icon: "https://example.com/icon.png",
//   vibrate: true,
//   sound: true,
//   timeout: 5000,
//   actions: [
//     {
//       label: "Lihat Saldo",
//       action: () => {
//         // Tindakan saat tombol diklik
//       },
//     },
//     {
//       label: "Isi Ulang",
//       action: () => {
//         // Tindakan saat tombol diklik
//       },
//     },
//   ],
// });
