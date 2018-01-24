var a = 10, b = "5a";
var wynik = a + b;

//alert(a + b);

//alert(a + b);
//alert(wynik);

console.log("tekst");
console.log(a);  //10
console.log(typeof(a));  // sprawdzenie typu danych
console.log(typeof(b));
console.log(typeof(wynik));
console.trace();

var _zmienna1 = 10;

//var 3liczba = 10; - błędna nazwa

var zmiennaZmiennoprzecinkowa = 2.5;
console.log(zmiennaZmiennoprzecinkowa);
console.log(typeof(zmiennaZmiennoprzecinkowa));

//bool

var prawda = true;
var falsz = false;
console.log(typeof(prawda));
console.log(typeof(falsz));

//undefined

var inna;
console.log(typeof(inna)); //nie ma zadnej wartosci

//object

var tab = ["aqua","brązowy"];
console.log(tab);
console.log(typeof(tab));


//############################

//var liczba = prompt("Podaj liczbę");
/*var liczba1 = prompt("Podaj liczbę pierwszą");
var liczba2 = prompt("Podaj liczbę drugą");
var liczba3 = prompt("Podaj liczbę trzecią");
var suma = liczba1 + liczba2 + liczba3;*/

//liczba1 = parseInt(liczba1);
//liczba2 = parseInt(liczba2);
//liczba3 = parseInt(liczba3);

/*liczba1 = parseFloat(liczba1);
liczba2 = parseFloat(liczba2);
liczba3 = parseFloat(liczba3);


var suma1= liczba1 + liczba2 + liczba3;
console.log("Po konwersji plików: " + suma1);
console.log(typeof(liczba1));
console.log(typeof(liczba2));
console.log(typeof(liczba3));*/


//zad1

/*Użytkownik podaje z klawiatury długość boku kwadratu
Wyświetl na ekranie w formacie "Długość boku wynosi: ... cm"
"Pole kwadratu wynosi: ... cm2"*/

var liczba1 = prompt("Podaj bok kwadratu");
var wynik = liczba1 * liczba1;

document.write("Bok kwadratu : " + liczba1 + "cm<br>");
document.write("Pole kwadratu : " + wynik + "cm<sup>2</sup>" );

/*
zad dom
 Napisz program obliczający pole trójkąta
*/





