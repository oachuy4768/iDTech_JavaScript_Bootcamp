// TODO: Create 4-String variables to introduce develop your story.
// YOUR CODE GOES HERE
let greetings = "Welcome to my kingdom";
let name = "Iker";
let title = "King of the wizzards";
let worldName = "Canos";

// TODO: Create 3-String variables to set the time period of your story or discuss other number elements.
// YOUR CODE GOES HERE

let age = 278;
let year = 949;
let century = 10;

// TODO: Create 1-Array variable to show a collection of items your character might have.
// YOUR CODE GOES HERE

let weaponsUsed = ["Eye of insight","Celestial scroll","Solar pearl","Unalterable book"];
// TODO: Create 1-Boolean variable to demonstrate a true or false scenario.
// YOUR CODE GOES HERE

let hasFavWeapon = true;
// TODO: Print your story to the console.
// YOUR CODE GOES HERE

console.log(greetings + " misterious traveler, my name is " + name + ".");
console.log("I'm the " + title + ".");
console.log("We can live more time because of magic.");
console.log("For example, I'm "  + age  + " years old.");
console.log("In this country you are in year " + year + ", the " + century + "th century." + "\n");
console.log("Do you have any questions?");
console.log("Me: Do you have a favourite weapon?");
let weaponLenght= weaponsUsed.length;
let randomWeapon= Math.floor(Math.random() * weaponLenght); // aleatory weapon
console.log("Iker: " + hasFavWeapon + ", my favourite weapon is the " + weaponsUsed[randomWeapon] + "." + "\n");
console.log("You are free to stay here and explore my kingdom and return to your world after your tour is over!")
