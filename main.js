// START: For Showing & Hiding  Menu In Mobile Devices

let ulHeader = document.querySelector(".nav-ul");
document.body.onclick = function (e) {
  if (e.target.className === "fas fa-bars toggle-menu")
    ulHeader.classList.toggle("show-menu");
  else ulHeader.classList.remove("show-menu");
};
//  END

// START: For Add and Remove "active" Class in Header Links
let ListLink = document.querySelectorAll(".nav-ul li a");
ListLink.forEach((a) => {
  a.addEventListener("mouseover", (e) => {
    ListLink.forEach((a) => {
      a.classList.remove("active");
    });
  });
});

// For Add "active" Class to Home Link When We Return to Home Page
document.addEventListener("scroll", (e) => {
  if (window.scrollY >= 0 && window.scrollY <= 700) {
    ListLink.forEach((a) => {
      a.classList.remove("active");
    });
    ListLink[0].classList.add("active");
  }
});
//  END

//START: Scroll Top Button
scrollBut = document.querySelector(".scroll-button");

window.onscroll = () => {
  if (this.scrollY >= 2200) {
    scrollBut.classList.add("scroll-show");
  } else scrollBut.classList.remove("scroll-show");
};

scrollBut.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// END

// START: Changing The Background of Landing
let imageAddress = [
  "../images/landing-1.jpg",
  "../images/landing-2.jpg",
  "../images/landing-3.jpg",
];
let changeBut = document.querySelectorAll(".change-background");
let rightBut = document.querySelector(".fa-angle-right");
let leftBut = document.querySelector(".fa-angle-right");
let landingBackGround = document.querySelector(".landing");
let bullets = document.querySelectorAll(".landing .bullets li");
let i = 0;
landingBackGround.style.cssText = `background-image: url(${imageAddress[i]});  position: relative; background-size: cover;`;
bullets[i].classList.add("active");
changeBut[0].addEventListener("click", (e) => {
  bullets.forEach((b) => {
    b.classList.remove("active");
  });
  --i;
  if (i < 0) i = 2;
  landingBackGround.style.cssText = `background-image: url(${imageAddress[i]});  position: relative; background-size: cover;`;
  bullets[i].classList.add("active");
});

changeBut[1].addEventListener("click", (e) => {
  bullets.forEach((b) => {
    b.classList.remove("active");
  });
  ++i;
  if (i > 2) i = 0;
  landingBackGround.style.cssText = `background-image: url(${imageAddress[i]});  position: relative; background-size: cover;`;
  bullets[i].classList.add("active");
});

// END

// START: Filtering The Images in Portfolio Section
let listFilter = document.querySelectorAll(".shuffle li ");
let allImge = document.querySelectorAll(".imgs-container #all");
let photoImge = document.querySelectorAll(".imgs-container #photo");
let webImge = document.querySelectorAll(".imgs-container #web");
let paintImge = document.querySelectorAll(".imgs-container #art");
let arrFilter = ["none", "block"];

let filter = (a = 1, b = 1, c = 1) => {
  photoImge.forEach((e) => {
    e.style.display = `${arrFilter[a]}`;
  });
  webImge.forEach((e) => {
    e.style.display = `${arrFilter[b]}`;
  });
  paintImge.forEach((e) => {
    e.style.display = `${arrFilter[c]}`;
  });
};

listFilter.forEach((e) => {
  e.addEventListener("click", (e) => {
    listFilter.forEach((a) => {
      a.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    if (e.currentTarget.id === "photo-filter") {
      filter(1, 0, 0);
    } else if (e.currentTarget.id === "web-filter") {
      filter(0, 1, 0);
    } else if (e.currentTarget.id === "art-filter") {
      filter(0, 0, 1);
    } else filter(1, 1, 1);
  });
});

// END

// START: Search bar Showing and hiddening
let searchBar = document.querySelector(".search-bar");
let toggleMenu = document.querySelector(".toggle-menu");
document.body.addEventListener("click", (e) => {
  if (e.target.id === "search-icon" || e.target.id === "search-bar") {
    ulHeader.classList.add("hidde-menu");
    toggleMenu.classList.add("hidde-menu");
    searchBar.style.cssText = "visibility: visible;";
  } else {
    ulHeader.classList.remove("hidde-menu");
    toggleMenu.classList.remove("hidde-menu");
    searchBar.style.cssText = "visibility: hidden; display:none;";
  }
});

// START: Animate The Skills Sections
let prog = document.querySelectorAll(".prog span");
let skillsSection = document.querySelector(".our-skills");
window.addEventListener("scroll", (e) => {
  if (this.scrollY >= skillsSection.offsetTop - 200) {
    prog.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  } else {
    prog.forEach((span) => {
      span.style.width = "0";
    });
  }
});
// END

// START: Animate The Stats Sections
let stat = document.querySelectorAll(".box .number");
let statsSection = document.querySelector(".stats");
let start = false;
window.addEventListener("scroll", (e) => {
  if (this.scrollY >= statsSection.offsetTop - 200) {
    if (!start) {
      stat.forEach((s) => startCount(s));
    }
    start = true;
  }
});

function startCount(e) {
  let goal = e.dataset.number;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(count);
    }
    console.log(goal);
    console.log(e.dataset.number);
  }, 1500 / goal);
}

// END
