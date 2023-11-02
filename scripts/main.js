document.addEventListener("DOMContentLoaded", ()=>{

    const nav = document.querySelector("nav"); // Get first and only nav element object
    
    nav.innerHTML = `
<a href="index.html"> HOME </a>
<a href="activities.html"> Activities </a>
<a href="hikes.html"> Hikes </a>
<a href="video.html"> Video </a>
    `;


});//END DOMContentLoaded