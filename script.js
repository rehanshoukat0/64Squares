// ===== Highlight Active Navigation Link =====
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.background = "linear-gradient(to right, #ff7e5f, #feb47b)";
        link.style.color = "#fff";
        link.style.borderRadius = "8px";
    }
});

// ===== Page Fade-in Effect =====
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s ease-in-out";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});


// ===== Scroll To Top Button =====
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "12px 16px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.background = "linear-gradient(to right, #ff7e5f, #feb47b)";
scrollBtn.style.color = "#fff";
scrollBtn.style.display = "none";
scrollBtn.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
scrollBtn.style.zIndex = "1000";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
       
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const board = document.getElementById("chessboard");

const pieces = [
    "♜","♞","♝","♛","♚","♝","♞","♜",
    "♟","♟","♟","♟","♟","♟","♟","♟",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "♙","♙","♙","♙","♙","♙","♙","♙",
    "♖","♘","♗","♕","♔","♗","♘","♖"
];

let selectedSquare = null;

pieces.forEach((piece, index) => {
    const square = document.createElement("div");
    square.classList.add("square");

    const row = Math.floor(index / 8);
    const isLight = (row + index) % 2 === 0;
    square.classList.add(isLight ? "light" : "dark");

    square.textContent = piece;

    square.addEventListener("click", () => {
        if (selectedSquare) {
            selectedSquare.classList.remove("selected");
            selectedSquare = null;
        } else {
            square.classList.add("selected");
            selectedSquare = square;
        }
    });

    board.appendChild(square);
});
// Add this to your script.js
const images = document.querySelectorAll(".reveal-img");

window.addEventListener("scroll", () => {
  images.forEach(img => {
    const top = img.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      img.classList.add("active");
    }
  });
});



