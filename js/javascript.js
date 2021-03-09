// DOCUMENT READY
document.addEventListener("DOMContentLoaded", function () {
  checkIfMobile();
});

// MOBILE - DESKTOP / VIDEO - PDFS
const mobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
};

const pdfController = (viewWidth) => {
  console.log("hello world");
};
const videoController = (viewWidth) => {
  let btnsToChangeVideoSize = document.querySelectorAll(".changeVideoSize");
  if (mobile()) {
    let videoWidth = viewWidth < 560 ? viewWidth - 20 : 560;
    if (btnsToChangeVideoSize.length !== 0) {
      let iframesList = document.querySelectorAll("iframe");

      for (let index = 0; index < btnsToChangeVideoSize.length; index++) {
        btnsToChangeVideoSize[index].classList.add("d-none");
        btnsToChangeVideoSize[index].previousElementSibling.classList.add(
          "d-none"
        );
      }

      for (let index = 0; index < iframesList.length; index++) {
        iframesList[index].width = videoWidth;
        iframesList[index].height = videoWidth / 1.77 - 20;
      }
    }
  } else {
    if (btnsToChangeVideoSize.length !== 0) {
      for (let index = 0; index < btnsToChangeVideoSize.length; index++) {
        btnsToChangeVideoSize[index].addEventListener("click", changeVideoSize);
      }
    }
  }
};

const checkIfMobile = () => {
  let viewWidth = document.body.clientWidth;
  videoController(viewWidth);
  pdfController(viewWidth);
};

// VIDEO SIZE
const getVideoId = (btnElement) => {
  return btnElement.parentElement.nextElementSibling.id;
};

const changeVideoSize = (e) => {
  let btnElement = e.target;
  let video = document.getElementById(getVideoId(btnElement));
  let viewWidth = document.body.clientWidth;
  if (viewWidth < btnElement.value) {
    video.width = viewWidth - 20;
    video.height = viewWidth / 1.77;
  } else {
    video.width = btnElement.value;
    video.height = btnElement.value / 1.77;
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
