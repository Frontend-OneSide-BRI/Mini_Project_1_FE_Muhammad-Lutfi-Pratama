const galleryMenu = document.querySelectorAll(".nav .nav-item a");

function startingLoad() {
  let activeStartMenu = document.querySelectorAll(".tab-content .active");
  getAllImages(activeStartMenu[0].id, activeStartMenu[0]);
}

function getAllImages(id, element) {
  let imgColTag = "";
  for (let i = 1; i <= 4; i++) {
    imgColTag = imgColTag.concat(
      " ",
      `
        <div class="col-lg-3 img-container">
          <img
            class="img-gallery shadow-lg rounded-4"
            id="img-robot"
            src="https://robohash.org/${i}/.png"
            alt=""
          />
          <div class="img-title rounded-4">Robot ${i}</div>
        </div>
      `
    );
  }

  switch (id) {
    case "content-robot":
      element.innerHTML = `    
        <div class="row text-center mt-4">
          ${imgColTag}
        </div>
      `;
      break;
    case "content-nature":
      element.innerHTML = "ini nature";
      break;

    default:
      break;
  }
}

startingLoad();
galleryMenu.forEach(menu => {
  menu.addEventListener("click", () => {
    let activeMenu = document.querySelectorAll(".tab-content .active");
    // galleryMenu.forEach(menu => {
    //   menu.classList.remove("active");
    // });

    getAllImages(activeMenu[0].id, activeMenu[0]);
  });
});
