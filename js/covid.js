console.log('working')


let stateObj = { "TT": "Total", "MH": "Maharashtra", "TN": "Tamil Nadu", "AP": "Andhra Pradesh", "KA": "Karnataka", "DL": "Delhi", "UP": "Uttar Pradesh", "WB": "West Bengal", "BR": "Bihar", "TG": "Telangana", "GJ": "Gujarat", "AS": "Assam", "RJ": "Rajasthan", "OR": "Odisha", "HR": "Haryana", "MP": "Madhya Pradesh", "KL": "Kerala", "PB": "Punjab", "JK": "Jammu and Kashmir", "JH": "Jharkhand", "CT": "Chhattisgarh", "UT": "Uttarakhand", "GA": "Goa", "TR": "Tripura", "PY": "Puducherry", "MN": "Manipur", "HP": "Himachal Pradesh", "NL": "Nagaland", "AR": "Arunachal Pradesh", "AN": "Andaman and Nicobar Islands", "LA": "Ladakh", "CH": "Chandigarh", "DN": "Dadra and Nagar Haveli and Daman and Diu", "ML": "Meghalaya", "SK": "Sikkim", "MZ": "Mizoram", "UN": "State Unassigned", "LD": "Lakshadweep" }

let stateSelect = document.getElementById('stateSelect')
let stateSel = document.getElementById('stateSel')
let stateArr = ["TT", "MH", "TN", "AP", "KA", "DL", "UP", "WB", "BR", "TG", "GJ", "AS", "RJ", "OR", "HR", "MP", "KL", "PB", "JK", "JH", "CT", "UT", "GA", "TR", "PY", "MN", "HP", "NL", "AR", "AN", "LA", "CH", "DN", "ML", "SK", "MZ", "UN", "LD"]
for (key in stateObj) {
  stateSelect.innerHTML += `<option value="${key}" id="${key}">${stateObj[key]} (${key})</option>`
}


function getDateWise() {
  let table = document.getElementById('table')
  table.innerHTML = `
  <table class="table table-bordered">
  <thead class="thead-dark">
  <tr>
      <th scope="col">Date</th>
      <th scope="col">Daily Confirmed</th>
      <th scope="col">Daily Deceased</th>
      <th scope="col">Daily Recovered</th>
      <th scope="col">Total Confirmed</th>
      <th scope="col">Total Deceased</th>
      <th scope="col">Total Recovered</th>
  </tr>
</thead>
<tbody id="dateWiseCol">

</tbody>
</table>`
  let btn = document.getElementById('btn')
  btn.setAttribute('onclick', 'removeData()')
  btn.innerHTML = `Erase Data`

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.covid19india.org/data.json`, true)

  xhr.onloadstart = function () {
    document.getElementById('loading').innerHTML = `<div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>`

  }
  xhr.onloadend = function () {
    document.getElementById('loading').innerHTML = ''
  }



  xhr.onload = function () {
    if (this.status === 200) {
      let bulkData = JSON.parse(this.responseText)
      let cts = bulkData['cases_time_series']
      cts.forEach(element => {
        let date = new Date(element.date + '2020')
        let dailyconfirmed = element.dailyconfirmed
        let dailydeceased = element.dailydeceased
        let dailyrecovered = element.dailyrecovered
        let totalconfirmed = element.totalconfirmed
        let totaldeceased = element.totaldeceased
        let totalrecovered = element.totalrecovered
        let dateWiseCol = document.getElementById('dateWiseCol')
        dateWiseCol.innerHTML += `<tr>
              <td>${date.getDate().toString() + '-' + (date.getMonth() + 1).toString() + '-' + date.getFullYear().toString()}</td>
              <td>${dailyconfirmed}</td>
              <td>${dailydeceased}</td>
              <td>${dailyrecovered}</td>
              <td>${totalconfirmed}</td>
              <td>${totaldeceased}</td>
              <td>${totalrecovered}</td>
            </tr>`

      });

    }
  }
  xhr.send()
}

let getState = document.getElementById('getState')
getState.addEventListener('click', getData)

function getData() {
  const xhr = new XMLHttpRequest();
  let myState = document.getElementById('stateSelect').selectedIndex;
  let selectedState = stateObj[stateArr[myState - 1]]
  // console.log(selectedState)
  xhr.open('GET', `https://api.covid19india.org/data.json`, true)

  xhr.onloadstart = function () {
    document.getElementById('loading').innerHTML = `<div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
            </div>`

  }
  xhr.onloadend = function () {
    document.getElementById('loading').innerHTML = ''
  }



  xhr.onload = function () {
    if (this.status === 200) {
      let bulkData = JSON.parse(this.responseText)
      let statewise = bulkData['statewise']
      statewise.forEach(element => {
        // console.log(element)
        let active = element.active
        let confirmed = element.confirmed
        let deaths = element.deaths
        let deltaconfirmed = element.deltaconfirmed
        let deltadeaths = element.deltadeaths
        let deltarecovered = element.deltarecovered
        let lastupdatedtime = element.lastupdatedtime
        let migratedother = element.migratedother
        let recovered = element.recovered
        let state = element.state
        let statecode = element.statecode
        let statenotes = element.statenotes
        if (state == selectedState) {
          let stateDetails = document.getElementById('stateDetails')
          stateDetails.innerHTML = `
          <div class="card">
            <div class="card-header">
              <p class="display-4">${state}</p>
            </div>
            <div class="card-body">
              <h5 class="card-title">Cases Details</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Active</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Deaths</th>
                    <th scope="col">Recovered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${active}</td>
                    <td>${confirmed}</td>
                    <td>${deaths}</td>
                    <td>${recovered}</td>
                  </tr>
                </tbody>
                </table>
              <p class="card-text"></p>
            </div>
            <div class="card-footer text-muted">
                Last Updated : ${lastupdatedtime}
            </div>
          </div>
          `
        }
      })
    }
  }
  xhr.send()
}


for (key in stateObj) {
  stateSel.innerHTML += `<option value="${key}" id="${key}">${stateObj[key]} (${key})</option>`
}


let getStateD = document.getElementById('getStateD')
getStateD.addEventListener('click', getDistrict)

function getDistrict() {
  let myState = document.getElementById('stateSel').selectedIndex;
  let selectedState = stateArr[myState - 1]
  console.log(selectedState)
  let districtSel = document.getElementById('districtSel')
  const xhr1 = new XMLHttpRequest();
  xhr1.open('GET', 'https://api.covid19india.org/state_district_wise.json', true)

  xhr1.onload = function () {
    if (this.status === 200) {
      let districtWise = JSON.parse(this.responseText)
      for (key in districtWise) {
        if (districtWise[key]['statecode'] == selectedState) {
          districtSel.innerHTML = `
          <p class="display-4">Select Districts In ${stateObj[districtWise[key]['statecode']]}</p><div class="input-group mb-3" id="">
          <select class="custom-select" id="distSelect">
            <option selected>Select State</option>
          </select>
          <div class="input-group-append">
              <button class="btn btn-primary" id="getDis">Search</button>
          </div>
          </div>`
          let distSelect = document.getElementById('distSelect')
          let distList = districtWise[key]['districtData']
          let distArr = []
          for (dist in distList) {
            distSelect.innerHTML += `<option value="${dist}" id="${dist}">${dist}</option>`
            distArr.push(dist)
          }
          let getDis = document.getElementById('getDis')
          getDis.addEventListener('click', getDisData)

          function getDisData() {
            let myDis = document.getElementById('distSelect').selectedIndex;
            let selectedDist = distArr[myDis - 1]
            let active = distList[selectedDist]['active']
            let confirmed = distList[selectedDist]['confirmed']
            let deceased = distList[selectedDist]['deceased']
            let recovered = distList[selectedDist]['recovered']
            let DistDetails = document.getElementById('DistDetails')
            DistDetails.innerHTML = `<div class="card">
            <div class="card-header">
              <p class="display-4">${selectedDist}</p>
            </div>
            <div class="card-body">
              <h5 class="card-title">Cases Details</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Active</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Deaths</th>
                    <th scope="col">Recovered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${active}</td>
                    <td>${confirmed}</td>
                    <td>${deceased}</td>
                    <td>${recovered}</td>
                  </tr>
                </tbody>
                </table>
              <p class="card-text"></p>
            </div>
            <div class="card-footer text-muted">
                Last Updated : 0 min ago
             </div>
          </div>
          `
          }
        }
      }
    }
  }
  xhr1.send()
}

function removeData() {
  let table = document.getElementById('table')
  table.innerHTML = ``
  let btn = document.getElementById('btn')
  btn.setAttribute('onclick', 'getDateWise()')
  btn.innerHTML = `Get Date Wise Details`
}