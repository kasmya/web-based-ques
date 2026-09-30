const message = document.querySelector("h1") //node containing heading tag
// message.innerHTML = "Hello" //passing text in h1 heading element, manupilating heading tag
// const button = document.querySelector("button") //by default takes 1st button
const buttonList = document.querySelectorAll("button") //takes all buttons

buttonList[0].addEventListener("click", ()=> {
  message.textContent = buttonList[0].textContent 
})

buttonList[1].addEventListener("click", ()=> {
  message.textContent = buttonList[1].textContent 
})

buttonList[2].addEventListener("click", ()=> {
  message.textContent = buttonList[2].textContent 
})

/*
addEventListener("click", ()=> {
  message.innerHTML = "Hello" //whenever there is click event h1 contains hello is printed
})
*/
