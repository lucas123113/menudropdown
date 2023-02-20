const sub1 = document.getElementById("submenu1");
const menu1 = document.getElementById("features");
const btn = document.getElementById("btn1")
const sub2 = document.getElementById("submenu2")



function mostrarMenu(elemento1, elemento2) {
    elemento1.addEventListener("click", function() {
      const style = window.getComputedStyle(elemento2);
      if (style.display === "none") {
        elemento2.style.display = "flex";
      } else {
        elemento2.style.display = "none";
      }
    });
  }
  
  mostrarMenu(menu1, sub1);
  mostrarMenu(btn, sub2);
