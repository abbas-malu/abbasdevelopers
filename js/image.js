console.log('hi')


var next; 
var prev;
let curPage=1
var myHTML1 = ``
var myHTML2 = ``
var myHTML3 = ``
var myHTML4 = ``
var pageArr = []
let mainDiv = document.getElementById('mainDiv')
let searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', getImages)
function getImages() {
    
    let searchTxt = document.getElementById('searchTxt').value
    mainDiv.innerHTML = `<h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">${searchTxt} Gallery</h1>

        <hr class="mt-2 mb-5">

        <div class="row text-center text-lg-left" id="imageMain">

            
        </div>`
    const xhr1 = new XMLHttpRequest();

    xhr1.open('GET', `https://pixabay.com/api/?key=14415801-b8d4f870aab86a3d65663f7c2&image_type=photo&q=${searchTxt}&pretty=true&per_page=200&`, true)

    xhr1.onload = function () {
        if (this.status==200 ){
            let imageData = JSON.parse(this.responseText)
            let images1 = imageData['hits'].slice(0,49)
            let images2 = imageData['hits'].slice(50,99)
            let images3 = imageData['hits'].slice(100,149)
            let images4 = imageData['hits'].slice(150,199)
            // console.log(images)
            let pageDiv = document.getElementById('pageDiv')
            let imageMain = document.getElementById('imageMain')
            images1.forEach(element => {
                myHTML1 += `
                <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                <a  data-toggle="modal" data-target="#img${element['id']}">
                    <img class="img-fluid img-thumbnail" src="${element['webformatURL']}" alt="">
                    </a>
                    <!-- Modal -->
                    <div class="modal fade" id="img${element['id']}" tabindex="-1" aria-labelledby="${element['id']}Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body">
                                    <img src="${element['largeImageURL']}" class="img-fluid" alt="Responsive image">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                        </svg>
                                        ${element['likes']} Likes
                                        </li>
                                        <li class="list-group-item">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                                        </svg>
                                        ${element['favorites']} favorites
                                        </li>
                                        </li>
                                        <li class="list-group-item">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                        <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                        </svg>
                                        ${element['downloads']} downloads
                                        </li>
                                    </ul>
                                    <div class="media my-3">
                                        <img src="${element['userImageURL']}" class="mr-3" alt="" width="64px" height="64px">
                                        <div class="media-body">
                                            <h5 class="mt-0 text-muted">By ${element['user']}</h5>
                                            <a target="blank" href="https://pixabay.com/users/${element['user']}-${element['user_id']}/">Read More About Author</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                <small class="text-muted"> By ${element['user']}</small>
                                <a  href="${element['largeImageURL']}" target="blank"><button class="btn btn-warning">Download</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            </div>    
            </div>`
            });
            images2.forEach(element => {
                myHTML2 += `
                <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                <a  data-toggle="modal" data-target="#img${element['id']}">
                    <img class="img-fluid img-thumbnail" src="${element['webformatURL']}" alt="">
                    </a>
                    <!-- Modal -->
                    <div class="modal fade" id="img${element['id']}" tabindex="-1" aria-labelledby="${element['id']}Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body">
                                    <img src="${element['largeImageURL']}" class="img-fluid" alt="Responsive image">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                        </svg>
                                        ${element['likes']} Likes
                                        </li>
                                        <li class="list-group-item">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                                        </svg>
                                        ${element['favorites']} favorites
                                        </li>
                                        </li>
                                        <li class="list-group-item">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                        <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                        </svg>
                                        ${element['downloads']} downloads
                                        </li>
                                    </ul>
                                    <div class="media my-3">
                                        <img src="${element['userImageURL']}" class="mr-3" alt="" width="64px" height="64px">
                                        <div class="media-body">
                                            <h5 class="mt-0 text-muted">By ${element['user']}</h5>
                                            <a target="blank" href="https://pixabay.com/users/${element['user']}-${element['user_id']}/">Read More About Author</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                <small class="text-muted"> By ${element['user']}</small>
                                <a  href="${element['largeImageURL']}" target="blank"><button class="btn btn-warning">Download</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            </div>    
            </div>`
            });
            images3.forEach(element => {
                myHTML3 += `
                <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                <a  data-toggle="modal" data-target="#img${element['id']}">
                    <img class="img-fluid img-thumbnail" src="${element['webformatURL']}" alt="">
                    </a>
                    <!-- Modal -->
                    <div class="modal fade" id="img${element['id']}" tabindex="-1" aria-labelledby="${element['id']}Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body">
                                    <img src="${element['largeImageURL']}" class="img-fluid" alt="Responsive image">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                        </svg>
                                        ${element['likes']} Likes
                                        </li>
                                        <li class="list-group-item">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                                        </svg>
                                        ${element['favorites']} favorites
                                        </li>
                                        </li>
                                        <li class="list-group-item">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                        <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                        </svg>
                                        ${element['downloads']} downloads
                                        </li>
                                    </ul>
                                    <div class="media my-3">
                                        <img src="${element['userImageURL']}" class="mr-3" alt="" width="64px" height="64px">
                                        <div class="media-body">
                                            <h5 class="mt-0 text-muted">By ${element['user']}</h5>
                                            <a target="blank" href="https://pixabay.com/users/${element['user']}-${element['user_id']}/">Read More About Author</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                <small class="text-muted"> By ${element['user']}</small>
                                <a  href="${element['largeImageURL']}" target="blank"><button class="btn btn-warning">Download</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            </div>    
            </div>`
            });
            images4.forEach(element => {
                myHTML4 += `
                <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                <a  data-toggle="modal" data-target="#img${element['id']}">
                    <img class="img-fluid img-thumbnail" src="${element['webformatURL']}" alt="">
                    </a>
                    <!-- Modal -->
                    <div class="modal fade" id="img${element['id']}" tabindex="-1" aria-labelledby="${element['id']}Label" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body">
                                    <img src="${element['largeImageURL']}" class="img-fluid" alt="Responsive image">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-hand-thumbs-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 0 0 .121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 0 0-1.094.171l-.014.003-.003.001a.5.5 0 0 1-.595-.643 8.34 8.34 0 0 0 .145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                        </svg>
                                        ${element['likes']} Likes
                                        </li>
                                        <li class="list-group-item">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                                        </svg>
                                        ${element['favorites']} favorites
                                        </li>
                                        </li>
                                        <li class="list-group-item">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                        <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                        </svg>
                                        ${element['downloads']} downloads
                                        </li>
                                    </ul>
                                    <div class="media my-3">
                                        <img src="${element['userImageURL']}" class="mr-3" alt="" width="64px" height="64px">
                                        <div class="media-body">
                                            <h5 class="mt-0 text-muted">By ${element['user']}</h5>
                                            <a target="blank" href="https://pixabay.com/users/${element['user']}-${element['user_id']}/">Read More About Author</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                <small class="text-muted"> By ${element['user']}</small>
                                <a  href="${element['largeImageURL']}" target="blank"><button class="btn btn-warning">Download</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            </div>    
            </div>`
            });
            pageArr = [myHTML1,myHTML2,myHTML3,myHTML4]
            imageMain.innerHTML = myHTML1;
            pageDiv.innerHTML =`<nav aria-label="Page navigation example">
                <ul class="pagination">
                <li class="page-item disabled" id="prev"><a class="page-link" href="#" onclick="prevNext(curPage,-1)" >Previous</a></li>
                <li class="page-item"><a class="page-link" href="#" onclick="goToPage(0,0)">1</a></li>
                <li class="page-item"><a class="page-link" href="#" onclick="goToPage(1,1)">2</a></li>
                <li class="page-item"><a class="page-link" href="#" onclick="goToPage(2,2)">3</a></li>
                <li class="page-item"><a class="page-link" href="#" onclick="goToPage(3,3)">4</a></li>
                <li class="page-item"  id="next"><a class="page-link" href="#" onclick="prevNext(curPage,1)">Next</a></li>
                </ul>
            </nav>`
           next = document.getElementById('next')
           prev = document.getElementById('prev')
            
        }
    }

    xhr1.send()
}


function prevNext(pageNo,value){
    imageMain.innerHTML = pageArr[curPage + value]
    curPage = curPage + value
    
    if (curPage==3){
        next.className = `page-item disabled` 
    }
    else{
        next.className = `page-item`
    }
    if (curPage==0){
        prev.className = `page-item disabled`
    }
    else{
        prev.className = `page-item`
    }
}
function goToPage(pageNo,value) {
    imageMain.innerHTML = pageArr[value]
    curPage = pageNo
    if (curPage==3){
        next.className = `page-item disabled` 
    }
    else{
        next.className = `page-item`
    }
    if (curPage==0){
        prev.className = `page-item disabled`
    }
    else{
        prev.className = `page-item`
    }
}
