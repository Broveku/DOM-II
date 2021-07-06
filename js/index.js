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


const newFooter = document.querySelector('footer')
    
newFooter.addEventListener('click', function(event){
        event.target.style.backgroundColor = 'black'
})


document.addEventListener('keydown' , function(event){
    if (event.keyCode === 84){
        event.target.style.backgroundColor = 'orange'
    }else{
        event.target.style.backgroundColor = ''
    }
})

const letsGo = document.querySelector('.text-content:nth-of-type(1) h2')

const adventClick = document.querySelector('text-content:nth-of-type(2) h2')

letsGo.addEventListener('click', function(){
    document.querySelector('.text-content:nth-of-type(2) h2').scrollIntoView()
})

adventClick.addEventListener('click' , function(){
    document.querySelector('.content-pick').scrollIntoView()
})