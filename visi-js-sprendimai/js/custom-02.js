/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/
 let i=10
 while (i > 0){
    console.log(i)
    i--
 }



/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/
for(let i = 10; i > 0; i--){
    console.log(i)
}



/*
Užduotis 3
Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

Štai kaip atrodys pirmos dvi eilutės:

Po 1 mėnesio(-ių) bus 16 avių!
Po 2 mėnesio(-ių) bus 64 avių!
*/

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

while(numMenuo <= kiekMenSpausdinti){
    numAvys *= 4
    console.log("Po " + numMenuo + " mėnesio(-ių) bus " + numAvys + " avių!")
    numMenuo++
}

/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/

numAvys = 4
numMenuo = 1
kiekMenSpausdinti = 12

for(; numMenuo <= kiekMenSpausdinti; numMenuo++){
    numAvys *= 4
    console.log("Po " + numMenuo + " mėnesio(-ių) bus " + numAvys + " avių!")
}

/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
*/

let currentGen = 1
let totalGen = 19
let totalMW = 0

for(currentGen; currentGen <= totalGen; currentGen++){
    while(currentGen < 5){
        totalMW += 62
        console.log("Generatorius #" + currentGen + " ijungtas, pridejo 62 MW, viso generuojama " + totalMW + " MW")
        currentGen++
    }
    totalMW += 124
    console.log("Generatorius #" + currentGen + " ijungtas, pridejo 124 MW, viso generuojama " + totalMW + " MW")
}
/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0;
*/

totalGen = 19;
totalMW = 0;

for(let i = 1; i <= totalGen; i++){
    if(i % 2 == 0){
        if (i < 5){
            totalMW += 62
            console.log("Generatorius #" + i + " ijungtas, pridejo 62 MW, viso generuojama " + totalMW + " MW")
        } else{
            totalMW += 124
            console.log("Generatorius #" + i + " ijungtas, pridejo 124 MW, viso generuojama " + totalMW + " MW")
        }
    } else{
        console.log("Generatorius #" + i + " isjungtas")
    }
}


/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
}
*/

let num=10;
while (num > 0) {
    if(num % 2 == 0){
        console.log(num);

    }
    num--;
}




/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/

function maxOf2(a,b){
    if(a >= b){
        console.log(a)
    } else {
        console.log(b)
    }
}
maxOf2(13,7)
/*
Užduotis 9
Šiuo metu Lietuvoje yra 26 laipsniai pagal Farenheitą,
naudodamiesi JavaScript apskaičiuokite kokia temperatūra yra pagal Celsijų.

Būtinos sąlygos:
- Turime "string" kintamąjį su tekstu "Lietuvoje šiuo metu laipsnių pagal Celsijų"
- Negalima rašyti jokio papildomo teksto
- Temperatūra pagal Celsijų turi būti nurodyta vienas skaičius po kablelio
- Temperatūra turi būti konvertuojama iš Farenheito į Celsijų
- Rezultatą išvesti konsolėje

Rezultatas:
Lietuvoje šiuo metu -3.3 laipsnių pagal Celsijų
*/
/* mano var
let far = 26
let cel = (far - 32) * 5/9 
console.log('Lietuvoje šiuo metu ' + ((Math.round((cel+Number.EPSILON)*10)/10)) +' '+ 'laipsnių pagal Celsijų ')*/ 

let tekstas = "Lietuvoje šiuo metu laipsnių pagal Celsijų"
let oras = (26 -32) * 0.5556
console.log(`${tekstas.substr(0,19)} ${oras.toFixed(1)}${tekstas.substr(19)}`)
/*
Užduotis 10
Turime masyvą, kuriame yra trumpos tekstinės eilutės (pateikta apačioje). Mūsų užduotis:
1. Sukurti funkciją, kuri rastų ilgiausią žodį tekstinėje eilutėje
2. Panaudojant šią funkciją išvesti kiekvienos eilutės ilgiausią žodį (rezultatas turi būti viena tekstinė eilutė)
3. Išvedant žodžius panaudoti tarpą tarp žodžių
4. Išvedimas turi būti dinamiškas (pasikeitus masyve esančių eilučių skaičiui - vis tiek gautume kiekvienos eilutės ilgiausią žodį)
5. Rezultatą išvesti konsolėje

// Masyvas
let posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];
*/

let posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"], 
d,
result = ""

for(d = 0; d < posts.length; d++){
    result += longestWord(posts [d]) + " "
}

console.log(result)

function longestWord(string) {
    let stringArray = string.split(" ")
    i
    let answer = ""

    for(i = 0; i < stringArray.length; i++){
        if(stringArray[i].length > answer.length){
            answer = stringArray[i]
        }
    }
    return answer
}


/*
Užduotis 11
Įmonė nori įsigyti 2 baltus arba juodus tos pačios rūšies kompiuterius (būtinai vienos spalvos), kurių bendra kaina neviršytų 1600 €. Sugeneruokite sąrašą kompiuterių, kuriuos galite pasiūlyti.

Masyvas su objektais:

let pcs = [
{ "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
{ "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
{ "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
{ "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
];

Būtinos sąlygos:
- Panaudokite bent po vieną ciklą ir sąlyginį sakinį,
- Rezultatas išvedamas konsolėje,
- Line break naudokite "\n".

Rezultatas turėtų atrodyti taip:

Galimi variantai:

Modelis: hp monstras
Kaina: 1600
Spalvos: juoda

Modelis: dell apskritimas
Kaina: 1394
Spalvos: balta

Modelis: acer peizažas
Kaina: 1240
Spalvos: balta ir juoda
*/

let pcs = [
    { "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
    { "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
    { "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
    { "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
    { "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
    { "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
    { "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
];
i, biudzetas = 1600;

console.log("Galimi variantai:")

for (i = 0; i < pcs.length; i++){
    if (((pcs[i].spalva.balta >= 2) || (pcs[i].spalva.juoda >=2)) && ((pcs[i].kaina * 2) <= biudzetas)) {
        let spalvos = Object.keys(pcs[i].spalva), 
        spalva = ""

        for( let j = 0; j < spalvos.length; j++){
            if (((spalvos[j] === "juoda") && (pcs[i].spalva.juoda >= 2)) || ((spalvos[j] === "balta") && (pcs[i].spalva.balta >= 2))) {
                if (spalva.length > 0){
                    spalva += " ir " + spalvos[j]
                } else {
                    spalva = spalvos[j]
                }
            }
        }
        console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + (pcs[i].kaina * 2) + "\n" + "Spalvos: " + spalva)
    }
    
}