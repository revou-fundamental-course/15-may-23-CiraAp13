// Mendapatkan elemen form untuk menghitung luas
const luasForm = document.getElementById('luas-form');

// Mendapatkan elemen form untuk menghitung keliling
const kelilingForm = document.getElementById('keliling-form');

// Mendapatkan elemen output untuk menampilkan hasil luas
const luasOutput = document.getElementById('output_luas');

// Mendapatkan elemen output untuk menampilkan hasil keliling
const kelilingOutput = document.getElementById('output_keliling');

// Menambahkan event listener pada form luas
luasForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Mengambil nilai sisi dari input
  const sisi = parseFloat(document.getElementById('sisi-luas').value);

  // Menghitung luas berdasarkan sisi
  const luas = sisi * sisi; 

  // Menampilkan hasil luas pada output
  luasOutput.innerText = 
  `
  L = S x S
  L = ${sisi} x ${sisi}
  
  Luas: ${luas}`

});

// Menambahkan event listener pada form keliling
kelilingForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Mengambil nilai sisi dari input
  const sisi = parseFloat(document.getElementById('sisi-keliling').value);

  // Menghitung keliling berdasarkan sisi
  const keliling = 4 * sisi; 

  // Menampilkan hasil keliling pada output
  kelilingOutput.innerText = 
  `
  K = 4 x S
  K = 4 x ${sisi}

  Keliling: ${keliling}`;
});

// Menambahkan event listener pada tombol reset luas
const resetLuas = document.getElementById('reset-luas');
resetLuas.addEventListener('click', function() {
  // Menghapus teks pada output luas
  luasOutput.innerText = ''; 

  // Mengatur ulang nilai pada form luas
  luasForm.reset(); 
});

// Menambahkan event listener pada tombol reset keliling
const resetKeliling = document.getElementById('reset-keliling');
resetKeliling.addEventListener('click', function() {
  // Menghapus teks pada output keliling
  kelilingOutput.innerText = ''; 

  // Mengatur ulang nilai pada form keliling
  kelilingForm.reset(); 
});
