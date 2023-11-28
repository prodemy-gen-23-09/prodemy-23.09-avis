const car =[
    {
        brand:"Toyota",
        name:"Land Cruiser",
        cubication: 3500,
    },
    {
        brand:"Bentley",
        name:"Bentayga",
        cubication:6000,
    }
    
]

// function modifyCarsByProperty(array, brand, newCubication) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].brand === brand) {
            
//             array[i].cubication = newCubication;
//             break; 
//         }
//     }
// }

function ModifyCarCubication (array,brand,newCubication){
    for (let i =0; i < array.length; i++){
        if (array[i].brand===brand){
            array[i].cubication = newCubication;
         }
    }
}

ModifyCarCubication(car,"Bentley", 2500);
// modifyCarsByProperty(car,"Toyota", 2700);

console.log(car); 