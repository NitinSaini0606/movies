let submit=document.querySelector(".submit");
let firstPageContent=document.querySelector(".firstPageContent");
let secpage=document.querySelector(".secpage");
let homePage=document.querySelector(".homePage");

let Back=document.querySelector(".Back");
let Next=document.querySelector(".Next");
let arrowIcon=document.getElementById("arrowIcon");
let heroImage1=document.querySelector(".heroImage1");
let heroImage2=document.querySelector(".heroImage2");
let heroImage3=document.querySelector(".heroImage3");
let arrowIcon2=document.getElementById("arrowIcon2");
let mvearr=document.querySelector(".mvearr");
let mvearr2=document.querySelector(".mvearr2");
let midImage=document.querySelector(".midImage");
let signin=document.querySelector(".signin")
let box6=document.querySelector(".box6");
let box7=document.querySelector(".box7");
let box8=document.querySelector(".box8");
let box9=document.querySelector(".box9");
let box10=document.querySelector(".box10");
let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");
let box5=document.querySelector(".box5");
let pushpaClick=document.querySelector(".pushpaClick");
let babyClick=document.querySelector(".babyClick");
let marcoClick=document.querySelector(".marcoClick");
let mufasaClick=document.querySelector(".mufasaClick");
let kravenClick=document.querySelector(".kravenClick");
let sonicClick=document.querySelector(".sonicClick");
let vanvaasClick=document.querySelector(".vanvaasClick")
let identityClick=document.querySelector(".identityClick");
let moanaClick=document.querySelector(".moanaClick");
let wildClick=document.querySelector(".wildClick");
let movieSection=document.querySelector(".movieSection");
let movieSection2=document.querySelector(".movieSection2");
let heroSection=document.querySelector(".heroSection");
let pushpaClickText=document.querySelector(".pushpaClickText");

let ticketPushpa=document.querySelector(".ticketPushpa");
let ticketBaby=document.querySelector(".ticketBaby");
let bookBaby=document.querySelector(".bookBaby");

let book=document.querySelector(".book");
let venues=document.querySelector(".venues");
let venuesbaby=document.querySelector(".venuesbaby");
let payment1=document.querySelector("#payment1");
let payment2=document.querySelector("#payment2");
let payment3=document.querySelector("#payment3");
let payment4=document.querySelector("#payment4");
let payment5=document.querySelector("#payment5");
let payment6=document.querySelector("#payment6");
let payment7=document.querySelector("#payment7");
let location1book=document.querySelector(".location1book");
let location2book=document.querySelector(".location2book");
let location3book=document.querySelector(".location3book");
let location1bookbaby=document.querySelector(".location1bookbaby");
let location2bookbaby=document.querySelector(".location2bookbaby");
let payment1baby=document.querySelector("#payment1baby");
let payment2baby=document.querySelector("#payment2baby");






submit.addEventListener("click", function() {
    firstPageContent.style.display='none';
   
    setTimeout(function() {
        secpage.style.display='block';
    },200);
});
Back.addEventListener("click" , function() {
    setTimeout(function() {
        firstPageContent.style.display='block';
        secpage.style.display='none';
    },200);
});

Next.addEventListener("click" , function() {
    setTimeout(function() {
        firstPageContent.style.display='none';
        secpage.style.display='none';
        homePage.style.display='block';

    },200);
});
arrowIcon.addEventListener("click", function() {
    heroImage1.style.display='none';
    heroImage2.style.display='block';

});
arrowIcon.addEventListener("dblclick", function() {
    heroImage1.style.display='none';
    heroImage2.style.display='none';
    heroImage3.style.display='block';
});
// arrowIcon2.addEventListener("click", function() {
//      mvearr.style.display='none';
//      mvearr2.style.display='flex';

//      mvearr.classList.add('hidden');
//   mvearr2.classList.remove('hidden');

//     box6.style.display='block';
//     box7.style.display='block';
//     box8.style.display='block';
//     box9.style.display='block';
//     box10.style.display='block';

//     box1.style.display='none';
//     box2.style.display='none';
//     box3.style.display='none';
//     box4.style.display='none';
//     box5.style.display='none';
// });
box1.addEventListener("click",function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='block'


})

box2.addEventListener("click",function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    babyClick.style.display='block';


})

box3.addEventListener("click",function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    babyClick.style.display='none';
    marcoClick.style.display='block';


})

box4.addEventListener("click",function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    babyClick.style.display='none';
    marcoClick.style.display='none';
    mufasaClick.style.display='block';


})
box5.addEventListener("click",function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    babyClick.style.display='none';
    marcoClick.style.display='none';
    mufasaClick.style.display='none';
    kravenClick.style.display='block';
})

box6.addEventListener("click",function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    babyClick.style.display='none';
    marcoClick.style.display='none';
    mufasaClick.style.display='none';
    kravenClick.style.display='none';
    sonicClick.style.display='block';
})

box7.addEventListener("click",function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    babyClick.style.display='none';
    marcoClick.style.display='none';
    mufasaClick.style.display='none';
    kravenClick.style.display='none';
    sonicClick.style.display='none';
    vanvaasClick.style.display='block';
})

box8.addEventListener("click",function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    babyClick.style.display='none';
    marcoClick.style.display='none';
    mufasaClick.style.display='none';
    kravenClick.style.display='none';
    sonicClick.style.display='none';
    vanvaasClick.style.display='none';
    identityClick.style.display='block';
})

box9.addEventListener("click",function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    
    moanaClick.style.display='block';
})

box10.addEventListener("click",function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
  
   
    wildClick.style.display='block';
})

book.addEventListener("click",function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    ticketPushpa.style.display="block";
    venues.style.display="block";

})
payment1.addEventListener("click", function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    ticketPushpa.style.display="none";
    venues.style.display="none";
    setTimeout(function(){
        location1book.style.display="block";

    },500);
    


})
payment2.addEventListener("click", function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    ticketPushpa.style.display="none";
    venues.style.display="none";
    location1book.style.display='none';
    setTimeout(function(){
        location2book.style.display="block";

    },500);
    


})

payment3.addEventListener("click", function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    ticketPushpa.style.display="none";
    venues.style.display="none";
    location1book.style.display='none';
    location2book.style.display='none';
    setTimeout(function(){
        location3book.style.display="block";

    },500);
    


})
bookBaby.addEventListener("click",function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    ticketPushpa.style.display="none";
    babyClick.style.display="none";
    ticketBaby.style.display="block";
    venuesbaby.style.display="block";
    // venues.style.display="block";
})

payment1baby.addEventListener("click", function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    ticketPushpa.style.display="none";
    venues.style.display="none";
    venuesbaby.style.display="none";
    location1book.style.display="none";
    ticketBaby.style.display="none";
    
    setTimeout(function(){
        location1bookbaby.style.display="block";

    },500);
    


})

payment2baby.addEventListener("click", function() {
    firstPageContent.style.display='none';
    secpage.style.display='none';
    heroSection.style.display='none';
   
    movieSection.style.display='none';
    movieSection2.style.display='none';
    midImage.style.display='none';
    pushpaClick.style.display='none';
    ticketPushpa.style.display="none";
    venues.style.display="none";
    location1bookbaby.style.display='none';
    venuesbaby.style.display="none";
    location1book.style.display="none";
    ticketBaby.style.display="none";
    setTimeout(function(){
        location2bookbaby.style.display="block";

    },500);
    


})