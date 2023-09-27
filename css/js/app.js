const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var search = $('.search')
var city = $('.city')
var cityCoordLon = $('.cityCoord-lon')
var cityCoordLat = $('.cityCoord-lat')
var timezone = $('.timezone')
var temperature = $('.temperature')
var clouds = $('.clouds')
var wind = $('.wind')
var visibility = $('.visibility')
var humidity = $('.humidity')
var precipitation = $('.precipitation')
// --
var nameCity1 = $('.country-more-name-city1')
var countryCity1 = $('.country-more-country-city1')
var tempCity1 = $('.temp-city1')
// --
var nameCity2 = $('.country-more-name-city2')
var countryCity2 = $('.country-more-country-city2')
var tempCity2 = $('.temp-city2')
// --
var nameCity3 = $('.country-more-name-city3')
var countryCity3 = $('.country-more-country-city3')
var tempCity3 = $('.temp-city3')
// --
var nameCity4 = $('.country-more-name-city4')
var countryCity4 = $('.country-more-country-city4')
var tempCity4 = $('.temp-city4')
// --
var nameCity5 = $('.country-more-name-city5')
var countryCity5 = $('.country-more-country-city5')
var tempCity5 = $('.temp-city5')

// ---
var iconCloud = $('.fa-cloud-showers-heavy')
var iconCloudCity1 = $('.fa-cloud-showers-heavy-city1');
var iconCloudCity2 = $('.fa-cloud-showers-heavy-city2');
var iconCloudCity3 = $('.fa-cloud-showers-heavy-city3');
var iconCloudCity4 = $('.fa-cloud-showers-heavy-city4');
var iconCloudCity5 = $('.fa-cloud-showers-heavy-city5');

// ---Map
var footerMap = $('.footer');
var weatherMap = $('.weathermap');

// --World
var slideName1 = $('.slide-world-name-1')
var slideName2 = $('.slide-world-name-2')
var slideName3 = $('.slide-world-name-3')
var slideName4 = $('.slide-world-name-4')
var slideName5 = $('.slide-world-name-5')

var slideTemp1 = $('.slide-world-temp-1')
var slideTemp2 = $('.slide-world-temp-2')
var slideTemp3 = $('.slide-world-temp-3')
var slideTemp4 = $('.slide-world-temp-4')
var slideTemp5 = $('.slide-world-temp-5')

async function weatherUI(){
    let searchWeather = search.value.trim()
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=797378415692ac2cf14324e2acf6600a`
    let data = await fetch(apiURL).then(res=> res.json());
    console.log(data);
    city.innerText = data.name + ' ,' + data.sys.country
    timezone.innerText = data.timezone + '  UTC'
    cityCoordLon.innerText = data.coord.lon
    cityCoordLat.innerText = data.coord.lat
    temperature.innerText = (data.main.temp - 273.15).toFixed(2) + "\xB0C"

    wind.innerText = data.wind.speed + (' (m/s)')
    visibility.innerText = data.visibility + (' (m)')

    humidity.innerText = data.main.humidity + (' %')
    precipitation.innerText = data.weather[0].description

    if (data.main.humidity < 30) {
        iconCloud.classList.remove("fa-cloud-showers-heavy");
        iconCloud.classList.add("fa-sun");
    } else if (31 < data.main.humidity && data.main.humidity < 80) {
        iconCloud.classList.remove("fa-cloud-showers-heavy");
        iconCloud.classList.add("fa-cloud-sun");
    } else {
        iconCloud.classList.remove("fa-sun");
        iconCloud.classList.remove("fa-cloud-sun");
        iconCloud.classList.add("fa-cloud-showers-heavy");
    }
}

search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
       weatherUI('');  
    }
})

async function getCity1Weather() {
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Ha Noi&appid=797378415692ac2cf14324e2acf6600a';
    let data = await fetch(apiURL).then(res => res.json());

    nameCity1.innerText = data.name
    countryCity1.innerText = data.sys.country
    tempCity1.innerText = (data.main.temp - 273.15).toFixed(2) + "\xB0C"

    if (data.main.humidity < 30) {
        iconCloudCity1.classList.remove("fa-cloud-showers-heavy");
        iconCloudCity1.classList.add("fa-sun");
    } else if (31 < data.main.humidity && data.main.humidity < 80) {
        iconCloudCity1.classList.remove("fa-cloud-showers-heavy");
        iconCloudCity1.classList.add("fa-cloud-sun");
    } else {
        iconCloudCity1.classList.remove("fa-sun");
        iconCloudCity1.classList.remove("fa-cloud-sun");
        iconCloudCity1.classList.add("fa-cloud-showers-heavy");
    }
}
getCity1Weather()

async function getCity2Weather() {
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Hai Duong&appid=797378415692ac2cf14324e2acf6600a';
    let data = await fetch(apiURL).then(res => res.json());

    nameCity2.innerText = data.name
    countryCity2.innerText = data.sys.country
    tempCity2.innerText = (data.main.temp - 273.15).toFixed(2) + "\xB0C"

    if (data.main.humidity < 30) {
        iconCloudCity2.classList.remove("fa-cloud-showers-heavy");
        iconCloudCity2.classList.add("fa-sun");
    } else if (31 < data.main.humidity && data.main.humidity < 80) {
        iconCloudCity2.classList.remove("fa-cloud-showers-heavy");
        iconCloudCity2.classList.add("fa-cloud-sun");
    } else {
        iconCloudCity2.classList.remove("fa-sun");
        iconCloudCity2.classList.remove("fa-cloud-sun");
        iconCloudCity2.classList.add("fa-cloud-showers-heavy");
        {}
    }
}
getCity2Weather()

async function getCity3Weather() {
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Da Lat&appid=797378415692ac2cf14324e2acf6600a';
    let data = await fetch(apiURL).then(res => res.json());

    nameCity3.innerText = data.name
    countryCity3.innerText = data.sys.country
    tempCity3.innerText = (data.main.temp - 273.15).toFixed(2) + "\xB0C"
    if (data.main.humidity < 30) {
        iconCloudCity3.classList.remove("fa-cloud-showers-heavy");
        iconCloudCity3.classList.add("fa-sun");
    } else if (31 < data.main.humidity && data.main.humidity < 80) {
        iconCloudCity3.classList.remove("fa-cloud-showers-heavy");
        iconCloudCity3.classList.add("fa-cloud-sun");
    } else {
        iconCloudCity3.classList.remove("fa-sun");
        iconCloudCity3.classList.remove("fa-cloud-sun");
        iconCloudCity3.classList.add("fa-cloud-showers-heavy");
    }
}
getCity3Weather()

async function getCity4Weather() {
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Can Tho&appid=797378415692ac2cf14324e2acf6600a';
    let data = await fetch(apiURL).then(res => res.json());

    nameCity4.innerText = data.name
    countryCity4.innerText = data.sys.country
    tempCity4.innerText = (data.main.temp - 273.15).toFixed(2) + "\xB0C"

    if (data.main.humidity < 30) {
        iconCloudCity1.classList.remove("fa-cloud-showers-heavy");
        iconCloudCity1.classList.add("fa-sun");
    } else if (31 < data.main.humidity && data.main.humidity < 80) {
        iconCloudCity4.classList.remove("fa-cloud-showers-heavy");
        iconCloudCity4.classList.add("fa-cloud-sun");
    } else {
        iconCloudCity4.classList.remove("fa-sun");
        iconCloudCity4.classList.remove("fa-cloud-sun");
        iconCloudCity4.classList.add("fa-cloud-showers-heavy");
    }
}
getCity4Weather()

async function getCity5Weather() {
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Ho Chi Minh&appid=797378415692ac2cf14324e2acf6600a';
    let data = await fetch(apiURL).then(res => res.json());

    nameCity5.innerText = data.name
    countryCity5.innerText = data.sys.country
    tempCity5.innerText = (data.main.temp - 273.15).toFixed(2) + "\xB0C"

    if (data.main.humidity < 30) {
        iconCloudCity5.classList.remove("fa-cloud-showers-heavy");
        iconCloudCity5.classList.add("fa-sun");
    } else if (31 < data.main.humidity && data.main.humidity < 80) {
        iconCloudCity5.classList.remove("fa-cloud-showers-heavy");
        iconCloudCity5.classList.add("fa-cloud-sun");
    } else {
        iconCloudCity5.classList.remove("fa-sun");
        iconCloudCity5.classList.remove("fa-cloud-sun");
        iconCloudCity5.classList.add("fa-cloud-showers-heavy");
    }
}
getCity5Weather()

// ---World
// Phan1
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Phan2
const weatherLayer = L.tileLayer(`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=797378415692ac2cf14324e2acf6600a`, {
  layer: 'temp_new',
  area : 'worldwide',
  maxZoom: 18,
})
// Tạo một control để chuyển đổi giữa bản đồ và lớp thời tiết
const baseLayers = {
    "Map": map,
    "Weather": weatherLayer
};
L.control.layers(baseLayers).addTo(map);


// Hàm để hiển thị địa điểm trên bản đồ
function showLocationOnMap(latitude, longitude) {
    map.setView([latitude, longitude], 13); // Đặt lại tọa độ và mức độ thu phóng dựa trên địa điểm
    // Các tác vụ khác bạn muốn thực hiện sau khi đặt lại tọa độ có thể thêm ở đây
}

// Gọi hàm showLocationOnMap khi bạn tìm kiếm một địa điểm cụ thể
search.addEventListener('keypress', async function (e) {
    if (e.code === 'Enter') {
      let searchWeather = search.value.trim()
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=797378415692ac2cf14324e2acf6600a`
      let data = await fetch(apiURL).then(res => res.json());
      latitude = data.coord.lat; // Gán giá trị tọa độ
      longitude = data.coord.lon; // Gán giá trị tọa độ
      showLocationOnMap(latitude, longitude);
    }
  });
// ---World 
// SLide
var slideIndex = 0; 
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide-world-list");
  if (n >= x.length) {slideIndex = 0}
  if (n < 0) {slideIndex = x.length - 1}
  
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active"); 
  }
 
  x[slideIndex].classList.add("active"); 
}
function autoSlide() {
  plusDivs(1);
  setTimeout(autoSlide, 3500); 
}
autoSlide();

async function slideWorld1(){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=797378415692ac2cf14324e2acf6600a`
    let data = await fetch(apiURL).then(res=> res.json());
    console.log(data);

    slideName1.innerText  = data.name + ' ,' + data.sys.country
    slideTemp1.innerText = (data.main.temp - 273.15).toFixed(2) + "\xB0C"
}
slideWorld1()

async function slideWorld2(){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=797378415692ac2cf14324e2acf6600a`
    let data = await fetch(apiURL).then(res=> res.json());
    console.log(data);

    slideName2.innerText  = data.name + ' ,' + data.sys.country
    slideTemp2.innerText = (data.main.temp - 273.15).toFixed(2) + "\xB0C"
}
slideWorld2()

async function slideWorld3(){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=797378415692ac2cf14324e2acf6600a`
    let data = await fetch(apiURL).then(res=> res.json());
    console.log(data);

    slideName3.innerText  = data.name + ' ,' + data.sys.country
    slideTemp3.innerText = (data.main.temp - 273.15).toFixed(2) + "\xB0C"
}
slideWorld3()

async function slideWorld4(){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=797378415692ac2cf14324e2acf6600a`
    let data = await fetch(apiURL).then(res=> res.json());
    console.log(data);

    slideName4.innerText  = data.name + ' ,' + data.sys.country
    slideTemp4.innerText = (data.main.temp - 273.15).toFixed(2) + "\xB0C"
}
slideWorld4()

async function slideWorld5(){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=797378415692ac2cf14324e2acf6600a`
    let data = await fetch(apiURL).then(res=> res.json());
    console.log(data);

    slideName5.innerText  = data.name + ' ,' + data.sys.country
    slideTemp5.innerText = (data.main.temp - 273.15).toFixed(2) + "\xB0C"
}
slideWorld5()
