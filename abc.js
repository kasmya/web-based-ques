const message = document.querySelector("h1") //node containing heading tag
// message.innerHTML = "Hello" //passing text in h1 heading element, manupilating heading tag
// const button = document.querySelector("button") //by default takes 1st button
const button = document.querySelectorAll("button") //takes all buttons

button.addEventListener("click", ()=> {
  message.textContent = button.textContent 
})

/*
addEventListener("click", ()=> {
  message.innerHTML = "Hello" //whenever there is click event h1 contains hello is printed
})
*/
