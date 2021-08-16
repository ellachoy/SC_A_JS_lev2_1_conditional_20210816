console.log("test")

console.log("lev2_1: conditional-statements punkten");

function result() {
    let alter_John=22
    let gross_John=170
    let alter_Meike=34
    let gross_Meike=168
   
    let sum1 = alter_John* 5 + gross_John
    console.log(sum1);
    let sum2 = alter_Meike * 5 + gross_Meike
    console.log(sum2);

    if (sum1 > sum2) {
        document.getElementById("ergebniss").innerHTML = "John hat gewonnen"
    } else if (sum1 < sum2) {
        document.getElementById("ergebniss").innerHTML = "Meike hat gewonnen"
    } else {
        document.getElementById("ergebniss").innerHTML = "Unentschieden"
    }
   
}
  
//  console.log("lev2_3: conditional-statements difference");  
//  Schreibe eine Funktion, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten. Wenn die Zahl größer als 27 ist, gib 2 mal die absolute Differenz zurück.

//  Teste die Nummern: 35, 74, 123.
 
//  function differ_Zahlen(){
//      let zahl= document.getElementById("Zahl").value
//      console.log(zahl)
//      if(zahl-27){

//      }

//  }
     
     
    





