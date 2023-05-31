const galleryMenu = document.querySelectorAll(".nav .nav-item a");

function getImages(dummyData) {
  let imgColTag = "";
  dummyData.forEach(data => {
    imgColTag = imgColTag.concat(
      " ",
      `
        <div class="col-sm-6 col-md-4 col-lg-3 img-container mb-4">
          <img
            class="img-gallery shadow-lg rounded-4"
            id="img-robot"
            src=${data.img}
          />
          <div class="img-title rounded-4">${data.title}</div>
        </div>
      `
    );
  });

  return imgColTag;
}

function getImagesByCategory(id, element) {
  switch (id) {
    case "content-robot":
      let robotFiltered = dummy.filter(data => data.category === "robot");

      element.innerHTML = `    
        <div class="row text-center mt-4">
          ${getImages(robotFiltered)}
        </div>
      `;
      break;
    case "content-nature":
      let natureFiltered = dummy.filter(data => data.category === "nature");

      element.innerHTML = `    
        <div class="row text-center mt-4">
          ${getImages(natureFiltered)}
        </div>
      `;
      break;

    default:
      break;
  }
}

function getImagesByName(name, element) {
  let imagesNameFiltered = [];

  dummy.forEach(data => {
    if (data.title.includes(name)) {
      imagesNameFiltered.push(data);
    }
  });

  element.innerHTML = `    
    <div class="row text-center mt-4">
      ${getImages(imagesNameFiltered)}
    </div>
  `;
}

function startingLoad() {
  let activeStartMenu = document.querySelectorAll(".tab-content .active");
  getImagesByCategory(activeStartMenu[0].id, activeStartMenu[0]);
}

startingLoad();
galleryMenu.forEach(menu => {
  menu.addEventListener("click", () => {
    let activeMenu = document.querySelectorAll(".tab-content .active");
    // galleryMenu.forEach(menu => {
    //   menu.classList.remove("active");
    // });
    getImagesByCategory(activeMenu[0].id, activeMenu[0]);
  });
});

const inputSearch = document.querySelector("#input-search");
const carousel = document.querySelector(".carousel");
const mainSection = document.querySelector("#main-section");

// get value from input search and send to function
inputSearch.addEventListener("keyup", () => {
  let value = inputSearch.value;

  if (value !== "") {
    carousel.classList.add("d-none");
  } else {
    carousel.classList.remove("d-none");
  }

  console.log(value);

  // trigger refresh value
});
