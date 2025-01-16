// function to reverse a string

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  console.log(reverseString("hyperisland")); // "dnalsirepyh"
  
  
  
  
  // Function to reverse a number
  function reverseNumber(num) {
    const reversedString = num.toString().split("").reverse().join("");
    return parseInt(reversedString) * Math.sign(num);
  }
  console.log(reverseNumber(987654)); // "456789"
  
  
  
  
  // Destructuring an object to get name and age
  const person = {
    name: "John",
    info: {
      age: 30,
      city: "New York",
      job: "Developer",
    },
  };
  
  const { 
    name, info: { age },
  } = person;
  
  console.log(age); // 30
  
  
  
  // Destructuring an array to get first, second, and the rest of the elements
  const thisArray = ["apple", "banana", "cherry", "dates", "elderberry", "fig"];
  const [firstItem, secondItem, ...rest] = thisArray;
  
  console.log(firstItem); // "apple"
  console.log(secondItem); // "banana"
  console.log(rest); // "cherry", "dates", "elderberry", "fig"
  
  
  
  
  // Optional: Check if a string is a palindrome
  function isPalindrome(str) {
    const sanitized = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = sanitized.split("").reverse().join("");
    return sanitized === reversed;
  }