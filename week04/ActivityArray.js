let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let nameB = names.filter(name => name.startsWith("B"));

console.log(nameB);

let namesLength = names.map(name => name.length)

console.log(namesLength)

let nameavg = names.reduce((total, name) => total + name.length, 0) / names.length;

console.log(nameavg)