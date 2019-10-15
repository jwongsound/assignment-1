const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue
    }

    
]

const content = document.getElementById('content') 

function createDiv(container, array){
    for (let index = 0; index < array.length; index++) {
        // coloring the cards
    const dc = document.createElement('div')
    dc.className = 'card'
    dc.style.backgroundColor = array[index].color
    container.appendChild(dc)
        // attaching the topics to card
    const topic = document.createElement('div')
    topic.className = 'topic'
    topic.textContent = array[index].topic
    dc.appendChild(topic)
        // attaching the title to cards
    const title = document.createElement('div')
    title.className = 'title'
    title.textContent = array[index].title
    dc.appendChild(title)
       //attaching the buy buttons
    const button = document.createElement('div')
    button.className = 'buy-button'
    button.textContent = 'Read for'+ ' ' + array[index].price
    dc.appendChild(button)
 }}


createDiv(content,data)



// Instructions
// Take the data above and display it as tiles on the page




