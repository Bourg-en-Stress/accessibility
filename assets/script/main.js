


//Get the button
var mybutton = document.getElementById("arrow");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && window.screen.width > 990) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', function(e) {
  e.preventDefault();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

/* //menu
var Button1 = document.getElementById('switch1')
var Menu1 = document.getElementById('menu1')

Button1.addEventListener('click' , function(){
    if(Menu1.style.display !='block'){
    Menu1.style.display = 'block'}
    else {
    Menu1.style.display = 'none'
    }
    Menu2.style.display = 'none'
})

var Button2 = document.getElementById('switch2')
var Menu2 = document.getElementById('menu2')

Button2.addEventListener('click' , function(){
    if(Menu2.style.display !='block'){
    Menu2.style.display = 'block'}
    else {
    Menu2.style.display = 'none'
    }
    Menu1.style.display = 'none'
})
*/



let count = 0 ;
  
  document.getElementById('bouton').addEventListener('click', function () {


    if (count == 0) {
        document.getElementById('change-dys').style.fontFamily = 'OpenDyslexic3';
        count = 1;
        console.log(count);
    } else {
        document.getElementById('change-dys').style.fontFamily = 'Basic';
        count = 0;
        console.log(count);
    }
    
});


  
document.getElementById('show-page-home').addEventListener('click', function () {
  document.getElementById('page-home').style.display = 'block';
  document.getElementById('page-accessibility').style.display = 'none';  
  document.getElementById('page-handicap').style.display = 'none';  
  document.getElementById('page-issues').style.display = 'none';  
  document.getElementById('page-allow-access').style.display = 'none';  
  document.getElementById('page-good-practices').style.display = 'none';  
  document.getElementById('page-learning').style.display = 'none';
  document.getElementById('page-mention').style.display = 'none';   
});

document.getElementById('show-page-home-2').addEventListener('click', function () {
  document.getElementById('page-home').style.display = 'block';
  document.getElementById('page-accessibility').style.display = 'none';  
  document.getElementById('page-handicap').style.display = 'none';  
  document.getElementById('page-issues').style.display = 'none';  
  document.getElementById('page-allow-access').style.display = 'none';  
  document.getElementById('page-good-practices').style.display = 'none';  
  document.getElementById('page-learning').style.display = 'none';
  document.getElementById('page-mention').style.display = 'none';   
});

document.getElementById('show-page-accessibility').addEventListener('click', function () {
  document.getElementById('page-home').style.display = 'none';
  document.getElementById('page-accessibility').style.display = 'block';  
  document.getElementById('page-handicap').style.display = 'none';  
  document.getElementById('page-issues').style.display = 'none';  
  document.getElementById('page-allow-access').style.display = 'none';  
  document.getElementById('page-good-practices').style.display = 'none';  
  document.getElementById('page-learning').style.display = 'none';
  document.getElementById('page-mention').style.display = 'none';  
});

document.getElementById('show-page-handicap').addEventListener('click', function () {
  document.getElementById('page-home').style.display = 'none';
  document.getElementById('page-accessibility').style.display = 'none';  
  document.getElementById('page-handicap').style.display = 'block';  
  document.getElementById('page-issues').style.display = 'none';  
  document.getElementById('page-allow-access').style.display = 'none';  
  document.getElementById('page-good-practices').style.display = 'none';  
  document.getElementById('page-learning').style.display = 'none'; 
  document.getElementById('page-mention').style.display = 'none'; 
});

document.getElementById('show-page-issues').addEventListener('click', function () {
  document.getElementById('page-home').style.display = 'none';
  document.getElementById('page-accessibility').style.display = 'none';  
  document.getElementById('page-handicap').style.display = 'none';  
  document.getElementById('page-issues').style.display = 'block';  
  document.getElementById('page-allow-access').style.display = 'none';  
  document.getElementById('page-good-practices').style.display = 'none';  
  document.getElementById('page-learning').style.display = 'none'; 
  document.getElementById('page-mention').style.display = 'none'; 
});

document.getElementById('show-page-allow-access').addEventListener('click', function () {
  document.getElementById('page-home').style.display = 'none';
  document.getElementById('page-accessibility').style.display = 'none';  
  document.getElementById('page-handicap').style.display = 'none';  
  document.getElementById('page-issues').style.display = 'none';  
  document.getElementById('page-allow-access').style.display = 'block';  
  document.getElementById('page-good-practices').style.display = 'none';  
  document.getElementById('page-learning').style.display = 'none'; 
  document.getElementById('page-mention').style.display = 'none'; 
});

document.getElementById('show-page-good-practices').addEventListener('click', function () {
  document.getElementById('page-home').style.display = 'none';
  document.getElementById('page-accessibility').style.display = 'none';  
  document.getElementById('page-handicap').style.display = 'none';  
  document.getElementById('page-issues').style.display = 'none';  
  document.getElementById('page-allow-access').style.display = 'none';  
  document.getElementById('page-good-practices').style.display = 'block';  
  document.getElementById('page-learning').style.display = 'none';  
  document.getElementById('page-mention').style.display = 'none';
});

document.getElementById('show-page-learning').addEventListener('click', function () {
  document.getElementById('page-home').style.display = 'none';
  document.getElementById('page-accessibility').style.display = 'none';  
  document.getElementById('page-handicap').style.display = 'none';  
  document.getElementById('page-issues').style.display = 'none';  
  document.getElementById('page-allow-access').style.display = 'none';  
  document.getElementById('page-good-practices').style.display = 'none';  
  document.getElementById('page-learning').style.display = 'block'; 
  document.getElementById('page-mention').style.display = 'none'; 
});

document.getElementById('show-page-mention').addEventListener('click', function () {
  document.getElementById('page-home').style.display = 'none';
  document.getElementById('page-accessibility').style.display = 'none';  
  document.getElementById('page-handicap').style.display = 'none';  
  document.getElementById('page-issues').style.display = 'none';  
  document.getElementById('page-allow-access').style.display = 'none';  
  document.getElementById('page-good-practices').style.display = 'none';  
  document.getElementById('page-learning').style.display = 'none'; 
  document.getElementById('page-mention').style.display = 'block'; 
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});