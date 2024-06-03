//GLOBAL VARIABLE
var actualLanguage = "es";


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
  } 
  else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Translation function
$(function(){
  $('.translate').click(function(){
    var lang = $(this).attr('id');
    document.getElementById('actualLanguage').src = "./images/"+lang+".svg"
    actualLanguage=lang;
    renderDynamicObjects();
  
    $('.lang').each(function(index,element){
      $(this).text(arrLang[lang][$(this).attr('key')])
    });
    
  });
});

function renderDynamicObjects(){
  //Members rendering
 /* const memberContainer = document.getElementById("memberGroup")
  memberContainer.innerHTML=""
  for(let member of members){
    memberContainer.innerHTML+=`
      <div class="member">
        <div class="pic" data-bs-toggle="modal" data-bs-target="#member${member.id}Modal">
          <img  class="memberImage" src="./images/member${member.id}.png" alt="member image">
          <ul class="info">
            <li><i class="fas fa-info-circle fa-3x"></i></li>
          </ul>
        </div>
        <h4 class="member-name">${actualLanguage==="en"?`${member.nameEN}`:`${member.nameES}`}</h4>
        <span class="member-role">${actualLanguage==="en"?`${member.briefEN}`:actualLanguage==="es"?`${member.briefES}`:actualLanguage==="cat"&&`${member.briefCAT}`}</span>
      </div>

      <div class="modal fade" id="member${member.id}Modal" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <img class="avatar" src="./images/member${member.id}.png" alt="member image">
              <h5 class="modal-title" id="staticBackdropLabel" style="color: #3267b2; font-weight: bold;margin-left: 20px;">${actualLanguage==="en"?`${member.nameEN}`:`${member.nameES}`}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p style="text-align: justify;">
                ${actualLanguage==="en"?`${member.descriptionEN}`:actualLanguage==="es"?`${member.descriptionES}`:actualLanguage==="cat"&&`${member.descriptionCAT}`}
              </p>
            </div>
            
            <div class="modal-footer" >
              ${member.link!==""?`<a class="lang" key="moreInfo" href="${member.link}" target="_blank">Más información</a>`:``}
            </div>
          </div>
        </div>
      </div>
    `
  }
  */
  //News rendering
  const newsContainer = document.getElementById("news")
  newsContainer.innerHTML=""
  news.sort((a,b) => b.data - a.data);
  for(let noticia of news){
    newsContainer.innerHTML+=`
    <h4>${noticia.data.toLocaleDateString("es-ES")}</h4>
    <h4 class="member-name advisor">${noticia.name}</h4>
    <p>${actualLanguage=="en"&&noticia.briefEN!==""?`${noticia.briefEN}`:actualLanguage=="es"&&noticia.briefES!==""?`${noticia.briefES}`:actualLanguage=="cat"&&noticia.briefCAT!==""?`${noticia.briefCAT}`:``}${noticia.link!==""?`<a class="lang" key="moreInfo" href="${noticia.link}" target="_blank">Más información</a>`:``}</p>
    `
  }

  const agendaContainer = document.getElementById("agenda")
  agendaContainer.innerHTML=""
  agenda.sort((a,b) => b.data - a.data);
  for(let noticia of agenda){
    agendaContainer.innerHTML+=`
    <h4>${noticia.data.toLocaleDateString("es-ES")}</h4>
    <h4 class="member-name advisor">${noticia.name}</h4>
    <p>${actualLanguage=="en"&&noticia.briefEN!==""?`${noticia.briefEN}`:actualLanguage=="es"&&noticia.briefES!==""?`${noticia.briefES}`:actualLanguage=="cat"&&noticia.briefCAT!==""?`${noticia.briefCAT}`:``}${noticia.link!==""?`<a class="lang" key="moreInfo" href="${noticia.link}" target="_blank">Más información</a>`:``}</p>
    `
  }
}

function renderSupporters(){
  //Authorities rendering
  const authoritiesContainer = document.getElementById("authoritiesGroup")
  let authoritiesHtml = ""
  authoritiesContainer.innerHTML=""
  for(let i=1;i<6;i++){
    authoritiesHtml +=`<div style="width: 12.5%;font-size: 0.8rem">
    <a style="width: 240px" ref="${links_images[i-1].link}"><img style="width: 100%; height: 175px" src="./images/authority${i}.png" alt="authority image"></a> <br>`
    for (let j=0;j<links_images[i-1].members.length;j++){
        authoritiesHtml +=`<br>${links_images[i-1].members[j].name}`
    }
    authoritiesHtml += `</div>`
  }
  authoritiesContainer.innerHTML = authoritiesHtml
}

//render all the dynamic components of the page and the supporters
function render(){
  renderDynamicObjects()
  renderSupporters()
}

