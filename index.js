function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nodeChild = node.children[0];

  while (nodeChild) {
    node = nodeChild;
    nodeChild = node.children[0];
  }

  return node;
}

function increaseRankBy(n) {
  let fullList = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = fullList.length; i < l; i++) {
    fullList[i].innerHTML = parseInt(fullList[i]) + n;
  }
}
