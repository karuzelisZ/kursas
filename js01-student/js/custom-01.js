/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

let vardas = 'Jonas'
let pavarde = 'Petraitis'
let dob = 1997
let date = new Date().getFullYear();
console.log('Aš esu ' + vardas +' '+ pavarde + '. ' + 'Man yra ' + (date-dob) +' '+ 'metai(-ų)')


/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
let p = Math.random() * 5
let a = Math.random() * 5
if (p > a) {
    p/a
    console.log(Math.round((p + Number.EPSILON) *100)/100)
} else {
    a/p
    console.log(Math.round((a + Number.EPSILON) *100)/100)
}


/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
let pi = Math.floor(Math.random() * 26) 
let an = Math.floor(Math.random() * 26)
let tr = Math.floor(Math.random() * 26)
if (an > pi < tr){
    console.log(pi);
}
else if (pi > an < tr){
    console.log(an);
} else {
console.log(tr);}


/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = (Math.random() * 11) +1
let kr2 = (Math.random() * 11) +1
let kr3 = (Math.random() * 11) +1
if ((kr2+kr3)>kr1) {
    console.log('galima sudaryti trikampį')
} 
else if ((kr1+kr3)>kr2) {
    console.log('galima sudaryti trikampį')
}
else if ((kr1+kr2)>kr3) {
    console.log('galima sudaryti trikampį')
}
else {
    console.log('negalima sudaryti trikampį')
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let pir = Math.random() * 3
let ant = Math.random() * 3
let tre = Math.random() * 3
let ket = Math.random() * 3
if (an > pi < tr){
    console.log(pi);
}
else if (pi > an < tr){
    console.log(an);
} 
else if (pi > tr < an){
console.log(tr);}
else  {
    console.log(tr);
}

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
let v = Math.floor(Math.random() * 21) - 10

if (v < 0){
    console.log('['+ v + ']');
}
let x = Math.floor(Math.random() * 21) - 10
if (x = 0){
    console.log('('+ x + ')');
}
let c = Math.floor(Math.random() * 21) - 10
if  (c > 0){
    console.log('{'+ c + '}');
}




/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/




/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/



/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
let de1 = Math.floor(Math.random() * 9000 + 1000)
let de2 = Math.floor(Math.random() * 9000 + 1000)
let de3 = Math.floor(Math.random() * 9000 + 1000)
let de4 = Math.floor(Math.random() * 9000 + 1000)
let de5 = Math.floor(Math.random() * 9000 + 1000)
let de6 = Math.floor(Math.random() * 9000 + 1000)



console.log(de1,de2,de3,de4,de5,de6)