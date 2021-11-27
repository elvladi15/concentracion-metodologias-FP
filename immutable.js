/*
Inmutable data se refiere a un objeto cuyo estado no puede ser modificado una vez creado. En algunos casos un objeto puede ser considerado como inmutable 
aunque algunos de sus atributos internos cambie, siempre y cuando el estado del objeto parezca no cambiar desde un punto de vista externo al mismo.
*/

console.log('---------------------------------------- Inmutable Data ----------------------------------------')
const data = [
{ id: '1', name: 'Jose' , age: '27'},
{ id: '2', name: 'Maria' , age: '19'},
{ id: '3', name: 'Luis' , age: '38'},
];

console.log(data)

console.log('---------------------------------------- Array add ----------------------------------------')

const addData = {id: '4', name: 'Laura' , age: '50'}
const newData = [...data, addData];
console.log(data,newData)

console.log('---------------------------------------- Array remove ----------------------------------------')

const updatedData = data.filter((data) => data.id !== '3')
console.log(data,updatedData);

console.log('---------------------------------------- Object Add ----------------------------------------')

const addObject = {id: '5', name: 'Manuel'}
const newObject = {...addObject, age: 15};
console.log(addObject,newObject);

console.log('---------------------------------------- Object Remove ----------------------------------------')

const deleteObject = {id: '6', name: 'Daniela' , age: '30'}
const {age, ...updatedObject} = deleteObject;
console.log(deleteObject,updatedObject);

/*

Cuando utilizamos Data inmutability el código se vuelve más simple y por lo tanto hay
menos bugs ya que si tenemos muchos métodos diferentes manipulando nuestros datos 
puede llegar a ser complicado encontrar el origen de un determinado problema.

A pesar de todo esto también tiene sus desventajas ya que al nosotros estar copiando 
data una y otra vez lo que hace al programa más lento y más pesado en lo que a 
memoria se refiere.

*/