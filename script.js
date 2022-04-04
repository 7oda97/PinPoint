//top button
let mybutton = document.getElementById("top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//slide arrow

let indexValue = 1;
let indexNumber = 1;
showImg(indexValue);
showNumer(indexNumber);

function side_slide(e) {
  showImg(indexValue += e)
  showNumer(indexNumber += e)
}

function showImg(e) {
  let i;
  const img = document.getElementsByClassName('image')
  if (e > img.length) {
    indexValue = 1
  }
  if (e < 1) {
    indexValue = img.length
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.display = 'none';
  }
  img[indexValue - 1].style.display = 'block';
}

function showNumer(e) {
  let i;
  const img = document.getElementsByClassName('numbertext')
  if (e > img.length) {
    indexNumber = 1
  }
  if (e < 1) {
    indexNumber = img.length
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.display = 'none';
  }
  img[indexNumber - 1].style.display = 'block';
}

/*navbar
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar").style.top = "0";
  } else {
    document.getElementsByClassName("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
*/