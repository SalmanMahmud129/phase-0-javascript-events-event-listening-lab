// function addingEventListener() {
//     const input = document.getElementById('button')
//     function clickAlert(){
//         alert('I was clicked!')
//     }
    
//     input.addEventListener('click', clickAlert)
// }


function addingEventListener(){
    const input = document.getElementById('button')

    const eventHandler = input.addEventListener('click', (e) =>{ alert('I was clicked')})

    return eventHandler
}

// const input = document.getElementById('button')

// input.addEventListener('click', (e) =>alert('I was clicked'))

// console.log(input)

addingEventListener()
