// Get necessary HTML elements
const bikeForm = document.forms.bikeSelector;
const heading = document.querySelector("#bike-selector-heading");
const subHeading = document.querySelector(".bike-selector-header__paragraph")
const startBtn = document.querySelector("#btnStart")

// Create variables 
let bikeGender, bikeUsage, bikePlace, bikeStyle;

let findProduct;

// Collect data from the bike selector form
function collectForm() {
    bikeGender = bikeForm.querySelector('input[name="bike-gender"]:checked').value;
    bikeUsage = bikeForm.querySelector('input[name="bike-usage"]:checked').value;
    bikePlace = bikeForm.querySelector('input[name="bike-place"]:checked').value;
    bikeStyle = bikeForm.querySelector('input[name="bike-style"]:checked').value;
    console.log(bikeGender, bikeUsage, bikePlace, bikeStyle)
}

// Create the section where products is to be shon
function createSection() {
    const section = document.createElement("section");
    const sectionWrapper = document.createElement("div");
    section.setAttribute("class", "product-section")
    sectionWrapper.setAttribute("id", "selected-bikes");
    sectionWrapper.setAttribute("class", "product-section__wrapper");
    document.querySelector("#bike-selector-content").appendChild(section);
    section.appendChild(sectionWrapper);
}

// Change the appeareance of the header and text based on results 
function changeHeader(results) {

    document.querySelector(".bike-selector-header").style.height = "50vh";
    startBtn.remove();
    subHeading.classList.add("heading--bg")

    if (results.length == 1) {
        heading.textContent = "Here is your perfect match!"
        subHeading.textContent = "Your lucky, we found one that suits your needs!"
    } else if (results.length >= 2) {
        heading.textContent = "You got some to choose from!"
        subHeading.textContent = "Your lucky, we found several that suits your needs! Pick and choose."
    } else {
        heading.textContent = "We're so sorry, no matches!"
        subHeading.textContent = "Don't be sad though, contact us and we'll help you find one."
    }
}

// Fetch the products from url and filter them based on results from the form
function findBikes() {

    fetch(url)
        .then((resp) => resp.json()) // Transform the responsed data into json
        .then(function (data) {
            let articles = data.products;
            findProduct = articles.filter(product => { return product.gender === bikeGender && product.usage === bikeUsage && product.type === bikeStyle && product.usagePlace === bikePlace });
            // Use the findproduct as argument to find the proper text in changeHeader
            changeHeader(findProduct);
            // Return the filtered products to the newly created section
            return document.querySelector("#selected-bikes").innerHTML = findProduct.map(articleTemplate).join("");
        })

        .catch(function (error) {
            console.log(error);
        });
}

bikeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    collectForm();
    document.querySelector("#bike-selector-content").innerHTML = "";
    createSection();
    findBikes();
})

