document.addEventListener("DOMContentLoaded", () => {
    const categories = [
        { name: "Tricot Habit", imgSrc: "img/categories/IMG-20241105-WA0085.jpg", products: 100 },
        { name: "Robe", imgSrc: "img/categories/IMG-20241105-WA0088.jpg", products: 80 },
        { name: "Bonnets", imgSrc: "img/categories/IMG-20241105-WA0302.jpg", products: 200 },
        { name: "Cagoules", imgSrc: "img/categories/IMG-20241105-WA0218.jpg", products: 120 },
        { name: "Sacs", imgSrc: "img/categories/IMG-20241105-WA0244.jpg", products: 50 },
        { name: "Gillets", imgSrc: "img/categories/IMG-20241105-WA0284.jpg", products: 50 },
        { name: "Crunches", imgSrc: "img/categories/IMG-20241105-WA0287.jpg", products: 50 },
        { name: "Assessoirs", imgSrc: "img/categories/IMG-20241105-WA0154.jpg", products: 50 },
        // Ajoutez autant de catégories que nécessaire
    ];

    const container = document.getElementById("categories-container");

    /*
    <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
          <a class="text-decoration-none" href="">
            <div class="cat-item d-flex align-items-center mb-4">
              <div class="overflow-hidden" style="width: 100px; height: 100px">
                <img class="img-fluid" src="img/tricot_habit2.jpeg" alt="" />
              </div>
              <div class="flex-fill pl-3">
                <h6>Category Name</h6>
                <small class="text-body">100 Products</small>
              </div>
            </div>
          </a>
        </div>*/

    categories.forEach(category => {
        // Créer le div contenant l'image et la description
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "col-lg-3 col-md-4 col-sm-6 pb-1";

        // Créer le lien de la catégorie
        const categoryLink = document.createElement("a");
        categoryLink.className = "text-decoration-none";
        categoryLink.href = "#";

        // Créer l'élément de catégorie
        const catItem = document.createElement("div");
        catItem.className = "cat-item img-zoom d-flex align-items-center mb-4";

        // Créer l'élément image
        const imgContainer = document.createElement("div");
        imgContainer.className = "overflow-hidden";
        imgContainer.style.width = "100px";
        imgContainer.style.height = "100px";

        const img = document.createElement("img");
        img.className = "img-fluid";
        img.src = category.imgSrc;
        img.alt = category.name;

        imgContainer.appendChild(img);

        // Créer la description de la catégorie
        const catDescription = document.createElement("div");
        catDescription.className = "flex-fill pl-3";

        const catName = document.createElement("h6");
        catName.textContent = category.name;

        const catProducts = document.createElement("small");
        catProducts.className = "text-body";
        catProducts.textContent = `${category.products} Products`;

        catDescription.appendChild(catName);
        catDescription.appendChild(catProducts);

        // Assembler les éléments
        catItem.appendChild(imgContainer);
        catItem.appendChild(catDescription);
        categoryLink.appendChild(catItem);

        categoryDiv.appendChild(categoryLink);

        // Ajouter le lien de la catégorie au conteneur principal
        container.appendChild(categoryDiv);
    });
});
