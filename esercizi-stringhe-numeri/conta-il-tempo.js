/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/


var sec = 12560;

var min = sec/60;
var totM = Math.round(min);

var hour = totM/60;
var totH = Math.round(hour);

var HinMinutes = totH*60; // 180m
var HinSeconds = HinMinutes*60;

var RemainingMin = totM-HinMinutes;
console.log(RemainingMin); // 29 minuti rimanenti
var Minseconds = RemainingMin*60;

var SumSeconds = HinSeconds+Minseconds;

var RemainingSeconds = sec-SumSeconds;





console.log(`le ore sono ${totH}, i minuti sono ${RemainingMin} e i secondi rimasti sono ${RemainingSeconds}`);
