let btn = document.querySelector('#next');
let output = document.querySelector('h1');

//Array contains phrases in order starting at 0 
let phrases = []
phrases.push("Warning")
phrases.push("Kellys duck")
phrases.push("One little duck")
phrases.push("Cup of tea")
phrases.push("Knock at the door")
phrases.push("Man alive")
phrases.push("Tom Mix")
phrases.push("Lucky seven")
phrases.push("Garden gate")
phrases.push("Doctors orders")
phrases.push("Boris Johnsons den")
phrases.push("Legs eleven")
phrases.push("One dozen")
phrases.push("Unlucky for some")
phrases.push("Valentines Day")
phrases.push("Young and Keen")
phrases.push("Sweet 16 and never been kissed")
phrases.push("Dancing Queen")
phrases.push("Coming of age")
phrases.push("Goodbye teens")
phrases.push("One score")
phrases.push("Royal salute")
phrases.push("Two little ducks")
phrases.push("Thee and me")
phrases.push("Two dozen")
phrases.push("Duck and dive")
phrases.push("Pick and mix")
phrases.push("Gateway to heaven")
phrases.push("In a state")
phrases.push("Rise and shine")
phrases.push("Dirty Gertie")
phrases.push("Get up and run")
phrases.push("Buckle my shoe")
phrases.push("All the threes")
phrases.push("Ask for more")
phrases.push("Jump and jive")
phrases.push("Three dozen")
phrases.push("More than eleven")
phrases.push("Christmas cake")
phrases.push("39 steps")
phrases.push("Life begins")
phrases.push("Time for fun")
phrases.push("Winnie the Pooh")
phrases.push("Down on your knees")
phrases.push("Droopy drawers")
phrases.push("Halfway there")
phrases.push("Up to tricks")
phrases.push("Four and seven")
phrases.push("Four dozen ")
phrases.push("PC")
phrases.push("Half a century")
phrases.push("Tweak of the thumb")
phrases.push("Danny La Rue")
phrases.push("Here comes herbie")
phrases.push("Clean the floor")
phrases.push("Snakes alive")
phrases.push("Shotts Bus")
phrases.push("Heinz varities")
phrases.push("Make them wait")
phrases.push("Brighton Line")
phrases.push("Five dozen")
phrases.push("Bakers bun")
phrases.push("Turn the screw")
phrases.push("Tickle me 63")
phrases.push("Red raw")
phrases.push("Old age pension")
phrases.push("Clickety click")
phrases.push("Stairway to heaven")
phrases.push("Saving Grace")
phrases.push("Favourite of mine")
phrases.push("Three score and ten")
phrases.push("Bang on the drum")
phrases.push("Six dozen")
phrases.push("Queen bee")
phrases.push("Hit the floor")
phrases.push("Strive and strive")
phrases.push("Trombones")
phrases.push("Sunset strip")
phrases.push("39 more steps")
phrases.push("One more time")
phrases.push("Eight and blank")
phrases.push("Stop and run")
phrases.push("Straight on through")
phrases.push("Time for tea")
phrases.push("Seven dozen")
phrases.push("Staying alive")
phrases.push("Between the sticks")
phrases.push("Torquay in Devon")
phrases.push("Two fat ladies")
phrases.push("Nearly there")
phrases.push("Top of the shop")

//Function that generates random numbers
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

//Function that creates array of numbers
function createArrayOfNumbers(start, end){
    let myArray = [];

    for (let i = start; i<= end; i++) {
        myArray.push(i);
    }

    return myArray;
}

//There are 90 Bingo Balls
let numbersArray = createArrayOfNumbers(1,90);

//Console log to check the output
console.log(numbersArray);


//Remove number from array using splice
btn.addEventListener('click', () =>{
    if (numbersArray.length == 0){
        output.innerText = "Game Over";
        return;
    }
let randomIndex = getRandomNumber(0,numbersArray.length-1);
let randomNumber= numbersArray[randomIndex];
numbersArray.splice(randomIndex, 1);
output.innerText = randomNumber;
speak ("number " + randomNumber + phrases[randomNumber])
speak()
});

function speak(words) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(words));
  }
 
  

