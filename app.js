const input = document.getElementById('input')
// console.log(input.value)
const output = document.getElementById('output')
function capital() {
    if (input.value == '') {
        output.innerText = ''
        let para = document.createElement('p')
        para.innerHTML = 'Please enter the prompt'
        para.style.color = 'red'
        output.appendChild(para)
    }
    else {
        output.innerText = ''
        let para = document.createElement('p')
        para.innerHTML = input.value
        para.classList.add('capital')
        // para.style.textTransform='uppercase'
        // para.style.color='black'
        output.appendChild(para)

    }
}

function lower() {
    if (input.value == '') {
        output.innerText = ''
        let para = document.createElement('p')
        para.innerHTML = 'Please enter the prompt'
        para.style.color = 'red'
        output.appendChild(para)
    }
    else {
        output.innerText = ''
        let para = document.createElement('p')
        para.innerHTML = input.value
        para.classList.add('lower')
        // para.style.textTransform='lowercase'
        // para.style.color='black'
        output.appendChild(para)

    }
}

function first() {
    if (input.value == '') {
        output.innerText = ''
        let para = document.createElement('p')
        para.innerHTML = 'Please enter the prompt'
        para.style.color = 'red'
        output.appendChild(para)
    }
    else {
        output.innerText = ''
        let para = document.createElement('p')
        para.innerHTML = input.value
        para.classList.add('first')
        // para.style.textTransform='capitalize'
        // para.style.color='black'
        output.appendChild(para)

    }
}

function bold() {
    if (input.value == '') {
        output.innerText = ''
        let para = document.createElement('p')
        para.innerHTML = 'Please enter the prompt'
        para.style.color = 'red'
        output.appendChild(para)
    }
    else {
        output.innerText = ''
        let para = document.createElement('p')
        para.innerHTML = input.value
        para.classList.add('bold')
        // para.style.textTransform='uppercase'
        // para.style.fontWeight='bolder'
        // para.style.color='black'
        output.appendChild(para)

    }
}

function italic() {
    if (input.value == '') {
        output.innerText = ''
        let para = document.createElement('p')
        para.innerHTML = 'Please enter the prompt'
        para.style.color = 'red'
        output.appendChild(para)
    }
    else {
        output.innerText = ''
        let para = document.createElement('p')
        para.innerHTML = input.value
        para.classList.add('italic')
        // para.style.textTransform='capitalize'
        // para.style.fontStyle='italic'
        // para.style.color='black'
        output.appendChild(para)

    }
}

function underline() {
    if (input.value == '') {
        output.innerText = ''
        let para = document.createElement('p')
        para.innerHTML = 'Please enter the prompt'
        para.style.color = 'red'
        output.appendChild(para)
    }
    else {
        output.innerText = ''
        let para = document.createElement('p')
        para.innerHTML = input.value
        para.classList.add('underline')
        // para.style.textTransform='uppercase'
        // para.style.textDecoration='underline'
        // para.style.color='black'
        output.appendChild(para)

    }
}