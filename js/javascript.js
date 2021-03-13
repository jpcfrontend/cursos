document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("scroll-to-top")
    .addEventListener("click", scrollToTop);
  window.onscroll = () => scrollFunction();
});

/* SCROLL TO TOP */
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top").style.display = "block";
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
  }
};

const scrollToTop = () => {
  document.getElementById("start").scrollIntoView({
    behavior: "smooth",
  });
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
};

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

const ifPresentations = () => {
  let viewWidth = document.body.clientWidth;
  if (mobile()) {
    let desktopPdfContainers = document.querySelectorAll(
      ".desktop-pdf-container"
    );
    for (let index = 0; index < desktopPdfContainers.length; index++) {
      desktopPdfContainers[index].classList.add("d-none");
    }
  }
};

const videoSizeController = () => {
  let viewWidth = document.body.clientWidth;
  const MIN_VIDEO_SIZE = 560;
  const HORIZONTAL_SEPARATION = 20;
  const VIDEO_ASPECT_RATIO = 1.77;
  let slidersToChangeVideoSize = document.querySelectorAll(".changeVideoSize");
  if (mobile()) {
    let videoWidth =
      viewWidth < MIN_VIDEO_SIZE
        ? viewWidth - HORIZONTAL_SEPARATION
        : MIN_VIDEO_SIZE;
    if (slidersToChangeVideoSize.length !== 0) {
      let iframesList = document.querySelectorAll("iframe");

      for (let index = 0; index < slidersToChangeVideoSize.length; index++) {
        slidersToChangeVideoSize[index].classList.add("d-none");
        slidersToChangeVideoSize[index].previousElementSibling.classList.add(
          "d-none"
        );
      }

      for (let index = 0; index < iframesList.length; index++) {
        iframesList[index].width = videoWidth;
        iframesList[index].height =
          videoWidth / VIDEO_ASPECT_RATIO - HORIZONTAL_SEPARATION;
      }
    }
  } else {
    if (slidersToChangeVideoSize.length !== 0) {
      for (let index = 0; index < slidersToChangeVideoSize.length; index++) {
        slidersToChangeVideoSize[index].style.setProperty(
          "--value",
          slidersToChangeVideoSize[index].value - MIN_VIDEO_SIZE
        );
        slidersToChangeVideoSize[index].addEventListener("input", function () {
          changeVideoSize(slidersToChangeVideoSize[index]);
          slidersToChangeVideoSize[index].style.setProperty(
            "--value",
            Math.round(
              (slidersToChangeVideoSize[index].value - MIN_VIDEO_SIZE) / 5.6
            )
          );
        });
      }
    }
  }
};

// VIDEO SIZE
const getVideoId = (btnElement) => {
  return btnElement.parentElement.nextElementSibling.id;
};

const changeVideoSize = (slider) => {
  let btnElement = slider;
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

// SNIPPER LOADER
const showLoader = (id) => {
  let div = document.getElementById(id);
  div.innerHTML = `
    <div id="loader" class="row py-5">
      <div class="col-12 d-center">
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  `;
};

const hideLoader = (id) => {
  let div = (document.getElementById(id).innerHTML = "");
};

// example scroll to
// document.getElementById("id").scrollIntoView({
//   behavior: "smooth",
// });
