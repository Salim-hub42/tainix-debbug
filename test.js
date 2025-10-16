// NE PAS TOUCHER
const ironman = 9;
const spiderman = 4;
const captainamerica = 8;
const thor = 3;
const thanos = 257;
// NE PAS TOUCHER





let power = [ironman, spiderman, captainamerica, thor];
let puissanceTotale = [power[0] + power[1] + power[2] + power[3]];
let tour = 0;


while (true) {

   if (power < thanos) {
      let avengerCourant = tour % power.length;
      power[avengerCourant] = power[avengerCourant] + 1;
   }
}

