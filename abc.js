const message = document.querySelector("h1") //node containing heading tag
// message.innerHTML = "Hello" //passing text in h1 heading element, manupilating heading tag

addEventListener("click", ()=> {
  message.innerHTML = "Hello" // whenever there is click event h1 contains hello is printed
})
