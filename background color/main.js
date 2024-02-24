const buttons =document.querySelectorAll(".container button");

buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        document.body.style.backgroundColor=button.id;
    });
});