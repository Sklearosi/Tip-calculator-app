let bill = document.getElementById("bill-input")
let numbersPer = document.getElementById("numbers-per")
let numbers = document.getElementById("numbers")
let person = document.getElementById("people-input")
let five = document.getElementById("five")
let ten= document.getElementById("ten")
let fifteen = document.getElementById("fifteen")
let twentyfive = document.getElementById("twentyfive")
let fifty = document.getElementById("fifty")
let custom = document.getElementById("custom")
let reset = document.getElementById("reset")
let z = 0



five.addEventListener("click", () => {
    five.style.backgroundColor = "#26C2AE"
    ten.style.backgroundColor = "#00474B"
    fifteen.style.backgroundColor = "#00474B"
    twentyfive.style.backgroundColor = "#00474B"
    fifty.style.backgroundColor = "#00474B"
    z = 1


    if(bill.value > 0) {
        numbers.innerText = "$" + (bill.value * 5 / 100)
    }

    if(bill.value > 0 && person.value > 0) {
        numbers.innerText = "$" + (bill.value * 5 / 100)
        numbersPer.innerText = "$" + (bill.value * 5 / 100 / person.value)
    }
    custom.style.border = "none"
    custom.style.height = "50px"

})

ten.addEventListener("click", () => {
    ten.style.backgroundColor = "#26C2AE"
    five.style.backgroundColor = "#00474B"
    fifteen.style.backgroundColor = "#00474B"
    twentyfive.style.backgroundColor = "#00474B"
    fifty.style.backgroundColor = "#00474B"
    z = 2


    if(bill.value > 0) {
        numbers.innerText = "$" + (bill.value * 10 / 100)
    }

    if(bill.value > 0 && person.value > 0) {
        numbers.innerText = "$" + (bill.value * 10 / 100)
        numbersPer.innerText = "$" + (bill.value * 10 / 100 / person.value)
    }
    custom.style.border = "none"
    custom.style.height = "50px"
})

fifteen.addEventListener("click", () => {
    fifteen.style.backgroundColor = "#26C2AE"
    ten.style.backgroundColor = "#00474B"
    five.style.backgroundColor = "#00474B"
    twentyfive.style.backgroundColor = "#00474B"
    fifty.style.backgroundColor = "#00474B"
    z = 3

    if(bill.value > 0) {
        numbers.innerText = "$" + (bill.value * 15 / 100)
    }

    if(bill.value > 0 && person.value > 0) {
        numbers.innerText = "$" + (bill.value * 15 / 100)
        numbersPer.innerText = "$" + (bill.value * 15 / 100 / person.value)
    }
    custom.style.border = "none"
    custom.style.height = "50px"
})

twentyfive.addEventListener("click", () => {
    twentyfive.style.backgroundColor = "#26C2AE"
    five.style.backgroundColor = "#00474B"
    fifteen.style.backgroundColor = "#00474B"
    fifty.style.backgroundColor = "#00474B"
    ten.style.backgroundColor = "#00474B"
    z = 4

    if(bill.value > 0) {
        numbers.innerText = "$" + (bill.value * 25 / 100)
    }

    if(bill.value > 0 && person.value > 0) {
        numbers.innerText = "$" + (bill.value * 25 / 100)
        numbersPer.innerText = "$" + (bill.value * 25 / 100 / person.value)
    }
    custom.style.border = "none"
    custom.style.height = "50px"
})

fifty.addEventListener("click", () => {
    fifty.style.backgroundColor = "#26C2AE"
    five.style.backgroundColor = "#00474B"
    fifteen.style.backgroundColor = "#00474B"
    twentyfive.style.backgroundColor = "#00474B"
    ten.style.backgroundColor = "#00474B"
    z = 5

    if(bill.value > 0) {
        numbers.innerText = "$" + (bill.value * 50 / 100)
    }

    if(bill.value > 0 && person.value > 0) {
        numbers.innerText = "$" + (bill.value * 50 / 100)
        numbersPer.innerText = "$" + (bill.value * 50 / 100 / person.value)
    }

    custom.style.border = "none"
    custom.style.height = "50px"
})


bill.addEventListener("input", () => {
    if ( z === 1 && person.value > 0 && bill.value > 0) {
        numbers.innerText = "$" + (bill.value * 5 / 100)
    } else if(z === 2 && person.value > 0 && bill.value > 0) {
        numbers.innerText = "$" + (bill.value * 10 / 100)
    } else if(z === 3 && person.value > 0 && bill.value > 0) {
        numbers.innerText = "$" + (bill.value * 15 / 100)
    } else if(z === 4 && person.value > 0 && bill.value > 0) {
        numbers.innerText = "$" + (bill.value * 25 / 100)
    } else if(z === 5 && person.value > 0 && bill.value > 0) {
        numbers.innerText = "$" + (bill.value * 50 / 100)
    } else if (z === 6 && person.value > 0 && bill.value > 0) {
        numbers.innerText = "$" + (bill.value * custom.value / 100)
    }

    if ( z === 1 && person.value > 0 && bill.value > 0) {
        numbersPer.innerText = "$" + (bill.value * 5 / 100 / person.value)
    } else if(z === 2 && person.value > 0 && bill.value > 0) {
        numbersPer.innerText = "$" + (bill.value * 10 / 100 / person.value)
    } else if(z === 3 && person.value > 0 && bill.value > 0) {
        numbersPer.innerText = "$" + (bill.value * 15 / 100 / person.value)
    } else if(z === 4 && person.value > 0 && bill.value > 0) {
        numbersPer.innerText = "$" + (bill.value * 25 / 100 / person.value)
    } else if(z === 5 && person.value > 0 && bill.value > 0) {
        numbersPer.innerText = "$" + (bill.value * 50 / 100 / person.value)
    } else if(z === 6 && person.value > 0 && bill.value > 0) {
        numbersPer.innerText = "$" + (bill.value * custom.value / 100 / person.value)
    } 

    

})

person.addEventListener("input", () => {

   
   if ( z === 1 && person.value > 0 && bill.value > 0 ) {
        numbersPer.innerText = "$" + (bill.value * 5 / 100 / person.value)
    } else if(z === 2 && person.value > 0 && bill.value > 0) {
        numbersPer.innerText = "$" + (bill.value * 10 / 100 / person.value)
    } else if(z === 3 && person.value > 0 && bill.value > 0) {
        numbersPer.innerText = "$" + (bill.value * 15 / 100 / person.value)
    } else if(z === 4 && person.value > 0 && bill.value > 0) {
        numbersPer.innerText = "$" + (bill.value * 25 / 100 / person.value)
    } else if(z === 5 && person.value > 0 && bill.value > 0) {
        numbersPer.innerText = "$" + (bill.value * 50 / 100 / person.value)
    } else if(z === 6 && person.value > 0 && bill.value > 0) {
        numbersPer.innerText = "$" + (bill.value * custom.value / 100 / person.value)
    } 


    
  
    
    
})





custom.addEventListener("click", () => {
    custom.style.border = "2px solid #26C2AE"
    custom.style.height = "45px"
    five.style.backgroundColor = "#00474B"
    ten.style.backgroundColor = "#00474B"
    fifteen.style.backgroundColor = "#00474B"
    twentyfive.style.backgroundColor = "#00474B"
    fifty.style.backgroundColor = "#00474B"
    z = 6

    if(bill.value > 0) {
        numbers.innerText = "$" + (bill.value * custom.value / 100)
    }

    if(bill.value > 0 && person.value > 0) {
        numbers.innerText = "$" + (bill.value * custom.value  / 100)
        numbersPer.innerText = "$" + (bill.value * custom.value  / 100 / person.value)
    }

})

custom.addEventListener("input", () => {
    if(bill.value > 0) {
        numbers.innerText = "$" + (bill.value * custom.value / 100)
    }

    if(bill.value > 0 && person.value > 0) {
        numbersPer.innerText = "$" + (bill.value * custom.value / 100 / person.value)

    }

})


reset.addEventListener("click", () => {
    bill.value = null
    person.value = null
    custom.value = null
    five.style.backgroundColor = "#00474B"
    ten.style.backgroundColor = "#00474B"
    fifteen.style.backgroundColor = "#00474B"
    twentyfive.style.backgroundColor = "#00474B"
    fifty.style.backgroundColor = "#00474B"
    custom.style.border = "none"
    custom.style.height = "50px"
    numbers.innerText = "$0.00"
    numbersPer.innerText = "$0.00"
}) 












