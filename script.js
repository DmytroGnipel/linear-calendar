const body = document.querySelector('body')
//add paragraph, where year and month will be render
const para = document.createElement('p')
body.appendChild(para)
//add container with an links
const conteiner = document.createElement('div')
const link1 = document.createElement('a')
const link2 = document.createElement('a')
link1.innerHTML = 'previous month';
link2.innerHTML = 'next month'
link1.href = '#'
link2.href = '#'
conteiner.appendChild(link1)
conteiner.appendChild(link2)
body.appendChild(conteiner)
//add unordered list with dates
let ul = document.createElement('ul')
body.appendChild(ul)

let month = new Date().getMonth()
let namesOfMonths = ['January', 'February', 'March', //for rendering months names
 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December']


let calendar = (parametr) => {
let daysInMonth = new Date(new Date().getFullYear(), parametr + 1, 0).getDate()
//get li with dates and include them i our ul
for (i = 1; i <= daysInMonth; i++) {
    let li = document.createElement('li')
    li.textContent = new Date(new Date().getFullYear(), parametr, i).getDate()
    if (+li.textContent === new Date().getDate() && parametr === new Date().getMonth())
    li.style.backgroundColor = 'yellow'//highlight current data in calendar
    ul.appendChild(li)
}
para.textContent = `${new Date(new Date().getFullYear(), parametr).getFullYear()} 
${namesOfMonths[new Date(new Date().getFullYear(), parametr).getMonth()]}`
}

calendar(month) //call calendar when page have load and without pressing links

//then call one if links press
let a = document.querySelectorAll('a')
for (elem of a) {
    elem.addEventListener('click', function() {//removing
        let li = document.querySelectorAll('li')//old version of calendar when links clicked
        for (let elem of li) elem.remove()
        if (this.innerHTML === 'previous month') {//part of cod for going ahead
        month -= 1
        calendar(month)
        }
        else if (this.innerHTML === 'next month') {//part of cod for going ahead
        month += 1
        calendar(month)  
         }
    })
}