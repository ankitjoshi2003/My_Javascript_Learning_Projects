"use strict";
const containers = [...document.getElementsByClassName("container")];
const draggables = [...document.getElementsByClassName("draggable")];
draggables.forEach((ele) => {
  ele.addEventListener("dragstart", (e) => {
    ele.classList.add("dragging");
  });
  ele.addEventListener("dragend", (e) => {
    ele.classList.remove("dragging");
  });
});

containers.forEach((ele) => {
  ele.addEventListener("dragover", (e) => {
    e.preventDefault();
    const relEle = getRelEl(ele, e.clientY);
    const draggable = document.getElementsByClassName("dragging")[0];
    console.log(relEle);
    if (relEle != null) {
      ele.insertBefore(draggable, relEle);
    } else {
      ele.appendChild(draggable);
    }
  });
});

function getRelEl(container, y) {
  const Els = [...container.querySelectorAll(".draggable:not(.dragging)")];
  return Els.reduce(
    (near, ele) => {
      const rect = ele.getBoundingClientRect();
      const curOfset = y - (rect.top + rect.height / 2);
      if (curOfset < 0 && curOfset > near.offset) {
        return { offset: curOfset, element: ele };
      } else {
        return near;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
