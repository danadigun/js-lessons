// Arrays
const fruits = ["banana", "apple", "orange"]
const numbers = [1,2,4,6,4]

// Manipulating arrays
// 1. List all the elements in an array
for(const fruit in fruits){
    console.log(fruit);
}


// Data Sructure types
/*
Arrays --  It is a collection of data. (collection is a group of similar items)
Strings -- It is a group of characters.
Sets -- It is a collection of key value pairs.
Objects*
*/


/*

   
    </Select>
  </FormControl>        
                
                
        </Box>


      </Stack>

  );
}*/
// Todays notes:

/*
Clients -- Server -- database.
// Scafolding --setting t he foundation.

Scripting::
React {framework}
Benefit:
Create different form 
Always name the file .jss
Stacks helps make files in roles.

MUI
Benefit:
It has layout

To type text in MuI , we use a text cleed "typography"
*/

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

