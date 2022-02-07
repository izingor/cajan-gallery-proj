'use strict'


console.log('Starting up');


$('.page-top').html(onInit());


function onInit() {

    renderProjs();
}


function renderProjs() {

    var strHTML = '';
    gProjs.forEach(proj => {
        strHTML += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="${proj.image}" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
        <a href = "${proj.url}"> Play here</a>
        </div>
        </div>`

    })

    $('.projs-gallery').html(strHTML);
}