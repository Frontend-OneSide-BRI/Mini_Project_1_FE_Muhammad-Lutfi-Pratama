const tabContents = document.querySelectorAll(".tab-content .tab-pane");
const tabs = document.querySelectorAll(".nav-item .nav-link");

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

function renderImagesByCategory(category, dummyData) {
  let imagesFiltered = [];

  if (category === "all") {
    imagesFiltered = dummyData;
  } else {
    dummyData.forEach(data => {
      if (data.category === category) {
        imagesFiltered.push(data);
      }
    });
  }

  let getContent;
  switch (category) {
    case "all":
      getContent = document.querySelector("#all-category-content");
      break;
    case "robot":
      getContent = document.querySelector("#robot-category-content");
      break;
    case "nature":
      getContent = document.querySelector("#nature-category-content");
      break;
    case "human":
      getContent = document.querySelector("#human-category-content");
      break;
    default:
      getContent = document.querySelector("#all-category-content");
      break;
  }

  getContent.innerHTML = `
      <div class="row text-center mt-4 pb-5">
        ${renderImages(imagesFiltered)}
      </div>
  `;

  showModalDetailImage();
}

renderImagesByCategory("all", galleryDummyData);
tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    renderImagesByCategory(e.target.id, galleryDummyData);
  });
});

const myLogo = document.querySelector(".my-logo");
myLogo.addEventListener("click", () => {
  window.location.reload();
});
