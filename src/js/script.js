// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};


// bagian humberger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// klik di luar hamburger
window.addEventListener('click', function (e)  {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }

// Show and hide sections
const showWebDesain = document.getElementById('show-web-desain');
const showAppDesain = document.getElementById('show-app-desain');
const webDesain = document.getElementById('web-desain');
const appDesain = document.getElementById('app-desain');

showWebDesain.addEventListener('click', function(e) {
  e.preventDefault();
  webDesain.style.display = 'flex';
  appDesain.style.display = 'none';
});

showAppDesain.addEventListener('click', function(e) {
  e.preventDefault();
  webDesain.style.display = 'none';
  appDesain.style.display = 'flex';
});

// Toggle sections and change button colors
document.getElementById('show-web-desain').addEventListener('click', function () {
    document.getElementById('web-desain').style.display = 'flex';
    document.getElementById('app-desain').style.display = 'none';
    this.classList.remove('bg-[#007BFF]', 'hover:bg-primary');
    this.classList.add('bg-primary', 'hover:bg-opacity-80');
    document.getElementById('show-app-desain').classList.remove('bg-primary', 'hover:bg-opacity-80');
    document.getElementById('show-app-desain').classList.add('bg-[#007BFF]', 'hover:bg-primary');
});

document.getElementById('show-app-desain').addEventListener('click', function () {
    document.getElementById('app-desain').style.display = 'flex';
    document.getElementById('web-desain').style.display = 'none';
    this.classList.remove('bg-[#007BFF]', 'hover:bg-primary');
    this.classList.add('bg-primary', 'hover:bg-opacity-80');
    document.getElementById('show-web-desain').classList.remove('bg-primary', 'hover:bg-opacity-80');
    document.getElementById('show-web-desain').classList.add('bg-[#007BFF]', 'hover:bg-primary');
});
