
## Intro to Data structures
Data structures is are ways that data is stored in computing.
Different ways to store and represent the data


## Data Sructure types
Arrays --  It is a collection of data. (collection is a group of similar items)
Strings -- It is a group of characters.
Sets -- It is a collection of key value pairs.
Objects*

```js
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
```