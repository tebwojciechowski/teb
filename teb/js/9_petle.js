var elPoczatek = document.getElementById("pocz");
var elKoniec = document.getElementById("kon");
var elP = document.getElementById("p");
var elK = document.getElementById("k");
var m;
function wyswietl (){

    for(m = elPoczatek.value; m <= elKoniec.value; m++){
        k.innerHTML = m + " ";
    }
}

elP.addEventListener("click", wyswietl);
