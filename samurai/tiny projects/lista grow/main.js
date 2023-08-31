const stripe = document.querySelector(".stripe");

size = 10;
grow = true;
stripe.style.height = `${size}px`;

window.addEventListener("scroll", (e) => {
  if (grow) {
    size += 5;
    stripe.style.height = `${size}px`;
  } else {
    size -= 5;
    stripe.style.height = `${size}px`;
  }
  if (size >= window.innerWidth / 2) {
    grow = false;
    stripe.style.backgroundColor = "hotpink";
  } else if (size <= 0) {
    grow = true;
    stripe.style.backgroundColor = "black";
  }
});
