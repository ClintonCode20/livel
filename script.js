let btn = document.querySelector(".calcBtn")
let p1 = document.querySelector(".rof")
let p2 = document.querySelector(".spb")
let p3 = document.querySelector(".ycf")
let input = document.querySelector("input")
let container = document.querySelector(".calcContainer")
let resultContainer = document.querySelector(".resultContainer")




btn.addEventListener("click", simplify)

function simplify(e){

    if(input.value){


        let reduce_of_plastic = 1.8 * input.value
        let save_per_bottle = 150*input.value
        let carbon_footprint = 4.3*input.value

        p1.innerText = `Reduce of plastic:  ${reduce_of_plastic.toFixed(2)} kg`
        p2.innerText = `Save per bottle:  $${save_per_bottle}`
        p3.innerText = `Carbon footprint: ${carbon_footprint.toFixed(2)}kg`

        container.style.display = "none"
        resultContainer.style.display = "flex"
        // resultContainer.style.transition = "0.3s ease"




    }
    
    
}

setInterval(checkInput, 100)



function checkInput(){

    if(input.value){

        let numbers = /^[1-9]+$/
        if(input.value.match(numbers)){
            
            btn.style.opacity = "1"
            btn.disabled=false
            btn.style.cursor='pointer'
        }

        else{
            
            btn.style.opacity = "0.4"
            btn.disabled=true
            btn.style.cursor= "default"
        }



    }

    
    
}

