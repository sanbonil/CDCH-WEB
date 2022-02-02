
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

$(function(){
  $('.translate').click(function(){
    var lang = $(this).attr('id');
    document.getElementById('actualLanguage').src = "./images/"+lang+".svg"
    
    $('.lang').each(function(index,element){
      $(this).text(arrLang[lang][$(this).attr('key')])
    });
  });
});

//render all the dynamic components of the page
function render(){
  //Members rendering
  const memberContiner = document.getElementById("memberGroup")
  for(let member of members){
    memberContiner.innerHTML+=`
      <div class="member">
        <div class="pic" data-bs-toggle="modal" data-bs-target="#member${member.id}Modal">
          <img  class="memberImage" src="./images/member${member.id}.png" alt="member image">
          <ul class="info">
            <li><i class="fas fa-info-circle fa-3x"></i></li>
          </ul>
        </div>
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
              ${member.link!==""?`<a href="${member.link}" target="_blank">More information</a>`:``}
            </div>
          </div>
        </div>
      </div>
    `
  }

  //News rendering
  const newsContainer = document.getElementById("news")
  for(let noticia of news){
    newsContainer.innerHTML+=`
    <h4 class="member-name advisor">${noticia.name}</h4>
    <p>${noticia.brief!==""?`${noticia.brief}<br>`:``}<a href="${noticia.link}" target="_blank">More information</a></p>
    `
  }

  //Conferences rendering
  const conferencesContainer = document.getElementById("conferencesContainer")
  if(conferences.length>0){
    conferencesContainer.style.display="flex"
    conferencesContainer.innerHTML+=`
    <h3 class="lang" key="h3Conferences">CONFERENCES</h3>
    <div class="container" id="conferences">

    </div>
    `
    const conferencesContent = document.getElementById("conferences")
    for(let conference of conferences){
      conferencesContent.innerHTML+=``
    }
  }
  else{
    conferencesContainer.style.display="none"
  }

  //Publications rendering
  const publicationsContainer = document.getElementById("publicationsContainer")
  if(publications.length>0){
    publicationsContainer.style.display="flex"
    publicationsContainer.innerHTML+=`
    <h3 class="lang" key="h3Publications">PUBLICATIONS</h3>
    <div class="accordion accordion-flush" id="accordionFlushExample">

    </div>
    `
    const publicationsContent = document.getElementById("accordionFlushExample")
    for(let publication of publications){
      publicationsContent.innerHTML+=`
      <div class="accordion-item">
        <h3 class="accordion-header" id="flush-headingOne">
          <button style="border:1px solid black" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            ${publication.name}
          </button>
        </h3>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">${publication.brief}</div>
          <a class="accordion-body" target="_blank" href="${publication.link}">PUBLICATION LINK</a>
        </div>
      </div>
      `
    }
  }
  else{
    publicationsContainer.style.display="none"
  }
  
  //JobOffers rendering
  const offersContainer = document.getElementById("jobContainer")
  if(jobOffers.length>0){
    offersContainer.style.display="flex"
    offersContainer.innerHTML+=`
    <h3 class="lang" key="h3JobOffers">JOB OFFERS</h3>
    <div class="container" id="jobs">

    </div>
    `
    const jobsContent = document.getElementById("jobs")
    for(let job of jobOffers){
      jobsContent.innerHTML+=``
    }
  }
  else{
    offersContainer.style.display="none"
  }

  //Related Projects rendering
  const projectsContainer = document.getElementById("projectsContainer")
  for(let project of relatedProjects){
    projectsContainer.innerHTML+=`
    <div class="card w-75" style="margin-bottom:30px">
      <div class="card-body">
        <h5 class="card-title"><b>${project.name}</b></h5>
        <p class="card-text">${project.brief}</p>
        ${project.links.map(link=>`<a href="${link}" class="card-link">${link}</a>`)}
      </div>
    </div>
    `
    
  }

  //Advisory Board rendering
  const advisoryContainer = document.getElementById("advisoryBoard")
  for(let advisor of advisoryBoard){
    advisoryContainer.innerHTML+=`
    <h4 class="member-name advisor">${advisor.name}</h4>
    <p><b>${advisor.location}</b> <br> ${advisor.brief}<br><a href="${advisor.link}" target="_blank">More information</a></p>
    `
  }

  //Authorities rendering
  const authoritiesContainer = document.getElementById("authoritiesGroup")
  for(let i=1;i<6;i++){
    authoritiesContainer.innerHTML+=`
    <img class="institutionImage" src="./images/authority${i}.png" alt="authority image">
    `
  }

  //Universities rendering
  const universitiesContainer = document.getElementById("universitiesGroup")
  for(let i=1;i<5;i++){
    universitiesContainer.innerHTML+=`
    <img class="institutionImage" src="./images/university${i}.png" alt="university image">
    `
  }

  //Companies rendering
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

