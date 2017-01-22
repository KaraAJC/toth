const beforeSide = document.querySelector('#before');
const afterSide = document.querySelector('#after');

const btns = document.querySelectorAll('button');

const dayZeroBtn = document.querySelector('#dayZeroBtn');
const dDayBtn = document.querySelector('#dDayBtn');
const obamaBtn = document.querySelector('#obamaBtn');

const dDayLink = 'https://web-beta.archive.org/web/20170119230156/http://whitehouse.gov'
const zeroLink = 'https://web-beta.archive.org/web/20090120204553/http://www.whitehouse.gov/'
const trumpLink = 'https://web-beta.archive.org/web/20170120205436/http://whitehouse.gov'

function getDayZero(e) {
  console.log('getting day Zero...')
  e.preventDefault();
  beforeSide.src = zeroLink;
  if (afterSide.src != trumpLink) {
    afterSide.src = trumpLink;
  }
}

function getDDay(e) {
  console.log('getting Transition...')
  e.preventDefault();
  beforeSide.src = dDayLink;
  if (afterSide.src != trumpLink) {
    afterSide.src = trumpLink;
  }
}

function getStartFinish(e) {
  console.log("getting Obama's Start to Finish...")
  e.preventDefault();
  beforeSide.src = zeroLink;
  afterSide.src = dDayLink;
}

function toggleActive(e) {
  console.log(e);
  btns.forEach(btn => btn.classList.remove('active'));
  this.classList.toggle('active');
}

dayZeroBtn.addEventListener('click', getDayZero);
dDayBtn.addEventListener('click', getDDay);
obamaBtn.addEventListener('click', getStartFinish);

btns.forEach(btn => btn.addEventListener('click', toggleActive));
