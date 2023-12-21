
    var map = L.map('map').setView([10.823099 ,106.629664], 10);

    var osm= L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(map);
    googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    });
    googleStreets.addTo(map);

coords=[[10.875607556561567, 106.80925892801777],[10.872488843822481, 106.81445168460583],[10.880548453067306, 106.81087297709185],[10.879138269202096, 106.8100292898272],[10.875600122061627, 106.80719114806725],[10.873680678223701, 106.80077375597408],[10.874439283994825, 106.79944338032408],[10.87668852082044, 106.81640207473376],[10.877489723901299, 106.80876235663622],[10.880514633991472, 106.8107686943837],[10.881462415195132, 106.82089467476035],[10.89488873288874, 106.80679208685717],[10.879844448720672, 106.81012203044857],[10.879366861971484, 106.80999152071502],[10.88103734716556, 106.81088485688646],[10.876519522557741, 106.80936115118668],[10.871155542633286, 106.79936427023259],[10.89750678553769, 106.80015373579137],[10.900370665082262, 106.800447539546],[10.891488404694721, 106.80645058573815],[10.944317685897014, 106.82951637720647],[10.86188965362377, 106.80713015253797],[10.885978286993952, 106.78200225162733],[10.88260005242853, 106.78727348286166],[10.879253684494396, 106.79571287121506],[10.913502641664541, 106.80081392045939],[10.910114812500403, 106.79272046876062]]
// let l=coordss.length;
// var marker=L.marker(coords[0]).addTo(map);
// var marker=L.marker(coords[1]).addTo(map);
console.log(coords.length)
function sayHello() {
    var a=document.querySelectorAll('.shop-heading');

    for (let i=0;i<coords.length;i++)
    {
        var marker=L.marker(coords[i]).addTo(map);
        var name1=L.tooltip({
            permanent:true
        }).setContent(a[i].innerHTML);
        marker.bindTooltip(name1);
    }
}

sayHello();
var ap=document.querySelectorAll('.imgshop');
for (let i=0;i<ap.length;i++)
{
ap[i].addEventListener("mouseover", ()=>{
    map.flyTo(coords[i],19);
    routing.remove(); 
    // routing.spliceWaypoints(0, 2); 
    // map.removeControl($scope.routingControl);
})
}
var routing;



var lat1;
var long1;
navigator.geolocation.getCurrentPosition(getPosition)
function getPosition(position)
{
    var lat=position.coords.latitude
   var long=position.coords.longitude
    var marker=L.marker([lat,long]).addTo(map);
    var name1=L.tooltip({
        permanent:true
    }).setContent("Vị trí của bạn");
    marker.bindTooltip(name1);
    lat1=lat;
    long1=long;

 
}

var Icon=L.icon({
    iconUrl:'IMG/run.png',
    // iconsize:[170,170]
})
var direc=document.querySelector("#di");
direc.addEventListener("click",()=>{

    map.flyTo([lat1,long1],17);
    setTimeout(()=>
    { 
        var circle = L.circle([lat1, long1], {
            radius: 400, // Đơn vị tính là mét
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.2
          }).addTo(map);
    },3000);
   
    setTimeout(()=>
    { 
     var clo1=document.getElementById("modal");
    clo1.style.display="flex";
    },5000);
    setTimeout(()=>
    { 
     var clo1=document.getElementById("modal");
    clo1.style.display="none";
    },13000);
})



var ap=document.querySelectorAll('.imgshop');
for (let i=0;i<ap.length;i++)
{
ap[i].addEventListener("click", ()=>{
    var pointA = L.latLng(lat1,long1);
    map.flyTo([lat1,long1],16);
    var a=document.querySelectorAll('.shop-heading');
    var marker=L.marker(coords[coords.length-1]).addTo(map);
    var name1=L.tooltip({
        permanent:false
    }).setContent(a[i].innerHTML);
    marker.bindTooltip(name1);

     routing =L.Routing.control({
        show: false,
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: false,
        lineOptions: {
            styles: [{color: "#00b0ff", opacity: 1, weight: 10}]
         },
    waypoints: [
      L.latLng(lat1,long1),
      L.latLng(coords[i])
    ]
  }).on('routesfound',function(pointA)
  {
pointA.routes[0].coordinates.forEach(function(coord,index)
{
 
        setTimeout(()=>
        { 
            marker.setLatLng([coord.lat,coord.lng])
        },100*index);
        })

  }).addTo(map);

    //   routing.spliceWaypoints(0, 2); 
})
}


var hi=document.getElementById("map");
function scrolled(){
    var scrollPosition = window.scrollY;
    // alert(scrollPosition);
    if (scrollPosition > 190) {
        // Đặt vị trí top của hình ảnh thành 20px
        hi.style.top = "20px";
      } 
      else
      hi.style.top = 340-window.scrollY+"px";
}

window.addEventListener('scroll', scrolled);

// var vitri=document.getElementById("vitrii");
// vitri.addEventListener("click",()=>{
//     var vi=document.getElementById("shops");
//     vi.style.display="none";
//     var vi2=document.getElementById("shops3");
//     vi2.style.display="none";
//     var vi2=document.getElementById("shops2");
//     vi2.style.display="block";
//     vitri.style.backgroundColor="#EEA460";
//     var danhgia=document.getElementById("danhgia");
//     danhgia.style.background="white";
// })

// var vitri=document.getElementById("danhgia");
// vitri.addEventListener("click",()=>{
//     var vi=document.getElementById("shops");
//     vi.style.display="none";
//     var vi2=document.getElementById("shops3");
//     vi2.style.display="block";
//     var vi2=document.getElementById("shops2");
//     vi2.style.display="none";
//     vitri.style.backgroundColor="#EEA460";
//     var danhgia=document.getElementById("vitrii");
//     danhgia.style.background="white";
// })


var hehe = document.getElementsByClassName("chip1");
for (let i=0;i<hehe.length;i++)
{ hehe[i].addEventListener("click", ()=>{
    for (let j=0;j<hehe.length;j++)
    {
    hehe[j].style.backgroundColor = " #FFFAEF";
    }
    hehe[i].style.backgroundColor = "red";
})
   
}

var c1=document.getElementById("c1");
c1.addEventListener("click",()=>{
    var so=document.getElementsByClassName("so");
    for (let j=0;j<so.length;j++)
    so[j].style.display="block";
    var so1=document.getElementsByClassName("so1");
    for (let j=0;j<so1.length;j++)
    so1[j].style.display="none";
    var so2=document.getElementsByClassName("so2");
    for (let j=0;j<so2.length;j++)
    so2[j].style.display="none";
    window.scrollTo(0, 0);
})

var c2=document.getElementById("c2");
c2.addEventListener("click",()=>{
    var so=document.getElementsByClassName("so");
    for (let j=0;j<so.length;j++)
    so[j].style.display="none";
    var so1=document.getElementsByClassName("so1");
    for (let j=0;j<so1.length;j++)
    so1[j].style.display="block";
    var so2=document.getElementsByClassName("so2");
    for (let j=0;j<so2.length;j++)
    so2[j].style.display="none";
    window.scrollTo(0, 0);
})

var c3=document.getElementById("c3");
c3.addEventListener("click",()=>{
    var so=document.getElementsByClassName("so");
    for (let j=0;j<so.length;j++)
    so[j].style.display="none";
    var so1=document.getElementsByClassName("so1");
    for (let j=0;j<so1.length;j++)
    so1[j].style.display="none";
    var so2=document.getElementsByClassName("so2");
    for (let j=0;j<so2.length;j++)
    so2[j].style.display="block";
    window.scrollTo(0, 0);
})

var pointA = L.latLng(10.881377975523483, 106.80607462997705);
var pointB = L.latLng(10.872488843822481, 106.81445168460583);
var distanceInKm = pointA.distanceTo(pointB);




var close1=document.querySelector("#hax");
close1.addEventListener("click",()=>{

    var clo1=document.getElementById("modal");
    clo1.style.display="none";
})