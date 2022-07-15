let projectBtn1 = document.querySelector('#project-btn1')
let paragraph1 = document.querySelector('#paragraph1')

let isShow = false

projectBtn1.addEventListener('click', function () {

    if (isShow) {
        paragraph1.style.visibility = 'hidden'
        isShow = false
        projectBtn1.innerHTML = 'Show Subtitle'
    } else {
        paragraph1.style.visibility = 'visible'
        isShow = true
        projectBtn1.innerHTML = 'Hide Subtitle'
    }

})


// project 2
let project2Content = document.querySelector('#project2-content')

let heroContent = document.createElement("div")
heroContent.setAttribute('class', 'hero-content text-center')
heroContent.className

let maxWmd = document.createElement('div')
maxWmd.className = 'max-w-md'
maxWmd.innerHTML = `
<h1 id="project-title2" class="text-5xl font-bold">Add content from the js file</h1>
<p id="paragraph2" class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
<button id="project-btn2" class="btn btn-primary">Show Subtitle</button>
`
heroContent.appendChild(maxWmd)
project2Content.appendChild(heroContent)


// project 3

let nameField = document.querySelector('#nameField')
let ul = document.querySelector('#nameList')
nameField.addEventListener('keypress', function(event){
    if(event.keyCode == 13){
        
        let name = event.target.value;
        console.log(name)
        ul.appendChild(createLi(name))
        
    }
})



function createLi(name){
    let li  = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = name
    return name;
}





