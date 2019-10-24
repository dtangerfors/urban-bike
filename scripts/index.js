const bikeForm = document.forms.bikeSelector;

let bikeGender, bikeUsage, bikePlace, bikeStyle;

let findProduct;

function collectForm() {
    bikeGender = bikeForm.querySelector('input[name="bike-gender"]:checked').value;
    bikeUsage = bikeForm.querySelector('input[name="bike-usage"]:checked').value;
    bikePlace = bikeForm.querySelector('input[name="bike-place"]:checked').value;
    bikeStyle = bikeForm.querySelector('input[name="bike-style"]:checked').value;
    console.log(bikeGender, bikeUsage, bikePlace, bikeStyle)
}

function createSection() {
    const section = document.createElement("section");
    const sectionWrapper = document.createElement("div");
    section.setAttribute("class", "product-section")
    sectionWrapper.setAttribute("id", "selected-bikes");
    sectionWrapper.setAttribute("class", "product-section__wrapper");
    document.querySelector("#bike-selector-content").appendChild(section);
    section.appendChild(sectionWrapper);
}

function findBikes() {

    fetch(url)
        .then((resp) => resp.json()) // Transform the responsed data into json
        .then(function (data) {
            let articles = data.products;
            findProduct = articles.filter(product => { return product.gender === bikeGender && product.usage === bikeUsage });
            return document.querySelector("#selected-bikes").innerHTML = findProduct.map(articleTemplate).join("");
            console.log(findProduct);
        })

        .catch(function (error) {
            console.log(error);
        });


}


bikeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    collectForm();
    createSection();
    findBikes();

})

