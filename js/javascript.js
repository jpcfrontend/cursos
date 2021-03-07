// NAV
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  let btns = document.getElementsByClassName("sidenav")[0].children;
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.display = "block";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  let btns = document.getElementsByClassName("sidenav")[0].children;
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.display = "none";
  }
}
