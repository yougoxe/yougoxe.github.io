
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



const darkTheme = 'dark-theme'

const themeButton = document.getElementById('theme-button')

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

function colorIcons(theme){
    const dl = document.getElementById('exportPdf');
    const map = document.getElementById('map');
    const envelope = document.getElementById('envelope');
    const phone = document.getElementById('phone');
    const id = document.getElementById('id');
    const linkedin = document.getElementById('linkedin');
    const github = document.getElementById('github');
    const music = document.getElementById('music');
    const book = document.getElementById('book');
    const sport = document.getElementById('sport');
    const game = document.getElementById('videogame');
    if(theme == 'light'){
        themeButton.src = link+"assets/img/moon-regular-24.png"
        dl.src = link+"assets/img/download-solid-24.png";
        map.src = link+"assets/img/map-regular-24.png";
        envelope.src = link+"assets/img/envelope-regular-24.png";
        phone.src = link+"assets/img/phone-regular-24.png";
        id.src = link+"assets/img/id-card-regular-24.png";
        linkedin.src = link+"assets/img/linkedin-square-logo-24.png";
        github.src = link+"assets/img/github-logo-24.png";
        music.src = link+"assets/img/music-regular-24.png";
        book.src = link+"assets/img/book-regular-24.png";
        sport.src = link+"assets/img/trophy-regular-24.png";
        game.src = link+"assets/img/game-regular-24.png";
    }else{
        themeButton.src = link+"assets/img/sun-regular-white-24.png"
        dl.src = link+"assets/img/download-solid-white-24.png";
        map.src = link+"assets/img/map-regular-white-24.png";
        envelope.src = link+"assets/img/envelope-regular-white-24.png";
        phone.src = link+"assets/img/phone-regular-white-24.png";
        id.src = link+"assets/img/id-card-regular-white-24.png";
        linkedin.src = link+"assets/img/linkedin-square-logo-white-24.png";
        github.src = link+"assets/img/github-logo-white-24.png";
        music.src = link+"assets/img/music-regular-white-24.png";
        book.src = link+"assets/img/book-regular-white-24.png";
        sport.src = link+"assets/img/trophy-regular-white-24.png";
        game.src = link+"assets/img/game-regular-white-24.png";
    }
}

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}

const link = "https://yougoxe.github.io/CV/"
colorIcons(getCurrentTheme());

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    colorIcons(getCurrentTheme());
})


document.getElementById('exportPdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        format: 'a4',
        orientation: 'portrait'
    });

    const themeButton = document.getElementById('theme-button');
    themeButton.classList.add("hidden");

    const dl = document.getElementById('exportPdf');
    dl.classList.add("hidden");

    const content = document.getElementById('area-cv');
    
    doc.html(content, {
        callback: function (doc) {
            doc.save('document.pdf');
            dl.classList.remove("hidden");
            themeButton.classList.remove("hidden");
        },
        x: 0,
        y: 0,
        html2canvas: {
            useCORS: true,
            scale: 0.22 // Réduction de l'échelle pour mieux s'adapter
        }
    });

});