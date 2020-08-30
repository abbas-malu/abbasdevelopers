// console.log('Its Working')

const apiKey = `adb21a0d2f101961da1b`



let curCodeArr = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SPL*', 'SRD', 'STN', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW', 'ZWD'
]

let curNameArr = ['United Arab Emirates Dirham', 'Afghanistan Afghani', 'Albania Lek', 'Armenia Dram', 'Netherlands Antilles Guilder', 'Angola Kwanza', 'Argentina Peso', 'Australia Dollar', 'Aruba Guilder', 'Azerbaijan Manat', 'Bosnia and Herzegovina Convertible Mark', 'Barbados Dollar', 'Bangladesh Taka', 'Bulgaria Lev', 'Bahrain Dinar', 'Burundi Franc', 'Bermuda Dollar', 'Brunei Darussalam Dollar', 'Bolivia Bolíviano', 'Brazil Real', 'Bahamas Dollar', 'Bhutan Ngultrum', 'Botswana Pula', 'Belarus Ruble', 'Belize Dollar', 'Canada Dollar', 'Congo/Kinshasa Franc', 'Switzerland Franc', 'Chile Peso', 'China Yuan Renminbi', 'Colombia Peso', 'Costa Rica Colon', 'Cuba Convertible Peso', 'Cuba Peso', 'Cape Verde Escudo', 'Czech Republic Koruna', 'Djibouti Franc', 'Denmark Krone', 'Dominican Republic Peso', 'Algeria Dinar', 'Egypt Pound', 'Eritrea Nakfa', 'Ethiopia Birr', 'Euro Member Countries', 'Fiji Dollar', 'Falkland Islands (Malvinas) Pound', 'United Kingdom Pound', 'Georgia Lari', 'Guernsey Pound', 'Ghana Cedi', 'Gibraltar Pound', 'Gambia Dalasi', 'Guinea Franc', 'Guatemala Quetzal', 'Guyana Dollar', 'Hong Kong Dollar', 'Honduras Lempira', 'Croatia Kuna', 'Haiti Gourde', 'Hungary Forint', 'Indonesia Rupiah', 'Israel Shekel', 'Isle of Man Pound', 'India Rupee', 'Iraq Dinar', 'Iran Rial', 'Iceland Krona', 'Jersey Pound', 'Jamaica Dollar', 'Jordan Dinar', 'Japan Yen', 'Kenya Shilling', 'Kyrgyzstan Som', 'Cambodia Riel', 'Comorian Franc', 'Korea (North) Won', 'Korea (South) Won', 'Kuwait Dinar', 'Cayman Islands Dollar', 'Kazakhstan Tenge', 'Laos Kip', 'Lebanon Pound', 'Sri Lanka Rupee', 'Liberia Dollar', 'Lesotho Loti', 'Libya Dinar', 'Morocco Dirham', 'Moldova Leu', 'Madagascar Ariary', 'Macedonia Denar', 'Myanmar (Burma) Kyat', 'Mongolia Tughrik', 'Macau Pataca', 'Mauritania Ouguiya', 'Mauritius Rupee', 'Maldives (Maldive Islands) Rufiyaa', 'Malawi Kwacha', 'Mexico Peso', 'Malaysia Ringgit', 'Mozambique Metical', 'Namibia Dollar', 'Nigeria Naira', 'Nicaragua Cordoba', 'Norway Krone', 'Nepal Rupee', 'New Zealand Dollar', 'Oman Rial', 'Panama Balboa', 'Peru Sol', 'Papua New Guinea Kina', 'Philippines Peso', 'Pakistan Rupee', 'Poland Zloty', 'Paraguay Guarani', 'Qatar Riyal', 'Romania Leu', 'Serbia Dinar', 'Russia Ruble', 'Rwanda Franc', 'Saudi Arabia Riyal', 'Solomon Islands Dollar', 'Seychelles Rupee', 'Sudan Pound', 'Sweden Krona', 'Singapore Dollar', 'Saint Helena Pound', 'Sierra Leone Leone', 'Somalia Shilling', 'Seborga Luigino', 'Suriname Dollar', 'São Tomé and Príncipe Dobra', 'El Salvador Colon', 'Syria Pound', 'eSwatini Lilangeni', 'Thailand Baht', 'Tajikistan Somoni', 'Turkmenistan Manat', 'Tunisia Dinar', `Tonga Pa'anga`, 'Turkey Lira', 'Trinidad and Tobago Dollar', 'Tuvalu Dollar', 'Taiwan New Dollar', 'Tanzania Shilling', 'Ukraine Hryvnia', 'Uganda Shilling', 'United States Dollar', 'Uruguay Peso', 'Uzbekistan Som', 'Venezuela Bolívar', 'Viet Nam Dong', 'Vanuatu Vatu', 'Samoa Tala', 'Communauté Financière Africaine (BEAC) CFA Franc BEAC', 'East Caribbean Dollar', 'International Monetary Fund (IMF) Special Drawing Rights', 'Communauté Financière Africaine (BCEAO) Franc', 'Comptoirs Français du Pacifique (CFP) Franc', 'Yemen Rial', 'South Africa Rand', 'Zambia Kwacha', 'Zimbabwe Dollar'
]

let currencyObj = {
  'AED': 'United Arab Emirates Dirham', 'AFN': 'Afghanistan Afghani', 'ALL': 'Albania Lek', 'AMD': 'Armenia Dram', 'ANG': 'Netherlands Antilles Guilder', 'AOA': 'Angola Kwanza', 'ARS': 'Argentina Peso', 'AUD': 'Australia Dollar', 'AWG': 'Aruba Guilder', 'AZN': 'Azerbaijan Manat', 'BAM': 'Bosnia and Herzegovina Convertible Mark', 'BBD': 'Barbados Dollar', 'BDT': 'Bangladesh Taka', 'BGN': 'Bulgaria Lev', 'BHD': 'Bahrain Dinar', 'BIF': 'Burundi Franc', 'BMD': 'Bermuda Dollar', 'BND': 'Brunei Darussalam Dollar', 'BOB': 'Bolivia Bolíviano', 'BRL': 'Brazil Real', 'BSD': 'Bahamas Dollar', 'BTN': 'Bhutan Ngultrum', 'BWP': 'Botswana Pula', 'BYN': 'Belarus Ruble', 'BZD': 'Belize Dollar', 'CAD': 'Canada Dollar', 'CDF': 'Congo/Kinshasa Franc', 'CHF': 'Switzerland Franc', 'CLP': 'Chile Peso', 'CNY': 'China Yuan Renminbi', 'COP': 'Colombia Peso', 'CRC': 'Costa Rica Colon', 'CUC': 'Cuba Convertible Peso', 'CUP': 'Cuba Peso', 'CVE': 'Cape Verde Escudo', 'CZK': 'Czech Republic Koruna', 'DJF': 'Djibouti Franc', 'DKK': 'Denmark Krone', 'DOP': 'Dominican Republic Peso', 'DZD': 'Algeria Dinar', 'EGP': 'Egypt Pound', 'ERN': 'Eritrea Nakfa', 'ETB': 'Ethiopia Birr', 'EUR': 'Euro Member Countries', 'FJD': 'Fiji Dollar', 'FKP': 'Falkland Islands (Malvinas) Pound', 'GBP': 'United Kingdom Pound', 'GEL': 'Georgia Lari', 'GGP': 'Guernsey Pound', 'GHS': 'Ghana Cedi', 'GIP': 'Gibraltar Pound', 'GMD': 'Gambia Dalasi', 'GNF': 'Guinea Franc', 'GTQ': 'Guatemala Quetzal', 'GYD': 'Guyana Dollar', 'HKD': 'Hong Kong Dollar', 'HNL': 'Honduras Lempira', 'HRK': 'Croatia Kuna', 'HTG': 'Haiti Gourde', 'HUF': 'Hungary Forint', 'IDR': 'Indonesia Rupiah', 'ILS': 'Israel Shekel', 'IMP': 'Isle of Man Pound', 'INR': 'India Rupee', 'IQD': 'Iraq Dinar', 'IRR': 'Iran Rial', 'ISK': 'Iceland Krona', 'JEP': 'Jersey Pound', 'JMD': 'Jamaica Dollar', 'JOD': 'Jordan Dinar', 'JPY': 'Japan Yen', 'KES': 'Kenya Shilling', 'KGS': 'Kyrgyzstan Som', 'KHR': 'Cambodia Riel', 'KMF': 'Comorian Franc', 'KPW': 'Korea (North) Won', 'KRW': 'Korea (South) Won', 'KWD': 'Kuwait Dinar', 'KYD': 'Cayman Islands Dollar', 'KZT': 'Kazakhstan Tenge', 'LAK': 'Laos Kip', 'LBP': 'Lebanon Pound', 'LKR': 'Sri Lanka Rupee', 'LRD': 'Liberia Dollar', 'LSL': 'Lesotho Loti', 'LYD': 'Libya Dinar', 'MAD': 'Morocco Dirham', 'MDL': 'Moldova Leu', 'MGA': 'Madagascar Ariary', 'MKD': 'Macedonia Denar', 'MMK': 'Myanmar (Burma) Kyat', 'MNT': 'Mongolia Tughrik', 'MOP': 'Macau Pataca', 'MRU': 'Mauritania Ouguiya', 'MUR': 'Mauritius Rupee', 'MVR': 'Maldives (Maldive Islands) Rufiyaa', 'MWK': 'Malawi Kwacha', 'MXN': 'Mexico Peso', 'MYR': 'Malaysia Ringgit', 'MZN': 'Mozambique Metical', 'NAD': 'Namibia Dollar', 'NGN': 'Nigeria Naira', 'NIO': 'Nicaragua Cordoba', 'NOK': 'Norway Krone', 'NPR': 'Nepal Rupee', 'NZD': 'New Zealand Dollar', 'OMR': 'Oman Rial', 'PAB': 'Panama Balboa', 'PEN': 'Peru Sol', 'PGK': 'Papua New Guinea Kina', 'PHP': 'Philippines Peso', 'PKR': 'Pakistan Rupee', 'PLN': 'Poland Zloty', 'PYG': 'Paraguay Guarani', 'QAR': 'Qatar Riyal', 'RON': 'Romania Leu', 'RSD': 'Serbia Dinar', 'RUB': 'Russia Ruble', 'RWF': 'Rwanda Franc', 'SAR': 'Saudi Arabia Riyal', 'SBD': 'Solomon Islands Dollar', 'SCR': 'Seychelles Rupee', 'SDG': 'Sudan Pound', 'SEK': 'Sweden Krona', 'SGD': 'Singapore Dollar', 'SHP': 'Saint Helena Pound', 'SLL': 'Sierra Leone Leone', 'SOS': 'Somalia Shilling', 'SPL*': 'Seborga Luigino', 'SRD': 'Suriname Dollar', 'STN': 'São Tomé and Príncipe Dobra', 'SVC': 'El Salvador Colon', 'SYP': 'Syria Pound', 'SZL': 'eSwatini Lilangeni', 'THB': 'Thailand Baht', 'TJS': 'Tajikistan Somoni', 'TMT': 'Turkmenistan Manat', 'TND': 'Tunisia Dinar', 'TOP': `Tonga Pa 'anga`, 'TRY': 'Turkey Lira', 'TTD': 'Trinidad and Tobago Dollar', 'TVD': 'Tuvalu Dollar', 'TWD': 'Taiwan New Dollar', 'TZS': 'Tanzania Shilling', 'UAH': 'Ukraine Hryvnia', 'UGX': 'Uganda Shilling', 'USD': 'United States Dollar', 'UYU': 'Uruguay Peso', 'UZS': 'Uzbekistan Som', 'VEF': 'Venezuela Bolívar', 'VND': 'Viet Nam Dong', 'VUV': 'Vanuatu Vatu', 'WST': 'Samoa Tala', 'XAF': 'Communauté Financière Africaine (BEAC) CFA Franc BEAC', 'XCD': 'East Caribbean Dollar', 'XDR': 'International Monetary Fund (IMF) Special Drawing Rights', 'XOF': 'Communauté Financière Africaine (BCEAO) Franc', 'XPF': 'Comptoirs Français du Pacifique (CFP) Franc', 'YER': 'Yemen Rial', 'ZAR': 'South Africa Rand', 'ZMW': 'Zambia Kwacha', 'ZWD': 'Zimbabwe Dollar'
}

let curSymbol = {
  'ALL': '76, 101, 107', 'AFN': '1547', 'ARS': '36', 'AWG': '402', 'AUD': '36', 'AZN': '8380', 'BSD': '36', 'BBD': '36', 'BYN': '66, 114', 'BZD': '66, 90, 36', 'BMD': '36', 'BOB': '36, 98', 'BAM': '75, 77', 'BWP': '80', 'BGN': '1083, 1074', 'BRL': '82, 36', 'BND': '36', 'KHR': '6107', 'CAD': '36', 'KYD': '36', 'CLP': '36', 'CNY': '165', 'COP': '36', 'CRC': '8353', 'HRK': '107, 110', 'CUP': '8369', 'CZK': '75, 269', 'DKK': '107, 114', 'DOP': '82, 68, 36', 'XCD': '36', 'EGP': '163', 'SVC': '36', 'EUR': '8364', 'FKP': '163', 'FJD': '36', 'GHS': '162', 'GIP': '163', 'GTQ': '81', 'GGP': '163', 'GYD': '36', 'HNL': '76', 'HKD': '36', 'HUF': '70, 116', 'ISK': '107, 114', 'INR': '', 'IDR': '82, 112', 'IRR': '65020', 'IMP': '163', 'ILS': '8362', 'JMD': '74, 36', 'JPY': '165', 'JEP': '163', 'KZT': '1083, 1074', 'KPW': '8361', 'KRW': '8361', 'KGS': '1083, 1074', 'LAK': '8365', 'LBP': '163', 'LRD': '36', 'MKD': '1076, 1077, 1085', 'MYR': '82, 77', 'MUR': '8360', 'MXN': '36', 'MNT': '8366', 'MZN': '77, 84', 'NAD': '36', 'NPR': '8360', 'ANG': '402', 'NZD': '36', 'NIO': '67, 36', 'NGN': '8358', 'NOK': '107, 114', 'OMR': '65020', 'PKR': '8360', 'PAB': '66, 47, 46', 'PYG': '71, 115', 'PEN': '83, 47, 46', 'PHP': '8369', 'PLN': '122, 322', 'QAR': '65020', 'RON': '108, 101, 105', 'RUB': '8381', 'SHP': '163', 'SAR': '65020', 'RSD': '1044, 1080, 1085, 46', 'SCR': '8360', 'SGD': '36', 'SBD': '36', 'SOS': '83', 'ZAR': '82', 'LKR': '8360', 'SEK': '107, 114', 'CHF': '67, 72, 70', 'SRD': '36', 'SYP': '163', 'TWD': '78, 84, 36', 'THB': '3647', 'TTD': '84, 84, 36', 'TRY': '', 'TVD': '36', 'UAH': '8372', 'GBP': '163', 'USD': '36', 'UYU': '36, 85', 'UZS': '1083, 1074', 'VEF': '66, 115', 'VND': '8363', 'YER': '65020', 'ZWD': '90, 36'
}
// let myDiv = document.querySelector('#curr')

// for (key in currencyObj) {
//     myDiv.innerText += `${key} : ${currencyObj[key]}
//     `
// }


let IstSel = document.querySelector('#firstSelect')

for (code in currencyObj) {
  IstSel.innerHTML += `<option value="${code}" id="${code}">${code} : ${currencyObj[code]}</option>`
}

let IIndSel = document.querySelector('#secondSelect')

for (code in currencyObj) {
  IIndSel.innerHTML += `<option value="${code}" id="${code}">${code} : ${currencyObj[code]}</option>`
}







let valBtn = document.querySelector('#valBtn')

valBtn.addEventListener('click', getData)
 
function getData() {
  let myDiv = document.querySelector('#curr')
  myDiv.innerHTML = ''
  let curDate = new Date()
  let currValue = document.getElementById('currValue').value
  let index1 = document.getElementById('firstSelect').selectedIndex;
  let to = curCodeArr[index1 - 1]
  let index2 = document.getElementById('secondSelect').selectedIndex;
  let from = curCodeArr[index2 - 1]
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://free.currconv.com/api/v7/convert?q=${to}_${from},INR_USD&compact=ultra&apiKey=${apiKey}`, true);

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
      // console.log(bulkData)
      let conv = bulkData[`${to}_${from}`] * currValue
      myDiv.innerHTML = `<div class="alert alert-primary" role="alert">
            <h4 class="alert-heading">${currValue}  ${currencyObj[to]} = ${conv.toFixed(3)} ${currencyObj[from]}</h4>
            <hr> 
            <footer class="blockquote-footer">${curDate}</footer>

          </div>`
    }
  }

  xhr.send()
}