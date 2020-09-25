let car = {
    brand: 'Bugatti',
    name: 'Veyron',
    price: '$2 Million',
    weight: '1990 kg'
}
// console.log('Car Full Name Is:', car.brand, car.name,);
// console.log('Car Price Is:', car.price);
// console.log('Car Weight Is:', car.weight);


let arr = [
    [16, 47, 43, 20, 46],
    [14, 49, 10, 42, 30],
    [36, 47, 38, 15, 27],
    [78, 30, 26, 59, 27]
]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        const element = arr[i][j];
        console.log(element)
    }
}