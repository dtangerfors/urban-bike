const bikeForm = document.forms.bikeSelector;

let bikeGender, bikeUsage, bikePlace, bikeStyle;

function collectForm() {
    bikeGender = bikeForm.querySelector('input[name="bike-gender"]:checked').value;
    bikeUsage = bikeForm.querySelector('input[name="bike-usage"]:checked').value;
    bikePlace = bikeForm.querySelector('input[name="bike-place"]:checked').value;
    bikeStyle = bikeForm.querySelector('input[name="bike-style"]:checked').value;
    console.log(bikeGender, bikeUsage, bikePlace, bikeStyle)
}

function createSection() {
    const section = document.createElement("section");
    section.setAttribute("id", "selected-bikes")
    document.querySelector("#bike-selector-content").appendChild(section)
}


bikeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    collectForm();
    createSection();

})

