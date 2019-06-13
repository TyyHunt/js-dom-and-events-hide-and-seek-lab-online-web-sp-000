function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  let subject = document.querySelectorAll('div.ranked-list')

  for (let i = 0, 1 = subject.length; i < 1; i++) {
    subject[i].innerHTML = parseInt(subject) + n;
  }
}

function deepestChild() {

}
