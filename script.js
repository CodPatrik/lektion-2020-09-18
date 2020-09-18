/*
1: Skapa flera variabler som alla innehåller en sträng som är namnet på en frukt

2 :Skapa en lista med alla frukter

3: Lägg till ytterligare en frunkt i listan.

4: Visa listan i konsollen

4: Gör en funktion som letar igenom listan och returnerar true om den hittar sökt frukt.

5: Skriv ut resultatet i konsollen.

*/

// steg 1
let frukt1 ="Äpple";
let frukt2 ="Päron";
let frukt3 ="Apelsin";
let frukt4 ="Plommon";

// steg 2
let fruitList = [frukt1,frukt2,frukt3,frukt4];

// steg 3
fruitList.push("Banan");


// nollställa listan
//fruitList.length = 0;

/*
let fruitList2 = [];

fruitList2.push("Äpple");
fruitList2.push("Päron");
fruitList2.push("Apelsin");
fruitList2.push("Plomman");
fruitList2.push("Banan");
*/

// steg 4
console.log(fruitList);


function findFruit(fruit){
    let found = false;

    for (let i = 0; i < fruitList.length; i++) {
        if(fruitList[i]==fruit){
            found = true;
            break;
        }
    }

    return found;
}

findFruit("Apelsin");

// skriva ut listan

let message="Detta är alla frukter i listan \n";

fruitList.forEach(fruit =>{
    message+="det finns en "+fruit+ " och en \n";
})


console.log(message);
