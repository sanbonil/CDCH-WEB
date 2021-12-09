document.getElementById("popoverButton").setAttribute("data-bs-content","<ul id='languageList'><li class='languageElement'>English</li><li class='languageElement'>Spanish</li><li class='languageElement'>Catalan</li></ul>")

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))

var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

function scrollDown(){
    var element = document.getElementById("container");
    element.scrollIntoView({behavior: "smooth"});
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 800 ||document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
    /*if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      mybutton.style.bottom= "";
    }
    else{
      mybutton.style.bottom= "20px";
    }*/
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}