// Exemple de liste de produits
const products = [
    { id: 1, name: "Product 1", price: 123.0, image: "img/product-1.jpg", rating: 4.5 },
    { id: 2, name: "Product 2", price: 150.0, image: "img/product-2.jpg", rating: 4.0 },
    { id: 3, name: "Product 3", price: 99.99, image: "img/product-3.jpg", rating: 3.5 },
    // Ajoutez plus de produits ici...
  ];
  
  // Fonction pour générer chaque produit
  function generateProductHTML(product) {

    /*
    <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
          <div class="product-item bg-light mb-4">
            <div class="product-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="img/product-1.jpg" alt="" />
              <div class="product-action">
                <a class="btn btn-outline-dark btn-square" href=""
                  ><i class="fa fa-shopping-cart"></i
                ></a>
                <a class="btn btn-outline-dark btn-square" href=""
                  ><i class="far fa-heart"></i
                ></a>
                <a class="btn btn-outline-dark btn-square" href=""
                  ><i class="fa fa-sync-alt"></i
                ></a>
                <a class="btn btn-outline-dark btn-square" href=""
                  ><i class="fa fa-search"></i
                ></a>
              </div>
            </div>
            <div class="text-center py-4">
              <a class="h6 text-decoration-none text-truncate" href=""
                >Product Name Goes Here</a
              >
              <div
                class="d-flex align-items-center justify-content-center mt-2"
              >
                <h5>$123.00</h5>
                <h6 class="text-muted ml-2"><del>$123.00</del></h6>
              </div>
              <div
                class="d-flex align-items-center justify-content-center mb-1"
              >
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small class="fa fa-star text-primary mr-1"></small>
                <small>(99)</small>
              </div>
            </div>
          </div>
        </div>*/
    return `
    <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
          <div class="product-item bg-light mb-4">
            <div class="product-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="${product.image}" alt="${product.name}"  />
              <div class="product-action">
                <a class="btn btn-outline-dark btn-square" href=""
                  ><i class="fa fa-phone"></i
                ></a>
                <a class="btn btn-outline-dark btn-square" href=""
                  ><i class="far fa-whatsapp"></i
                ></a>
                <a class="btn btn-outline-dark btn-square" href=""
                  ><i class="fa fa-info-alt"></i
                ></a> 
              </div>
            </div>
            <div class="text-center py-4">
              <a class="h6 text-decoration-none text-truncate" href=""
                >${product.name}</a
              >
              <div
                class="d-flex align-items-center justify-content-center mt-2"
              >
                <h5>$123.00</h5>
                <h6 class="text-muted ml-2"><del>$123.00</del></h6>
              </div>
              
            </div>
          </div>
        </div>`;
    //`
    //   <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
    //     <div class="product-item bg-light mb-4">
    //       <div class="product-img position-relative overflow-hidden">
    //         <img class="img-fluid w-100" src="${product.image}" alt="${product.name}" />
    //         <div class="product-action">
    //           <button class="btn btn-outline-dark btn-square" onclick="addToCart(${product.id})">
    //             <i class="fa fa-shopping-cart"></i>
    //           </button>
    //           <button class="btn btn-outline-dark btn-square" onclick="addToWishlist(${product.id})">
    //             <i class="far fa-heart"></i>
    //           </button>
    //           <button class="btn btn-outline-dark btn-square" onclick="refreshProduct(${product.id})">
    //             <i class="fa fa-sync-alt"></i>
    //           </button>
    //           <button class="btn btn-outline-dark btn-square" onclick="viewProduct(${product.id})">
    //             <i class="fa fa-search"></i>
    //           </button>
    //         </div>
    //       </div>
    //       <div class="text-center py-4">
    //         <a class="h6 text-decoration-none text-truncate" href="#">${product.name}</a>
    //         <div class="d-flex align-items-center justify-content-center mt-2">
    //           <h5>$${product.price.toFixed(2)}</h5>
    //         </div>
    //         <div class="d-flex align-items-center justify-content-center mb-1">
    //           ${generateRatingHTML(product.rating)}
    //           <small>(${product.rating})</small>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // `;
  }
  
  // Fonction pour générer les étoiles de notation
  function generateRatingHTML(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    let starsHTML = '';
  
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<small class="fa fa-star text-primary mr-1"></small>';
    }
    if (halfStar) {
      starsHTML += '<small class="fa fa-star-half-alt text-primary mr-1"></small>';
    }
    for (let i = fullStars + halfStar; i < 5; i++) {
      starsHTML += '<small class="far fa-star text-primary mr-1"></small>';
    }
    return starsHTML;
  }
  
  // Fonction pour afficher tous les produits
  function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = products.map(generateProductHTML).join('');
  }
  
  // Appels aux fonctions spécifiques
  function addToCart(id) {
    alert(`Product ${id} added to cart`);
  }
  
  function addToWishlist(id) {
    alert(`Product ${id} added to wishlist`);
  }
  
  function refreshProduct(id) {
    alert(`Product ${id} refreshed`);
  }
  
  function viewProduct(id) {
    alert(`Viewing product ${id}`);
  }
  
  // Affichage des produits lors du chargement de la page
  window.onload = displayProducts;
  