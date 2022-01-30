let container = document.getElementById("container");
let imgs_containers = document.querySelectorAll(".img_container");
let imgs_count = imgs_containers.length;
let rightBtn = document.querySelector("#right_button");
let leftBtn = document.querySelector("#left_button");
let currentIndex = 0;
let container_width = container.clientWidth;

function onLeftButton() {
  if (currentIndex > 0) {
    currentIndex--;
    for (let i = 0; i < imgs_count; i++) {
      let element = imgs_containers[i];
      let new_left_pos = container_width * (i - currentIndex);
      element.style.left = new_left_pos + "px";
    }
  }
}

function onRightButton() {
  if (currentIndex < imgs_count - 1) {
    currentIndex++;
    for (let i = 0; i < imgs_count; i++) {
      let element = imgs_containers[i];
      let new_left_pos = -container_width * (currentIndex - i);
      element.style.left = new_left_pos + "px";
    }
  }
}

// function setup (){
//     let container_width = container.clientHeight;
//     for(let i=0; i<img_count; i++){
//         let element = imgs_containers[i]
//         let new_left_pos = container_width*i
//         element.style.left = new_left_pos+'px'
//     }
// }
// setup()

rightBtn.addEventListener("click", function () {
  onRightButton();
});
leftBtn.addEventListener("click", function () {
  onLeftButton();
});
