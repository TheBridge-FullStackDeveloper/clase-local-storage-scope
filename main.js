// var a = 1;
// let b = 2;
// const c = 3;

// // function test() {
// //   var a = 4;
// //   let b = 5;
// //   const c = 6;
// //   console.log("Function Scope: ", a, b, c);
// // }

// // test();

// if (true) {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("If Scope: ", a, b, c);
// }
// console.log("Global Scope: ", a, b, c);

// var a = 1;
// let b = 2;
// const c = 3;

// for(let b = 0; b<10; b++){
//     console.log('Loop: ',b)//1,2,3
// }

// console.log("Global Scope: ", a, b, c);//1,2,3

var a = 1;
let b = 2;
const c = 3;
console.log(a);
for (var a = 0; a < 10; a++) {
  console.log("Loop: ", a); //0,1,2..
}
console.log("Global Scope: ", a, b, c); //9,2,3

localStorage.setItem("name", "Sofía");
localStorage.setItem("gente2", "Isma,Sofia,Pedro" + ",Jose");
localStorage.setItem("gente", "Isma,Sofia,Pedro" + ",Jose");

// localStorage.name = 'Sofía'

localStorage.surname = "La Profe";

let firstName = localStorage.getItem("name");
let pepito = localStorage.surname;
console.log(localStorage.getItem("name"));
// localStorage.setItem("name", "");
// localStorage.removeItem('name')

// localStorage.clear()
// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   console.log(`${key}: ${localStorage.getItem(key)}`);
//   console.log(key + ": " + localStorage.getItem(key));
// }

localStorage.setItem('user', JSON.stringify({
    username: 'Ivan',
    password: 'contraseñajaja'
}));

// const user = JSON.parse(localStorage.getItem('user'));
// console.log(user)

// let ubicacion= "Valencia"
// localStorage.setItem("ubicacion","Valencia")
// localStorage.setItem("ubicacion",ubicacion)

// let user = {
//     username: 'Ivan',
//     password: 'contraseñajaja'
// }
// function prueba(){
//     return "hola"
// }
// localStorage.setItem("user2",JSON.stringify(prueba()))
let personajesAnime = ['Levi', 'Mikasa', 'Zoro', 'Luffy', 'Tanjiro', 'Nezuko'];

localStorage.setItem("anime", JSON.stringify(personajesAnime));//guardo info

// let data = localStorage.getItem("anime");//me traigo info

// console.log("Mi array", data);//consoleo info

//* PRÁCTICA 

const inputNombre= document.getElementById("nombre")
const btn = document.getElementById("btn")
console.log(inputNombre)
console.log(btn)

function guardarInfo(e){
    e.preventDefault()
    console.log(inputNombre.value)
    localStorage.setItem("nombre",inputNombre.value)
}

btn.addEventListener("click",guardarInfo)



