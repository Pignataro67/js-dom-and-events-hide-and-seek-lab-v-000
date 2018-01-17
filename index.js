function getFirstSelector(selector) {
  return document.querySelector(selector)
};

function nestedTarget() {
  return document.querySelector("#nested .target")
};

function deepestChild() {
  let nodes = document.querySelectorAll("#grand-node div")
  let deepest = nodes[nodes.length - 1]
  return deepest
};

function increaseRankBy(n) {
  let list = document.getElementsByClassName("ranked-list")
  for (let index in list) {
    list[index].innerHTML = parseInt(list[index]) + n
  }
};
