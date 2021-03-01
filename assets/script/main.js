


//Get the button
var mybutton = document.getElementById("arrow");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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
        document.getElementById('change-dys').style.fontFamily = 'OpenDyslexic';
        count = 1;
        
    } else {
        document.getElementById('change-dys').style.fontFamily = 'Basic';
        count = 0;
    }
    
});
