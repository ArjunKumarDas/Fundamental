const officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

//arrow functions
  const officersIds = officers.map(officer => officer.id);
  console.log(officersIds);

  // 
  const officersIds2 = officers.map(function (officer) {
    return officer.id
  });
 console.log(officersIds2);

 function timer(){
     let count = 0;
     return function () {
         count++;
         return count;
     }
 }

 const time = timer();
 console.log(time());

 const time2 = timer();
 console.log(time2());