const balloon_gallery = document.getElementById("balloon-gallery");

let balloon = document.querySelectorAll(".balloon");

let popped = 0;

balloon.forEach((item) => {
  let color = [];
  for (let i = 0; i < 3; i++) {
    let calc = Math.floor(Math.random() * 255);
    color[i] = calc;
  }
  item.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
  item.addEventListener("mouseover", function enter() {
    console.log(item);
    item.style.backgroundColor = "white";
    item.style.color = `rgb(${color[0]},${color[1]},${color[2]})`;
    item.innerHTML = "POP!";
    popped++;
    item.removeEventListener("mouseover", enter);
    check_popped();
    console.log(popped);
  });
});

function check_popped() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.random(Math.random() * 255);
  if (popped === 25) {
    setTimeout(() => {
      balloon_gallery.style.color = `rgb(${red},${green},${blue})`;
      balloon_gallery.style.fontSize ="100px"
      balloon_gallery.innerHTML = "Wow!All balloons popped!";
    }, 1000);
  }
}

// let ballooon = document.querySelector(".balloon");

// let clicked = 0;

// ballooon.addEventListener("click", function click() {
//   clicked++;
//   console.log(clicked)
//   if (clicked === 50) {
//     ballooon.removeEventListener("click", click);
//     alert("its OFF")
//   }
// });
