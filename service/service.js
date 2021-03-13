const getCompleteCourse = (courseName) => {
  return getCourseFromBd(courseName);
};

const getCompleteCourseLength = async (courseName) => {
  let array = await getCompleteCourse(courseName);
  return array.length;
};

// DOC: pdf, video, presentation, etc...
const getChaptersListWithDocs = async (docType, courseName) => {
  switch (docType) {
    case "video":
      docType = "youtube";
      break;
    default:
      break;
  }
  //console.log("docType: ", docType);
  let completeCourse = await getCompleteCourse(courseName);
  videoListLength = completeCourse.length;
  let chaptersList = completeCourse.filter((element) => {
    return element[docType] !== null;
  });
  //console.log("chaptersList: ", chaptersList);
  let result = chaptersList.map((chapter) => {
    let temp = {};
    temp.id = chapter.id;
    temp.title = chapter.title;
    temp.description = chapter.description;
    temp.url = chapter.youtube;
    temp.courseName = courseName;
    return temp;
  });
  //console.log("getChapters: returns: ", result);
  return result;
};
