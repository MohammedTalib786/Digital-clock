// Clock Functionality

let date, clock, seconds, minutes, hours, m;
const time = (() => {
    setInterval(() => {
        date = new Date();
        clock = document.getElementById('clock');
        seconds = date.getSeconds()
        minutes = date.getMinutes()
        hours = date.getHours()

        // 12 hours am pm functionality
        // hours = date.getHours() % 12 || 12
        // m = hours >= 13 ? 'PM' : 'AM'

        clock.innerHTML = `
    ${hours < 10 ? '0' + hours : '' + hours} : ${minutes < 10 ? '0' + minutes : '' + minutes} : ${seconds < 10 ? '0' + seconds : '' + seconds}
    `
    }, 1000)
})()


// Dark ModeFunctionality 

let btn = document.getElementById('btn')

const DarkMode = (e) => {

    let title = document.getElementById('title')
    let Clock = document.getElementById('clock')
    let faMoon = document.getElementsByClassName('fa-moon')[0]

    e.preventDefault()
    if (document.body.style.backgroundColor != 'rgb(54, 54, 54)') { //if not dark 
        document.body.style.backgroundColor = 'rgb(54, 54, 54)' //then do this
        title.style.color = 'white'
        Clock.style.color = 'white'

        faMoon.style.backgroundColor = 'white'
        faMoon.style.color = 'black'

    }
    else {
        document.body.style.backgroundColor = 'white'   //if dark then do this
        title.style.color = 'black'
        Clock.style.color = 'black'

        faMoon.style.backgroundColor = 'black'
        faMoon.style.color = 'white'
    }

}
btn.addEventListener('click', DarkMode)
