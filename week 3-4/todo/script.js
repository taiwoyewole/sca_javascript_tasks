let button = document.getElementById("btn");
let input = document.getElementById('userinput');
let ul = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input.value.length > 0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild("li");
        document.body.appendChild("li");
        input.value = ""
    }
})