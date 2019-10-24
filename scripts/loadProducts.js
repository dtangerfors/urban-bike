const url = "http://127.0.0.1:5500/scripts/products.json";

// Template for products
function articleTemplate(article) {
    return `
        <article class="product-card">
            <div class="product-card__image-box">
                <img src="${article.img}" alt="${article.name}" class="product-card__image">
            </div>    
            <div class="product-card__details">
                <h4 class="product-card__title">${article.name + " – " + article.color}</h4>
                <span class="product-card__info product-card__info--gears"><img src="assets/img/icons/cog-solid.svg" alt="Gears" class="product-card__info--icon">${article.gears}</span>
                <p class="product-card__info product-card__info--price">${article.price}</p>
                <a href="#" class="product-card__info product-card__info--view product-card__info--italic">See
                    more</a>
            </div>
        </article>
    `
}

// Get data from URL and map them to articleTemplate
fetch(url)
    .then((resp) => resp.json()) // Transform the responsed data into json
    .then(function (data) {
        let articles = data.products;
        return document.querySelector("#index-products").innerHTML = articles.map(articleTemplate).join("")
    })

    .catch(function (error) {
        console.log(error);
    });   