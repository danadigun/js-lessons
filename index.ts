// Arrays
const fruits = ["banana", "apple", "orange"]
const numbers = [1,2,4,6,4]

// Manipulating arrays
// 1. List all the elements in an array
for(const fruit in fruits){
    console.log(fruit);
}

for(const fruit of fruits){
    console.log(fruit)
}

// Another way to list an array
fruits.map(fruit => {
   console.log(fruit) 
})

// filter an array
const result = fruits.filter(fruit => fruit === "apple");

for(const item of result){
    console.log(item)
}