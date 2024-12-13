// const EventEmitter = require("events")

// const emitter = new EventEmitter();

// emitter.on( 'order-pizza', ( size, topping ) =>{
//     console.log( `Order received! Baking a ${size} pizza with ${topping} topping.`)
// })


// emitter.on( 'order-pizza', (size) => {
//     if( size == 'large' ){
//         console.log( `Complimentary cold drink.`)
//     }
    
// })

// emitter.emit('order-pizza', 'small', 'mushroom')

const PizzaShop = require("./pizza-shop")
const DrinkMachine = require("./drink-machine")

const pizzaShop = new PizzaShop()
const drinkMachine = new DrinkMachine()

pizzaShop.on( 'order', ( size, topping) => {
    console.log( `Order received! Baking a ${size} pizza with ${topping} topping.`)
    drinkMachine.serveDrink(size)
})

pizzaShop.order( "small", "mushroom")
pizzaShop.displayOrderNumber();