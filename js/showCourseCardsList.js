const showCourseCardsList = async (courseName) => {
  let div = document.getElementById("boxesContainer");
  showLoader("boxesContainer");
  let courseList = await getCompleteCourse(courseName);
  hideLoader("boxesContainer");
  div.innerHTML = courseList
    .map((elem) => {
      return `<div class="cardBox">
        <div class="card">
        <div class="front">
            <h3>${elem.title}</h3>
            <p>${elem.description}</p>
            <img style="width: 100px; height: auto;" src="${elem.icon}"/>
        </div>
        <div class="back">
            <h3>${elem.title}</h3>
            <p>${elem.comment}</p>
            <div class="d-flex flex-row justify-content-around align-items-center ">
               <i id="${
                 elem.youtube ? elem.id : ""
               }" class="${courseName} fab fa-youtube fa-3x  ${
        elem.youtube ? "card-icons youtube-active" : ""
      }" title="${elem.youtube ? "Ver vídeo" : ""}"></i>
               <i id="${
                 elem.pdf ? elem.id : ""
               }" class="fas fa-file-pdf fa-3x ${
        elem.pdf ? "card-icons pdf-active" : ""
      }" title="${elem.pdf ? "Leer pdf" : ""}"></i>
            </div>
        </div>
        </div>
    </div>`;
    })
    .join("");

  let youtubeBtnsReady = document.querySelectorAll(".youtube-active");
  for (let index = 0; index < youtubeBtnsReady.length; index++) {
    const video = youtubeBtnsReady[index];
    video.addEventListener("click", () => videoPlayer(video.id, courseName));
  }
  let pdfBtnsReady = document.querySelectorAll(".pdf-active");
};
