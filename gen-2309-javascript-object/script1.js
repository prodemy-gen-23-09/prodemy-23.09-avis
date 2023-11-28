const car = [
    {
        brand:"Toyota",
        name:"Supra",
        cubication: 1500,

    },
    {
        brand:"Daihatsu",
        name:"MR2",
        cubication: 1300,

    },
];

function updateData(brand, name, cubication){
    car.brand = brand;
    car.name = name;
    car.cubication = cubication;

    return car;
}

const newBrand = "Suzuki";
const newName ="Ax-3";
const newCubication = "1400";

console.log(updateData(newBrand,newName,newCubication));