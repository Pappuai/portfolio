function sayHello() {
    alert("Hello! Thanks for visiting my portfolio!");
}
const myElement = document.getElementById('button-div'); // Replace with your element's ID

if(myElement){
  myElement.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent the default context menu
  });
}
