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
            src=${data.img}
          />
          <div class="img-title rounded-4">${data.title}</div>
        </div>
      `
    );
  });

  return imgColTag;
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

  console.log("🚀 ~ imagesFiltered:", imagesFiltered);

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
      <div class="row text-center mt-4">
        ${renderImages(imagesFiltered)}
      </div>
  `;

  // element.innerHTML = `
  //   <div class="row text-center mt-4">
  //     ${renderImages(imagesFiltered)}
  //   </div>
  // `;
}

renderImagesByCategory("all", galleryDummyData);
tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    renderImagesByCategory(e.target.id, galleryDummyData);
  });
});
