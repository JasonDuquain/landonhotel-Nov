/***FULLHEIGHT******/
var arrHeights = [document.documentElement.clientHeight, window.innerHeight];
var wheight = Math.max(...arrHeights);
let fullheight = Array.from(document.querySelectorAll('.fullheight'));

fullheight.forEach((el) => el.style.height = `${wheight}px`);

window.addEventListener('resize', function() {
    arrHeights = [document.documentElement.clientHeight, window.innerHeight];
    wheight = Math.max(...arrHeights);
    fullheight.forEach((el) => el.style.height = `${wheight}px`);
});


/*******EQUAL HEIGHT CONTENT IN 2 IMAGES*******/
let content = Array.from(document.querySelectorAll('#events .content'));

let highest = 0; //this has to be outside the forEach
content.forEach((el) => {
    
    let heightContent = el.getBoundingClientRect().height;
    //console.log(heightContent);
    if (heightContent > highest) {
        highest = heightContent;
        el.style.height = highest + 'px';
    } else {
        el.style.height = highest + 'px';
    }
 
});  
    
/*****BACK TO TOP BUTTON*****/
let bttBtn = document.querySelector('#back-to-top');
let offset = 100;
let docBody = document.body;
let docElem = document.documentElement
let scrollPos;
let totalHeightArr = [docBody.scrollHeight, docBody.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight];
let totalHeight = Math.max(...totalHeightArr);

if (totalHeight != 'undefined') {
    offset = totalHeight / 4;
}


window.addEventListener('scroll', function(event) {
    scrollPos = docBody.scrollTop || docElem.scrollTop;
    if (scrollPos > offset) {
        bttBtn.classList.add('visible');  
    } else {
        bttBtn.classList.remove('visible')                
    }
});

bttBtn.addEventListener('click', function(e) {
    e.preventDefault();
    docElem.scrollTop = 100;
});

/******STICKY HEADER*******/
/* MAKE SURE THE getBounding top goes inside the FN so it is re-calculated with each scroll and remember when nav is set to position sticky its getBounding top is ALWAYS 0*/
let nav = document.querySelector('#nav');
let header = document.querySelector('#intro');

document.addEventListener('scroll', stick);

function stick() {
    var navBar = document.querySelector('#nav');
    var navBarPos = navBar.getBoundingClientRect().top;
    let hdrBgImg = document.querySelector('#intro .fullheight');
    let hdrBtm = hdrBgImg.getBoundingClientRect().bottom;

    if (navBarPos <= 0 && hdrBtm <= 0) {
        document.body.style.paddingTop = nav.getBoundingClientRect().height + 'px';
        navBar.classList.add('fixed');
   } else {
       document.body.style.paddingTop = 0;
       navBar.classList.remove('fixed');
   }
}

/* ALTERNATIVE BUT ITS A BIT MORE JANKY
function stick() {
    let hdrBtm = header.getBoundingClientRect().bottom;
    let navTop = nav.getBoundingClientRect().top;
    if (hdrBtm <= 0) {
        document.body.style.paddingTop = nav.getBoundingClientRect().height + 'px';
        nav.classList.add('fixed') 
    } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('fixed');
    }
}*/

/******HIGHTLIGHT ON SCROLL******/
/**The navs and sects do not equal each other as there is an initial 'welome sect so adjust the comparison accordingly**/
let sects = document.querySelectorAll('.scene:not(:only-of-type)'); //dont include footer
let navs = document.querySelectorAll('a.icon');

document.addEventListener('scroll', function(e) {
    for (let i = 0; i < sects.length; i++) {
        console.log(sects[i+1].getAttribute('id'));
        if ((sects[i+1]).getAttribute('id') === navs[i].getAttribute('href').slice(1)) {
            if (sects[i].getBoundingClientRect().top <= 0 && sects[i].getBoundingClientRect().bottom >= 0) {
                navs[i].style.color = '#063642';
                navs[i].style.backgroundColor = '#EFC94C';
            } else {
                navs[i].style.color = '';
                navs[i].style.backgroundColor = '';
            } 
        
        }
        
     
    }
});














