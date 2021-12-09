// const square = function(x){
//     return x * x
// }


// arrow function 1:
// const square = (x) =>{
//     return x * x
// }

//arrow function 1 but even shorter
// const square = (x) => x * x

// //how arrow functions work in context of method (arrow functions as properties of an object)

// console.log(square(2))

const event = {
    name: 'Birthday Party',
    guestList: ["Reem", "Rami", "Hala"],
    printGuestList(){
        console.log("Guest List For " + this.name)
        this.guestList.forEach((guest) => { //arrow functions don't bind their own this values they access the this value in the context in which they were created
            console.log(guest + " is attending " + this.name)
        })
    } 
}

event.printGuestList()