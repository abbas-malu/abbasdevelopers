// console.log('Its working')
let apiKey = 'ab75650446d04d60a5742f4b2fa3f88b'

let searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', setTxt)

function setTxt() {
    // console.log(document.getElementById('searchTxt').value)
    let search = document.getElementById('searchTxt').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://gnews.io/api/v3/search?q=${search}&token=6317d4044d7554f6307f3b7417c54010`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let news = JSON.parse(this.responseText)
            let articles = news.articles
            let latNews = ''
            let newsDiv = document.getElementById('newsDiv')
            articles.forEach(function (element, index) {
              if(element['image']==null){
                element['image'] = `https://www.classify24.com/wp-content/uploads/2016/09/no-image.png`
              }
                latNews += `<div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${element['image']}" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${element['title']}</h5>
                  <p class="card-text">${element['description']}</p>
                  <p><a href="${element['url']}">Read More...</a></p>
                  <p class="card-text"><small class="text-muted">Published At ${element['publishedAt']}</small></p>
                </div>
              </div>
            </div>
          </div>
          `
            });
            newsDiv.innerHTML = latNews
        }
    }

    xhr.send()
}

let search = 'microsoft'

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v3/top-news?token=6317d4044d7554f6307f3b7417c54010`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let news = JSON.parse(this.responseText)
        let articles = news.articles
        let latNews = ''
        let newsDiv = document.getElementById('newsDiv')
        articles.forEach(function (element, index) {
          if(element['image']==null){
            element['image'] = `https://www.classify24.com/wp-content/uploads/2016/09/no-image.png`
          }
            latNews += `<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${element['image']}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${element['title']}</h5>
              <p class="card-text">${element["description"]}</p>
              <p><a href="${element['url']}">Read More...</a></p>
              <p class="card-text"><small class="text-muted">Published At ${element['publishedAt']}</small></p>
            </div>
          </div>
        </div>
      </div>
      `
        });
        newsDiv.innerHTML = latNews
    }
}

xhr.send()







