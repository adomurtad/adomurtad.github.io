document.addEventListener('DOMContentLoaded', function() {
    const playMusicBtn = document.getElementById('play-music');
    const audioContainer = document.getElementById('audio-container');
    const audioIcon = document.getElementById('audio-icon');
    const song = document.getElementById('song');

    // Fungsi untuk mengontrol pemutaran musik
    function toggleMusic() {
        if (song.paused) {
            song.play();
            audioIcon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-vinyl" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4M4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0"/>
                <path d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
            `;
        } else {
            song.pause();
            audioIcon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
                </svg>
            `;
        }
    }

    // Menyimpan status scroll di localStorage
    if (!localStorage.getItem('scrollUnlocked')) {
        document.body.classList.add('no-scroll');
    }

    // Tampilkan kontainer audio dan ikon musik saat tombol di klik
    playMusicBtn.addEventListener('click', function() {
        document.body.classList.remove('no-scroll');
        audioContainer.style.display = 'block';
        audioIcon.style.display = 'block';
        song.play();
        localStorage.setItem('scrollUnlocked', 'true');
    });

    // Tambahkan event listener pada ikon audio
    audioIcon.addEventListener('click', toggleMusic);

    // Menghapus kunci scroll jika status scroll sudah di-unlock
    window.addEventListener('load', function() {
        if (localStorage.getItem('scrollUnlocked') === 'true') {
            document.body.classList.remove('no-scroll');
        }
    });
});


const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama') || '';
  
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';
const namaContainer = document.querySelector('.hero h4 span');
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',');

document.querySelector('#nama').value = nama;
document.addEventListener("DOMContentLoaded", function () {
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navbarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Tutup navbar saat link diklik
            var bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        });
    });
});

window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.scrolling-wrapper img');
    images.forEach(img => {
      const position = img.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1;
  
      if (position < screenPosition) {
        img.classList.add('start-animation'); // Mulai animasi setelah scroll
      }
    });
  });
  

function moveImage(imgElement) {
    imgElement.classList.add('scrollRight');
}

function animateSections(sections) {
    sections.forEach(section => {
        if (section) {
            let position = section.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1;

            if (position < screenPosition) {
                section.classList.add('move-up');
            }
        }
    });
}

function animateImages(images) {
    images.forEach(image => {
        let position = image.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1;

        if (position < screenPosition) {
            image.classList.add('scrollRight');
            image.style.opacity = "1";
        }
    });
}

// Pilih elemen-elemen yang akan dianimasikan
let sections = document.querySelectorAll('h3, h2, h1, p, span, section, id');
let images = document.querySelectorAll('img');

// Panggil animasi saat halaman di-scroll
window.addEventListener('scroll', () => {
    animateSections(sections);
    animateImages(images);
});

  
