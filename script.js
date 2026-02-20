 /////////////////cicle skill ///////////////////////////////

 const circles = document.querySelectorAll('.circle');
 circles.forEach(elem =>{
   var dots = Number(elem.getAttribute('data-dots'));
    var marked = Number(elem.getAttribute('data-percent'));
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/ dots;



    for(let i = 0 ; i < dots ; i++){
        points += ` <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0 ; i < percent ; i++){
        pointsMarked[i].classList.add('marked');
    } 
 })

  
  let menuLi =document.querySelectorAll('header ul li a');
  let section = document.querySelectorAll('section');
/////////////////active menu ///////////////////////////////

  function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop ){}
    menuLi.forEach(sec => sec.classList.remove('active'));
    menuLi[len].classList.add('active');
  }

  activeMenu();
  window.addEventListener('scroll' , activeMenu);

  /////////////////sticky navbar ///////////////////////////////

  const header = document.querySelector("header");
  window.addEventListener("scroll",function(){
      header.classList.toggle("sticky",window.scrollY > 50)
  })

/////////////////toggle icon navbar ///////////////////////////////
const btn = document.getElementById("menu-icon");
const icon = btn.querySelector("i");
const navList = document.getElementById("nav-list");

btn.addEventListener("click", () => {
  navList.classList.toggle("open");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navList.classList.remove("open");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  }
});






  

/////////////////Form Validasi ///////////////////////////////

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    messageBox.textContent = "";
    messageBox.style.color = "red";

    if (!name || !email || !address || !phone || !message) {
      messageBox.textContent = "All fields must be filled!";
      return;
    }

    if (!email.includes("@")) {
      messageBox.textContent = "Please enter a valid email address!";
      return;
    }

    if (isNaN(phone) || phone.length < 10) {
      messageBox.textContent = "Phone number must be at least 10 digits!";
      return;
    }

    messageBox.style.color = "green";
    messageBox.textContent = "Message sent successfully!";
    form.reset();
  });

});

/////////////////parallax ///////////////////////////////

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show-items');
    } else {
      entry.target.classList.remove('show-items');
    }
  });
});

const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll('.scroll-top');
scrollTop.forEach((el) => observer.observe(el));



//////loading screen//////////////////////////////////////  
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loading-screen");
  if (!loader) return;

  loader.style.transition = "opacity 0.5s ease";

  // ⏱️ JEDA 1 DETIK
  setTimeout(() => {
    loader.style.opacity = "0";

    loader.addEventListener("transitionend", () => {
      loader.style.display = "none";
    }, { once: true });

  }, 2000); // 1000 ms = 1 detik
});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

////orbiting icons////////////////////////////////


const icons = document.querySelectorAll(".orbit");
let angle = 0;
const radius = 230;

function animate() {
  angle += 0.01;

  icons.forEach((icon, i) => {
    let currentAngle = angle + (i * (Math.PI * 2 / icons.length));

    let x = Math.cos(currentAngle) * radius;
    let y = Math.sin(currentAngle) * radius;

    icon.style.left = 140 + x + "px";
    icon.style.top = 200 + y + "px";

    // 🔥 efek zoom 3D
    let scale = (Math.sin(currentAngle) + 1.5) / 2;
    icon.style.transform = `scale(${scale})`;
  });

  requestAnimationFrame(animate);
}

animate();
// modal about

const readBtn = document.querySelector(".btn-read");
const modal = document.getElementById("aboutModal");
const closeModal = document.querySelector(".close-modal");

readBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

///close modal//
const closeBtnMobile = document.querySelector(".close-btn");

closeBtnMobile.addEventListener("click", () => {
  modal.classList.remove("show");
});










