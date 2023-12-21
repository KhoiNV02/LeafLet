


var rating=document.querySelector(".rating1");
rating.addEventListener("click",()=>{
    var clo1=document.getElementById("modal");
    clo1.style.display="flex";
})
var close1=document.querySelector(".close");

close1.addEventListener ("click",()=>{
    var clo1=document.getElementById("modal");
   clo1.style.display="none";
})


var rate=document.getElementsByClassName("rate");
for (let i=0;i<rate.length;i++)
{
    rate[i].addEventListener("click",() =>{
       
            for (let j=0;j<rate.length;j++)
            rate[j].style.color="black";
            for (let j=0;j<=i;j++)
            rate[j].style.color="#EEA460";
    })
}

var rate1=document.getElementsByClassName("submit")
for (let i=0;i<rate1.length;i++)
{
    rate1[i].addEventListener("click",() =>{
       
alert("đánh giá thành công");
var clo1=document.getElementById("modal");
clo1.style.display="none";
var ko=document.getElementsByClassName("ssp");
ko[0].innerHTML="hehe";
    })
}


