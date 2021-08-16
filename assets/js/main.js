console.log("test")

console.log("lev2_1: conditional-statements punkten");

function result() {
    let alter_person1=22
    let gross_person1=170
    let alter_person2=34
    let gross_person2=168
   
    let sum1 = alter_person1* 5 + gross_person1
    console.log(sum1);
    let sum2 = alter_person2 * 5 + gross_person2
    console.log(sum2);

    if (sum1 > sum2) {
        document.getElementById("ergebniss").innerHTML = `Person1 hat gewonnen. Punkte=${sum1}`
    } else if (sum1 < sum2) {
        document.getElementById("ergebniss").innerHTML = `Person2 hat gewonnen.  Punkte=${sum1}`
    } else {
        document.getElementById("ergebniss").innerHTML = "Unentschieden"
    }
   
}



// function result() {
//     let alter_person1=document.getElementById("alter1").value
//     let gross_person1=document.getElementById("gross1").value
//     let alter_person2=document.getElementById("alter2").value
//     let gross_person2=document.getElementById("gross2").value
   
//     let sum1 = alter_person1* 5 + gross_person1
//     console.log(sum1);
//     let sum2 = alter_person2 * 5 + gross_person2
//     console.log(sum2);

//     if (sum1 > sum2) {
//         document.getElementById("ergebniss").innerHTML = `Person1 hat gewonnen. Punkte=${sum1}`
//     } else if (sum1 < sum2) {
//         document.getElementById("ergebniss").innerHTML = `Person2 hat gewonnen Punkte=${sum1}`
//     } else {
//         document.getElementById("ergebniss").innerHTML = "Unentschieden"
//     }
   
// }


    





