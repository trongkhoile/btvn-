var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } ,
];
console.log(smartPhones.map(function(smartPhone){
    return smartPhone.price;
}));