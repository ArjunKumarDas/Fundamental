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