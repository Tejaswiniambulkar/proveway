const boxes = document.querySelectorAll(".product-box");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    boxes.forEach(b => b.classList.remove("expanded"));
    box.classList.add("expanded");
    box.querySelector("input[type='radio']").checked = true;
  });
  box.addEventListener("mouseenter", () => {
    if (!box.classList.contains("expanded")) {
      boxes.forEach(b => {
        if (!b.classList.contains("expanded")) {
          b.classList.remove("hover-expand");
        }
      });
      box.classList.add("hover-expand");
    }
  });

  box.addEventListener("mouseleave", () => {
    box.classList.remove("hover-expand");
  });
});
