
//menu
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