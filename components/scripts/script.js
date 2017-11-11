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
    console.log(heightContent);
    if (heightContent > highest) {
        highest = heightContent;
        el.style.height = highest + 'px';
    } else {
        el.style.height = highest + 'px';
    }
 
});  
    



