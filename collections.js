let container = document.getElementById("one");
let search = document.getElementById("search");
let elements = container.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    let enteredValue = event.target.value.toUpperCase();

    for (let count = 0; count < elements.length; count++) {
        let productName = elements[count].querySelector("p").textContent;
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            elements[count].style.display = "none";
        } else {
            elements[count].style.display = "block";
        }
    }
});
