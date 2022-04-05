// const slider = [
//     {
//         id: 0,
//         name: "Productive Solution",
//         img:"https://i.ibb.co/crHMrVJ/banner-img-1-1.jpg",
//         text: "Much but because a cagily lynx angelfish this alas walked this acutely robin this involuntary that possessive overlaid impala moronic attentively. ",
//     },
//     {
//         id: 1,
//         name: "Insight Commitment",

//         img:"https://i.ibb.co/XWV8ph6/banner-img-2.jpg",
//         text: "Much but because a cagily lynx angelfish this alas walked this acutely robin this involuntary that possessive overlaid impala moronic attentively.",
//     },

// ];



// const img = document.getElementById("slider-image");
// const names = document.getElementById("slider-name");
// const info = document.getElementById("slider-text");

// const prevBtn = document.getElementsByClassName("slider-next");
// const nextBtn = document.getElementsByClassName("slider-prev");

// // set starting item
// let currentItem = 1;

// // load initial item
// window.addEventListener("DOMContentLoaded", function () {
//     const item = slider[currentItem];
//     // console.log(item);
//     img.src = item.img

//     names.textContent = item.name
//     info.textContent = item.info
// });

// // show person based on item
// function showPerson(person) {
//     const item = slider[person];
//     console.log(item);
//     img.src = item.img;
//    names.textContent = item.name
  
//     names.textContent = item.info
// }
// // show next person
// nextBtn.addEventListener("click", function () {
//     currentItem++;
//     if (currentItem > slider.length - 1) {
//         currentItem = 0;
//     }
//     showPerson(currentItem);
// });
// // show prev person
// prevBtn.addEventListener("click", function () {
//     currentItem--;
//     if (currentItem < 0) {
//         currentItem = slider.length - 1;
//     }
//     showPerson(currentItem);
// });






const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {

  links.classList.toggle("show-links");
});








const reviews = [
   
    {
        id: 0,
        name: "Productive Solution",
        img:"https://i.ibb.co/crHMrVJ/banner-img-1-1.jpg",
        text: "written or printed paper that gives information about or proof of something Your birth certificate isocument. verb. documented; documenting ",
    },
    {
        id: 1,
        name: "Insight Commitment",

        img:"https://i.ibb.co/XWV8ph6/banner-img-2.jpg",
        text: "Much but because a cagily lynx angelfish this alas walked this acutely robin this involuntary that possessive overlaid impala moronic attentively.",
    },
   
  
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });






  









