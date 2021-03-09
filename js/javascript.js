// DOCUMENT READY
document.addEventListener("DOMContentLoaded", function () {
  checkIfMobile();
});

// CHECKING MOBILE
const mobile = () => {
  //return navigator.userAgent.toLowerCase().match(/mobile/i);
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
const checkIfMobile = () => {
  let btnsList = document.querySelectorAll(".changeVideoSize");
  let viewWidth = document.body.clientWidth;
  console.log("viewWidth: ", viewWidth);

  if (mobile()) {
    let videoWidth = viewWidth < 560 ? viewWidth - 20 : 560;
    console.log("videoWidth: ", videoWidth);
    if (btnsList.length !== 0) {
      let iframesList = document.querySelectorAll("iframe");

      for (let index = 0; index < btnsList.length; index++) {
        btnsList[index].classList.add("d-none");
        btnsList[index].previousElementSibling.classList.add("d-none");
      }

      for (let index = 0; index < iframesList.length; index++) {
        iframesList[index].width = videoWidth;
        iframesList[index].height = videoWidth / 1.77 - 20;
      }
    }
  } else {
    if (btnsList.length !== 0) {
      for (let index = 0; index < btnsList.length; index++) {
        btnsList[index].addEventListener("click", changeVideoSize);
      }
    }
  }
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
