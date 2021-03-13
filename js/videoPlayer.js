let chaptersCompleteCourseLength = null;
let actualVideo = null;
let videoListLength = null;
let videoPosition = null;

let videoSize = null;

const openVideoScreen = (div) => {
  div.style.height = "100%";
};

const hiddeVideoScreen = (div) => {
  div.style.height = "0%";
};

const getVideo = async (videoId, videoList) => {
  let videoData = videoList.filter((element) => element.id == videoId);
  return videoData[0];
};

const findVideoIndex = (videoId, videoList) => {
  let nextElement = videoList.findIndex((element) => element.id == videoId);
  return nextElement;
};

const nextVideo = async (divToInsertVideo, video, videoList) => {
  let videoId = video.id;
  let videoActualPosition = findVideoIndex(videoId, videoList);
  videoNextPosition = videoActualPosition + 1;
  let nextVideo = videoList[videoNextPosition];
  actualVideo = nextVideo;
  videoPosition = videoNextPosition + 1;
  showVideo(divToInsertVideo, nextVideo, videoList);
};

const previousVideo = (divToInsertVideo, video, videoList) => {
  let videoId = video.id;
  let videoActualPosition = findVideoIndex(videoId, videoList);
  videoNextPosition = videoActualPosition - 1;
  let nextVideo = videoList[videoNextPosition];
  actualVideo = nextVideo;
  videoPosition = videoNextPosition + 1;
  showVideo(divToInsertVideo, nextVideo, videoList);
};

const showVideo = (divToInsertVideo, video, videoList) => {
  divToInsertVideo.innerHTML = `
    <div class="row">
      <div class="col-12 d-center">
        <div class="d-column mt-5 relative-pos text-white">
          <div id="hiddeVideoBtn" class="hiddeVideoBtn" title="Cerrar Vídeo">X</div>
          <h2>${video.title}</h2>
          <h3>${video.description}</h2>
          <div class="d-column">
              <p class="mb-2">Tamaño del vídeo:</p>
              <input type="range" step=10 min="560" max="1120" value="560" class="changeVideoSize slider mb-4">
          </div>
          <iframe id="${video.id}" width="560" height="315" src="${video.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div id="paginationVideo" class="d-flex flex-row justify-content-center align-items-center w-100 py-3">
            <i id="previousVideoBtn" class="fas fa-chevron-left fa-2x cursor-pointer" title="Vídeo anterior"></i>
            <div class="px-5 d-column">
              <p >Vídeo ${videoPosition} de ${videoListLength}</p>
            </div>
            <i id="nextVideoBtn" class="fas fa-chevron-right fa-2x cursor-pointer" title="Siguiente vídeo"></i>
          </div>
        </div>
      </div>
    </div>
  `;

  if (videoListLength === videoPosition)
    document.getElementById("nextVideoBtn").classList.add("d-none");

  if (videoPosition === 1)
    document.getElementById("previousVideoBtn").classList.add("d-none");

  videoSizeController();
  document
    .getElementById("hiddeVideoBtn")
    .addEventListener("click", () => hiddeVideoScreen(divToInsertVideo));

  videoSizeController();

  document
    .getElementById("nextVideoBtn")
    .addEventListener("click", () =>
      nextVideo(divToInsertVideo, actualVideo, videoList)
    );
  document
    .getElementById("previousVideoBtn")
    .addEventListener("click", () =>
      previousVideo(divToInsertVideo, actualVideo, videoList)
    );
};

const videoPlayer = async (videoId, courseName) => {
  const SCREEN_VIDEO_PLAYER_ID = "video-overlay";
  let divToInsertVideo = document.getElementById(SCREEN_VIDEO_PLAYER_ID);

  openVideoScreen(divToInsertVideo);

  //showLoader(SCREEN_VIDEO_PLAYER_ID);
  let videoList = await getChaptersListWithDocs("video", courseName);
  videoListLength = videoList.length;
  let video = await getVideo(videoId, videoList);
  actualVideo = video;
  videoPosition = findVideoIndex(videoId, videoList) + 1;
  //hideLoader("loader");
  showVideo(divToInsertVideo, actualVideo, videoList);
};
