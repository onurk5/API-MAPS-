
const gmail = document.getElementById('mail');
const passwordInp = document.getElementById('password');
let save = document.getElementById('save');
let userd = document.getElementById('user')
let mmail = document.getElementById('mmail')
let surname = document.getElementById('surname')
let tocation = document.getElementById('tocation')
let tocations = document.getElementById('tocations')
let phones = document.getElementById('phones')
let genders = document.getElementById('genders')
let none = document.getElementById('none');
let Map = document.getElementById('map')
let yesil = document.getElementById('yesil');
 none.style.display = "none";
let gizle = document.getElementById('gizle');
let img = document.getElementById('img');
let i = document.getElementById('i');
let i2 = document.getElementById('i-2');
fetch('https://randomuser.me/api/')

    .then((Response) => {
    return Response.json();
    }).then((data) => {
        localStorage.setItem('veri', JSON.stringify(data))
         local = JSON.parse(localStorage.getItem("veri"))
      console.log(data);
        gmail.value = local.results[0].email;
  passwordInp.value = local.results[0].login.password; 
    })
  
save.addEventListener('click', function onur() {
 
   
  let local = JSON.parse(localStorage.getItem("veri"))
  if (local.results[0].gender === "male") {
    i2.style.display = 'inline';
   } else {
     i.style.display = 'inline';
   } 
    // console.log(typeof local)
    let mai = local.results[0].email
    //  console.log( mai)
  let pasword = local.results[0].login.password
  console.log(pasword, mai); 
    //  console.log(typeof pasword)
    // console.log(pasword, mai);  
  if (gmail.value === mai && passwordInp.value === pasword) {
    
    none.style.display = "inline";
    gizle.style.display = 'none'
    img.style.display='inline'
    clears.style.display = 'inline';
    map.style.display = 'inline';
     yesil.style.height = '60px'
    //  yesil.innerHTML = 'KIRMIZI LİSTE'
    // yesil.style.alignItems = 'center'
    // yesil.style.fontSize = '20px'
    // yesil.style.color='red'
    img.src = local.results[0].picture.large;
        userd.innerHTML = local.results[0].login.username
        surname.innerHTML = local.results[0].email
        mmail.innerHTML = local.results[0].name.first
        tocation.innerHTML = local.results[0].location.city
        tocations.innerHTML = local.results[0].location.country
      phones.innerHTML = local.results[0].phone
    genders.innerHTML = local.results[0].gender
    
    } else {
    // alert("BİLGİLERİNİZİ KONTROL EDİN!");
    window.location.href = window.location.href;
    }
})
function initMap() {
   local = JSON.parse(localStorage.getItem("veri"))
   console.log(local);
   let longs = local.results[0].location.coordinates.longitude;
   let lats = local.results[0].location.coordinates.latitude;
   const uluru = { lat:Number (lats), lng:Number (longs) };
   const map = new google.maps.Map(document.getElementById("map"), {
   zoom: 4,
  center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

}
let clears = document.getElementById('clears');

clears.addEventListener('click', function () {
  alert('localstorega verileriniz silinecektir eminmisiniz')
  
window.location.href = window.location.href;
  
  
})




    

        
    
        
   
    












































// const left = document.getElementById("left");
// const right = document.getElementById("right");
// let count = 0;

// function sliderL(count) {
//     count--;
//     document.getElementById("onur").style.display = "none";
//     document.getElementById("card1").style.display = "block";
    
// }
// function sliderR() {
//     count++;
//     document.getElementById("card1").style.display = "none";
   
//     document.getElementById("onur").style.display = "block";
// }

// left.addEventListener('click', sliderL)

// right.addEventListener('click', sliderR)
