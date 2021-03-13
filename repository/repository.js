const getCourseFromBd = async (courseName) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  switch (courseName) {
    case "cursoHtml":
      return cursoHtml;
      break;
    default:
      break;
  }
};

let cursoHtml = [
  {
    id: 1,
    title: "CAP 1",
    description: "Presentación del curso",
    icon: "../img/logo-html5.png",
    youtube: "https://www.youtube.com/embed/uBKPzf6sjYI",
    pdf: null,
    comment:
      "Aquí empezamos el curso. Cómo aprovecharlo y sacarle el máximo rendimiento",
  },
  {
    id: 2,
    title: "CAP 2",
    description: "VS Code y extensiones",
    icon: "../img/logo-html5.png",
    youtube: null,
    pdf: "./pdf/prueba_PDF.pdf",
    comment:
      "Aquí veremos el editor a usar y su configuración así como una primera toma de contacto",
  },
  {
    id: 3,
    title: "CAP 3",
    description: "Lenguajes de marcado",
    icon: "../img/logo-html5.png",
    youtube: "https://www.youtube.com/embed/uBKPzf6sjYI",
    pdf: "./pdf/prueba_PDF.pdf",
    comment: "Explicaremos que son los lenguajes de marcado",
  },
  {
    id: 4,
    title: "CAP 4",
    description: "Estructura Básica",
    icon: "../img/logo-html5.png",
    youtube: "https://www.youtube.com/embed/uBKPzf6sjYI",
    pdf: null,
    comment: "Nos metemos manos a la obra con la estructura básica de un html",
  },
  {
    id: 5,
    title: "CAP 5",
    description: "Seo en el html",
    icon: "../img/logo-html5.png",
    youtube: "https://www.youtube.com/embed/uBKPzf6sjYI",
    pdf: null,
    comment: "Aquí comprenderemos algo básico que hay que saber sí o sí",
  },
  {
    id: 6,
    title: "CAP 6",
    description: "Cap test sin nada",
    icon: "../img/logo-html5.png",
    youtube: null,
    pdf: null,
    comment: "Testeando carga nula",
  },
];
