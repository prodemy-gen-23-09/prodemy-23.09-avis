const car =[
    {
        brand:"Toyota",
        name:"Supra",
        cubication: 1500,
    },
    {
        brand:"Volkwagen",
        name:"Polo GT",
        cubication: 1200,
    },
    {
        brand:"Ferrari",
        name:"SF90",
        cubication: 4500,
    },
    {
        brand:"Renault",
        name: "Kwid",
        cubication: 1000,
    },
    {
        brand:"Daihatsu",
        name: "Terios",
        cubication: 1800,
    },
    {
        brand:"Mitsubishi",
        name: "Fuso",
        cubication: 5500,
    },
    {
        brand:"Mitsubishi",
        name:"Galant",
        cubication: 2300,
    }

];

// const filteredCars =car.filter(car => car.cubication <=5000);
// const filteredCars =car.filter(car => car.name);
const filteredCars = car.filter ( car => car.brand === "Mitsubishi");

console.log(filteredCars);