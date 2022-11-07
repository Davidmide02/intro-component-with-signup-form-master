// to get the form
const form = document.querySelector(".form");
// to get the input field
const inputs = document.querySelectorAll(".enter");
// to get the submit button
const btn = document.getElementById("Btn")

// to define what happends when the submit button is clicked
btn.addEventListener("click", (e) => {
    // to prevent default setting of the browser
    e.preventDefault();

    // to loop through each input field
    inputs.forEach($values => {

        //  getting the values inputed in each input field and testing if it is empty(validation)
        if ($values.value == "") {

            // if any of the input field is empty add a class name of "error" to display the error icon and message
            $values.parentElement.classList.add("error");
        }

        else {
            // if all the input fields are filled remove the class "error" to hide the error icon and message
            $values.parentElement.classList.remove("error");
        }


    });


})