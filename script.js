// 1. create an index.html file and a scipt.js file
// 2. link the html file to the javascript file using <script src="script.js" defer></script>
// 3. assign variables; create strings for the numbers 10 , 40, 39 - each using a different arithmetic operation
// 4. using the console.log command, create template literals to add variables to the strings to receive desired numerical output
// 5. use the alert command with template literals to display message on browser without hardcoding exact numbers in order to achieve desired numerical output

// HERE BELOW LIES THE VARIABLES AND STRINGS FOR DESIRED NUMERICAL OUTPUTS
let num1 = 8 + 2;
let num2 = 80 / 2;
let num3 = 40 - 1;
// HERE BELOW LIES THE console.log COMMAN USING TEMPLATE LITERALS TO ACHIEVE THE DESIRED NUMERICAL OUTPUTS USING JAVASCTIPT LOGIC
      console.log(`The combination of the lock is ${num1} - ${num2} - ${num3}`);
// HERE BELOW LIES THE ALERT COMMAND USING TEMPLATE LITERALS TO DISPLAY ON THE BROWSER A MESSAGE WITH THE VAULT CODE, WITHOUT HARDCOING THE EXACT NUMERICAL VALUES
      alert(`You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${num1}- ${num2}- ${num3}`);