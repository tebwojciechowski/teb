var imie;
    imie = "Janusz";
var nazwisko = "Kowal";
    document.write("Imię: " + imie + "<br>");
    document.write("Nazwisko: " + nazwisko + "<br>");
//+ to jest kontatenacja - połączenie dwóch danych

var wiek = 20;

if(wiek>=18) {
    document.write("Wiek:" + wiek + "<br>" + "Jesteś pełnoletni<br>");
}
else if (wiek<18) {

    document.write("Wiek: " + wiek + "<br>" + "Jesteś bobo<br>");
}

var x, y;
x = 10;
y = 5;

var suma = x + y;
var roznica = x - y;
var dzielenie;
dzielenie = x / y;
var mnozenie = x * y;
var modulo = x % y;
console.log(modulo);
