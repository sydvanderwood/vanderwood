let pageNumber = 0

//content for pages 
const pages = [
  { copy: "A web developer based in British Columbia", background: "#edc7a9", circle: "#3e78ed" },
  { copy: "Owner, designer and developer at Twin Ferns", background:"#3e78ed", circle: "#e34a47" },
  { copy: "Available for freelance work", background: "#d3c7f3", circle: "#f7fe00" },
  { copy: `Touch base on <a href="https://instagram.com/twinferns">Instagram!</a>`, background: '#f7fe00', circle: "#b472e6" }
]


//pick the relevant tags
const nextTag = document.querySelector("footer img.next")
const previousTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")
const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")

//pick a random slide

const random = function () {
  pageNumber = Math.floor( Math.random() * pages.length )
  
  updateSection()
}

//next function to increase page number
const next = function () {
  pageNumber = pageNumber + 1
  
  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }
  
  updateSection()
}

const previous = function () {
  pageNumber = pageNumber - 1
  
  if (pageNumber < 0 ) {
      pageNumber = page.length - 1
      }
  
  updateSection()
  
}

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

nextTag.addEventListener("click", function () {
  next()
 })

previousTag.addEventListener("click", function () {
  previous()
})

//on click of randomTag, run this
randomTag.addEventListener("click", function () {
  random()
})

//when user presses key check for arrow left or right 
// and do next or previous correctly
document.addEventListener("keyup", function (event) {
  console.log(event)
  
  //if key being pressed is arrow right
  if(event.key == "ArrowRight") {
     next()
     }
  
  //if key being pressed is arrow left
  if(event.key == "ArrowLef") {
    previous()
  }
})
