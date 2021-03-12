const home = document.querySelector(`.homeJs`);
const homeT = document.querySelector(`.home`).offsetTop;

const about = document.querySelector(`.aboutJs`);
const aboutT = document.querySelector(`.aboutMe`).offsetTop;

const skills = document.querySelector(`.skillsJs`);
const skillsT = document.querySelector(`.skills`).offsetTop;

const project = document.querySelector(`.projectJs`);
const projectT = document.querySelector(`.project`).offsetTop;

const carrer = document.querySelector(`.carrerJs`);
const carrerT = document.querySelector(`.carrer`).offsetTop;

const edu = document.querySelector(`.eduJs`);
const eduT = document.querySelector(`.ecucation`).offsetTop;

const blog = document.querySelector(`.blogJs`);
const blogT = document.querySelector(`.BLOG`).offsetTop;

const contact = document.querySelector(`.contactJs`);
const contactT = document.querySelector(`.CONTACT`).offsetTop;

console.log(homeT);
const scroll = (target, tag) => {
  target.addEventListener("click", (e) => {
    //tag까지 이동
    e.preventDefault();
    window.scrollTo({ top: tag, behavior: "smooth" });
  });
};

const removeAll = () => {
  home.classList.remove("selected");
  about.classList.remove("selected");
  skills.classList.remove("selected");
  project.classList.remove("selected");
  carrer.classList.remove("selected");
  edu.classList.remove("selected");
  blog.classList.remove("selected");
  contact.classList.remove("selected");
};

const checkSelect = () => {
  const scrollIndex = document.documentElement.scrollTop;
  if (scrollIndex < aboutT) {
    removeAll();
    home.classList.add("selected");
  } else if (scrollIndex < skillsT) {
    removeAll();
    about.classList.add("selected");
  } else if (scrollIndex < carrerT) {
    removeAll();
    skills.classList.add("selected");
  } else if (scrollIndex < projectT) {
    removeAll();
    carrer.classList.add("selected");
  } else if (scrollIndex < eduT) {
    removeAll();
    project.classList.add("selected");
  } else if (scrollIndex < blogT) {
    removeAll();
    edu.classList.add("selected");
  } else if (scrollIndex < contactT) {
    removeAll();
    blog.classList.add("selected");
  } else {
    removeAll();
    contact.classList.add("selected");
  }
};
const listenScroll = () => {
  document.addEventListener("scroll", () => {
    checkSelect();
  });
};

const init = () => {
  scroll(home, homeT);
  scroll(about, aboutT);
  scroll(skills, skillsT);
  scroll(project, projectT);
  scroll(carrer, carrerT);
  scroll(edu, eduT);
  scroll(blog, blogT);
  scroll(contact, contactT);
  checkSelect();
  listenScroll();
  //home.classList.add('selected');
};

init();
