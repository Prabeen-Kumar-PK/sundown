const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a = document.querySelectorAll("#elem1");
// var image=a.getAttribute("data-image")
// console.log(image);



function page4Animation(){

  let elemc= document.querySelector("#elem-container");

  let fixed = document.querySelector("#fixed-image")
  elemc.addEventListener("mouseenter", function (){
      fixed.style.display="block"
  })
  
  elemc.addEventListener("mouseleave", function (){
      fixed.style.display="none"
  })
  
  
  var elems = document.querySelectorAll(".elem")
  
  elems.forEach(function(e){
      console.log(e)
    e.addEventListener("mouseenter",function () {
      var image = e.getAttribute("data-img")
      console.log(image);
      fixed.style.backgroundImage = `url(${image})`
    })
  }
  )
}

page4Animation()




function swiperAnimation (){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

swiperAnimation();







function menuAnimation ( ){

  let menu=document.querySelector("nav h3")
  let navimg=document.querySelector("nav img")
  let full = document.querySelector("#full-scr")
 
  let flag = 0
 
 menu.addEventListener("click",function(){
   // console.log("clicked")
   if(flag==0){
     full.style.top=0;
     navimg.style.opacity =0
     flag=1
     // console.log("flag value changed")
   }
   else{
     full.style.top="-100%";
     navimg.style.opacity =1;
     flag=0
   }
  
 })
}


menuAnimation()



let laoder= document.querySelector("#loader")

setTimeout(
  function() {
  laoder.style.top="-100%"
},4000)
