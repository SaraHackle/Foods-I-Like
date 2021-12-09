const foods = ["pancakes", "fish", "pickles", "pan fried dumplings"]
 const foodsILike = foods.map(food => {
     if (food === "pickles") {
        console.log(`I don't like to eat ${food}`)
     } else {
      console.log (`I like to eat ${food}`)
     }
    
})
