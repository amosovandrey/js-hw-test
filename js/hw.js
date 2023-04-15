const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
    let propValue = [];
   
    for (let product of products) {
      let keys = Object.keys(product);

      for (let key of keys) {
              if (key === propName) 
        propValue.push(product[propName])
      }


        
    
  }
    console.log(propValue);
    return propValue;

  // Change code above this line
}

getAllPropValues('price');
