// DOCUMENT READY
document.addEventListener("DOMContentLoaded", function () {
  console.log("tu puta madre");
  document
    .getElementById("increaseVideoSize")
    .addEventListener("click", increaseVideoSize);
});

// VIDEO SIZE
const normalWidthVideoSize = 560;
const normalHeightVideoSize = 315;
const maxWidthVideoSize = 1120;
const maxHeightVideoSize = 630;

const getVideoId = (btnId) => {
  let iframeId = document.getElementById(btnId).nextElementSibling.id;
  return iframeId;
};

const increaseVideoSize = (e) => {
  let btnId = e.target.id;
  let video = document.getElementById(getVideoId(btnId));

  if (video.width == normalWidthVideoSize) {
    if (document.body.clientWidth > maxWidthVideoSize) {
      video.width = maxWidthVideoSize;
      video.height = maxHeightVideoSize;
      return false;
    } else {
      alert("pantalla demasiado pequeña para aumentar tamaño del vídeo!");
    }
  }
  if (video.width == maxWidthVideoSize) {
    video.width = normalWidthVideoSize;
    video.height = normalHeightVideoSize;
    return false;
  }
};

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
