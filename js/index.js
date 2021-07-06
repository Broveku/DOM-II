// Your code goes here
const busTitle = document.querySelector('h1.logo-heading')

busTitle.addEventListener('mouseover',function(event){
    event.target.style.color = 'orange'
    setTimeout(function(){
        event.target.style.color = ''
    }, 500)
}, false)


const welcomeTitle = document.querySelector('.intro h2')

welcomeTitle.addEventListener('click', function(event){
    event.target.style.color = 'red'
})

const firstP = document.querySelector('.intro p')

firstP.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'green'
})

const navBar = document.querySelector('nav a ')

navBar.addEventListener('dblclick' , function(event){
    event.target.style.color = 'yellow'

})


const newFooter = document.querySelector('.footer')
    
newFooter.addEventListener('load', function(event){
        event.target.style.backgroundColor = 'black'
})


const keyPressDown = document.querySelector('.content-destination h2')

keyPressDown.addEventListener('keydown' , function(event){
    if (event.keyCode === 84){
        event.target.style.color = 'orange'
    }
})