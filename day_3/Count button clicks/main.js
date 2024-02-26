const button = document.getElementById("clickButton");
const displaay_area = document.getElementById("displayarea");

let click_count = 0;

button.addEventListener("click", function(){
    click_count++;

    displaay_area.value = click_count
});
