const residents = [
    {
        name: 'Luíza',
        lastName: 'Guimarães',
        floor: 10,
        apartment: 1005,
    },
    {
        name: 'William',
        lastName: 'Albuquerque',
        floor: 5,
        apartment: 502,
    },
    {
        name: 'Murilo',
        lastName: 'Ferraz',
        floor: 8,
        apartment: 804,
    },
    {
        name: 'Zoey',
        lastName: 'Brooks',
        floor: 1,
        apartment: 101,
    },
];

console.log(residents[0]); // Resultado do log: { name: 'Luíza', lastName: 'Guimarães', floor: 10, apartment: 1005 }

const firstResident = residents[0];
// console.log(firstResident);
console.log(firstResident.floor); // Resultado do log: 10

const lastResident = residents[residents.length - 1];
console.log(lastResident); // Resultado do log: { name: 'Zoey', lastName: 'Brooks', floor: 1, apartment: 101 }

for (let index = 0; index < residents.length; index += 1) {
    const resident = residents[index];
    console.log(resident.name);
  };