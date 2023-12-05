let top3 = ["The Colosseum", "Trevi Fountain", "The Vatican City"];

function showItenary(place1,place2,place3) {
    console.log("Visit " + place1);
    console.log("Then visit " + place2);
    console.log("Finished with a visit to " + place3);
}
showItenary(top3[0], top3[1], top3[2]);

console.log("========");
showItenary(...top3);