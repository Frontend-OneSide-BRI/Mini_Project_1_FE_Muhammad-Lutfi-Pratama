const galleryMenu = document.querySelectorAll(".nav .nav-item a");

function renderImages(dataRender) {
  let imgColTag = "";
  dataRender.forEach(data => {
    imgColTag = imgColTag.concat(
      " ",
      `
        <div class="col-sm-6 col-md-4 col-lg-3 img-container mb-4">
          <img
            class="img-gallery shadow-lg rounded-4"
            id="img-robot"
            alt="${data.title}"
            src=${data.img}
            data-bs-toggle="modal" 
            data-bs-target="#imgModal"
          />
          <div class="img-title rounded-4">${data.title}</div>
        </div>
      `
    );
  });

  return imgColTag;
}

function showModalDetailImage() {
  const imgGallery = document.querySelectorAll(".img-gallery");
  imgGallery.forEach(img => {
    img.addEventListener("click", () => {
      let imgSrc = img.getAttribute("src");
      let imgTitle = img.getAttribute("alt");

      let modalBody = document.querySelector(".modal-img-picked");

      modalBody.innerHTML = `
        <img src=${imgSrc} class="img-fluid" />
      `;

      let modalTitle = document.querySelector(".modal-titleImg-picked");
      modalTitle.innerHTML = imgTitle;
    });
  });
}

function renderImagesByCategory(tagId, element) {
  switch (tagId) {
    case "content-robot":
      let robotFiltered = dummy.filter(data => data.category === "robot");

      element.innerHTML = `    
        <div class="row text-center mt-4 pb-5">
          ${renderImages(robotFiltered)}
        </div>
      `;

      break;
    case "content-nature":
      let natureFiltered = dummy.filter(data => data.category === "nature");

      element.innerHTML = `    
        <div class="row text-center mt-4 pb-5">
          ${renderImages(natureFiltered)}
        </div>
      `;
      break;
    case "content-human":
      let humanFiltered = dummy.filter(data => data.category === "human");

      element.innerHTML = `    
        <div class="row text-center mt-4 pb-5">
          ${renderImages(humanFiltered)}
        </div>
      `;
      break;

    default:
      break;
  }

  showModalDetailImage();
}

function reload() {
  let tabContents = document.querySelectorAll(".tab-content .tab-pane");

  tabContents[0].classList.add("active");
  let activeTabContent = document.querySelectorAll(".tab-content .active");
  renderImagesByCategory(activeTabContent[0].id, activeTabContent[0]);
}

function renderImagesByName(menuTags, valueSearch) {
  let element = document.querySelector(".tab-content .tab-pane");
  let imagesNameFiltered = [];

  dummy.forEach(data => {
    if (data.title.toLowerCase().includes(valueSearch)) {
      imagesNameFiltered.push(data);
    }
  });

  menuTags.forEach(menu => {
    menu.classList.add("d-none");
  });

  element.innerHTML = `    
    <div class="row text-center mt-4">
      ${renderImages(imagesNameFiltered)}
    </div>
  `;

  showModalDetailImage();
}

reload();
galleryMenu.forEach(menu => {
  menu.addEventListener("click", () => {
    let activeContentMenu = document.querySelectorAll(".tab-content .tab-pane");

    activeContentMenu.forEach(menuContent => {
      menuContent.innerHTML = "";
      if (menuContent.classList.contains("active")) {
        renderImagesByCategory(menuContent.id, menuContent);
      }
    });
  });
});

const inputSearch = document.querySelector("#input-search");
const carousel = document.querySelector(".carousel");
const mainSection = document.querySelector("#main-section");

// get value from input search and send to function
inputSearch.addEventListener("keyup", () => {
  let valueSearch = inputSearch.value.toLowerCase();
  let menuTagElements = document.querySelectorAll(".nav-item .nav-link");

  renderImagesByName(menuTagElements, valueSearch);

  if (valueSearch !== "") {
    carousel.classList.add("d-none");
  } else {
    carousel.classList.remove("d-none");
    menuTagElements.forEach(menu => {
      menu.classList.remove("d-none");
    });
    menuTagElements[0].classList.add("active");
    reload();
  }
});