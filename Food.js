let menu= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// // typing text code 
//  const typed = new Typed('.multiple-text', {
//       strings: ['Banquets', 'Parties','Weddings'],
//       typeSpeed: 50,
//       backspeed:60,
//       backDelay :1000,
//       loop:true,
//     });