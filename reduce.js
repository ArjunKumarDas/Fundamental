var years = [1,2,3,4]
const total = years.reduce((acc, n) => acc + n, 0);
console.log(total);




var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];
  // straightforward:
//   var totalYears = pilots.reduce(function (accumulator, pilot) {
//     return accumulator + pilot.years;
//   }, 0);
// arrow funcction
  const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
  console.log(totalYears);

