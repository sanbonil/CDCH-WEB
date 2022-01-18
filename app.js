/*Language popover*/

document.getElementById("popoverButton").setAttribute("data-bs-content","<ul id='languageList'><li class='languageElement'>English</li><li class='languageElement'>Spanish</li><li class='languageElement'>Catalan</li></ul>")

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))

var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

/*Offcanvas actions*/
document.addEventListener("DOMContentLoaded", function(){
  /*Offcanvas button*/
  var myOffcanvas = document.getElementById('offcanvasRight');
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("offcanvasButton").addEventListener('click',function (e){
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });

  /*Offcanvas close when links are clicked*/
  const elements = document.getElementsByClassName("canvas-links")

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click',function (e){
      e.stopPropagation();
      bsOffcanvas.toggle();
    });
  }
});

/*scroll down button*/
function scrollDown(){
    var element = document.getElementById("container");
    element.scrollIntoView({behavior: "smooth"});
}

//scroll Up button
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

function render(){
  const memberContiner = document.getElementById("memberGroup")
  for(let member of members){
    memberContiner.innerHTML+=`
      <div class="member">
        <img data-bs-toggle="modal" data-bs-target="#member${member.id}Modal" class="memberImage" src="./images/member${member.id}.png" alt="member image">
        <h4 class="member-name">${member.name}</h4>
        <span class="member-role">${member.brief}</span>
      </div>

      <div class="modal fade" id="member${member.id}Modal" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <img class="avatar" src="./images/member${member.id}.png" alt="member image">
              <h5 class="modal-title" id="staticBackdropLabel" style="color: #3267b2; font-weight: bold;margin-left: 20px;">${member.name}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p style="text-align: justify;">
                ${member.description}
              </p>
            </div>
            <div class="modal-footer">
              <a href="${member.link}" target="_blank">More information</a>
            </div>
          </div>
        </div>
      </div>
    `
  }
  const authoritiesContainer = document.getElementById("authoritiesGroup")
  for(let i=1;i<6;i++){
    authoritiesContainer.innerHTML+=`
    <img class="institutionImage" src="./images/authority${i}.png" alt="authority image">
    `
  }
  const universitiesContainer = document.getElementById("universitiesGroup")
  for(let i=1;i<5;i++){
    universitiesContainer.innerHTML+=`
    <img class="institutionImage" src="./images/university${i}.png" alt="university image">
    `
  }
  const companiesContainer = document.getElementById("companiesGroup")
  const othersContainer = document.getElementById("othersGroup")
  for(let i=1;i<4;i++){
    companiesContainer.innerHTML+=`
    <img class="companyImage" src="./images/company${i}.png" alt="company image">
    `
  }
  for(let i=4;i<6;i++){
    othersContainer.innerHTML+=`
    <img class="companyImage" src="./images/company${i}.png" alt="company image">
    `
  }
}