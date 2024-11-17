const myButton1 = document.getElementById("my-button-1");
console.log(myButton1);

const myButton2 = document.getElementById("my-button-2");
console.log(myButton2);

if (myButton1) {
  myButton1.addEventListener("click", () => {
    alert("Hola desde indice 1");
  });
}

if (myButton2) {
  myButton2.addEventListener("click", () => {
    alert("hola desde index 2");
  });
}
