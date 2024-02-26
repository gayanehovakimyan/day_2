function showHide() {
    const show = document.getElementById("show");
    const hide = document.getElementById("hide");

    if (show.style.display === "none"){
        show.style.display = "block";
        hide.textContent = "Hide"
    
     } else{
        show.style.display = "none";
        hide.textContent = "Show";

        }

    }

    

