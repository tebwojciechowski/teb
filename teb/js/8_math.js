var pi = Math.PI;


//zad1
/*Użytkownik podaje z klawiatury promień koła.
Oblicz pole i wyświetl w formacie: "Pole koła wynosi: ...cm2"*/

//var x = prompt("Podaj wartość");
console.log(Math.sqrt(x));

var a = 13.2;
var b = 28.5;
var c = 111;
var d = 3;
//minimum

var min = Math.min(a,b,c,d);
console.log("Minimum - " + min );

//maksimum

var max = Math.max(a,b,c,d);
console.log("Maksimum - " + max);

//zaokrąglenie

var e = 12.45;
var zaokraglenie = Math.round(e);
console.log(zaokraglenie);

//wartość bezwzględna ABS
//zaokrąglenie round
//zaokrąglenie w dół floor

var x = -56;
var y = -13.1;
var z = 14.9;
document.write("<br>" + Math.abs(x) + "<br>");
document.write("<br>" + Math.abs(y) + "<br>");
document.write("<br>" + Math.abs(z) + "<br>");
document.write("<br>" + Math.round(x) + "<br>");
document.write("<br>" + Math.round(y) + "<br>");
document.write("<br>" + Math.round(z) + "<br>");
document.write("<br>" + Math.floor(x) + "<br>");
document.write("<br>" + Math.floor(y) + "<br>");
document.write("<br>" + Math.floor(z) + "<br>");

//potęgowanie

var p = Math.pow(2,10);
console.log(p);

//losowanie

var losuj = Math.random();
console.log(losuj);

//miejsca po przecinku

var k = 10.1234567890;
k = k.toFixed(2); //do dwoch miejsc

//precyzja

var j = 10.1234567890;
j = j.toPrecision(2);
console.log(j);


//losuj liczby z przedziału <0 - 10>

var l = Math.floor(Math.random() *11);
console.log(l);

//losuj liczbę z przedziału <10;20>

var d = Math.floor(Math.random() *11 + 10);
console.log(d);


//<31;50>

var f = Math.floor(Math.random() *21 + 31);
console.log(f);
