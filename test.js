// NE PAS TOUCHER
const ironman = 9;
const spiderman = 4;
const captainamerica = 8;
const thor = 3;
const thanos = 257;
// NE PAS TOUCHER





let power = [ironman, spiderman, captainamerica, thor];
let puissanceTotale = [power[0] * 3 + 10, power[1] * 4 + 5, power[2] * 3 + 7, power[3] * 4 + 20];
let tour = 0;


while (true) {




   // Recalculer la puissance totale avec les multiplicateurs et bonus
   puissanceTotale = [power[0] * 3 + 10, power[1] * 4 + 5, power[2] * 3 + 7, power[3] * 4 + 20];

   // Calculer la somme de la puissance totale
   let sommePuissanceTotale = puissanceTotale[0] + puissanceTotale[1] + puissanceTotale[2] + puissanceTotale[3];

   if (sommePuissanceTotale > thanos) {
      break;
   } else {
      let avengerCourant = tour % power.length;
      power[avengerCourant] = power[avengerCourant] + 1;
      tour++;
   }


}
console.log(tour);

