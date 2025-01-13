// TODO: Set item in localStorage
localStorage.setItem("firstName","Swathi");

// TODO: Get item from localStorage
console.log(localStorage.getItem("firstName"));

// TODO: Remove item from localStorage
localStorage.removeItem("firstName");

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
const user2 = { 
    name: "Wanda",
    age: 25,
 };
localStorage.setItem("User2", JSON.stringify(user2));

// TODO: Get an object from localStorage
const retrievedUser2 = JSON.parse(localStorage.getItem("User2") || '{}');

// TODO: Set item in sessionStorage
sessionStorage.setItem("lastName", "Menon");

// TODO: Get item from sessionStorage
console.log(sessionStorage.getItem("lastName"));

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("lastName");

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
const user3 = { 
    name: "Vision",
    age: 30,
};
sessionStorage.setItem("User3", JSON.stringify(user3));

// TODO: Get an object from sessionStorage
const retrievedUser3 = JSON.parse(sessionStorage.getItem("User3") || '{}');
