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
const scroll = (target,tag) => {

    target.addEventListener('click', (e) => {
        //tag까지 이동
        e.preventDefault();
        window.scrollTo({top:tag, behavior:'smooth'});
    })
}


// document.addEventListener('scroll', ()=>{
//     console.log(document.documentElement.scrollTop);
// });


scroll(home,homeT); 
scroll(about,aboutT); 
scroll(skills,skillsT); 
scroll(project,projectT); 
scroll(carrer,carrerT); 
scroll(edu,eduT); 
scroll(blog,blogT); 
scroll(contact,contactT); 