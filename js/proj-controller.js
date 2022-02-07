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
        <a class="portfolio-link" onclick = "onOpenModal('${proj.id}')" data-toggle="modal" href="#portfolioModal${proj.id}">
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

        // $(`.proj${proj.id}`).click(onOpenModal(proj.id))
    })

    $('.projs-gallery').html(strHTML);
}



function onOpenModal(id) {

    var proj = gProjs.find(proj => proj.id === id);
    console.log(proj);
    var strHTML = `<div class="portfolio-modal modal fade" id="portfolioModal${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl"></div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="modal-body">
                            <h2>${proj.title}</h2>
                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                            <img class="img-fluid d-block mx-auto" src="${proj.image}" alt="">
                            <p>${proj.desc}</p>
                            <ul class="list-inline">
                                <li>Date: ${proj.publishedAt}</li>
                                <li>Client: ${proj.labels}</li>
                                <li>Category: Illustration</li>
                            </ul>
                            <button class="btn btn-primary" data-dismiss="modal" type="button">
                                <i class="fa fa-times"></i>
                                Close Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
    $('.modals-cointainer').html(strHTML)

}