const url = 'https://www.course-api.com/javascript-store-products';
const productsDOM = document.querySelector('.products-center');
const searchInput = document.getElementById('search-input');
const filterIkea = document.getElementById('filter-ikea');
const filterMarcos = document.getElementById('filter-marcos');
const filterAll = document.getElementById('filter-all');
let products = [];

// Fetch products from API
const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    products = data;
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">There was an error</p>';
  }
};

// Display products
const displayProducts = (list) => {
  if (list.length < 1) {
    productsDOM.innerHTML = '<p class="error">No products match your search.</p>';
    return;
  }

  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price, company } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;

      return `<a class="single-product" href="product.html?id=${id}">
                <img src="${img}" class="single-product-img img" alt="${title}" />
                <footer>
                  <h5 class="name">${title}</h5>
                  <span class="price">$${formatPrice}</span>
                </footer>
              </a>`;
    })
    .join('');
  productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

// Filter and Search Functions
const filterProducts = (criteria) => {
  const filteredProducts = products.filter((product) =>
    product.fields.company.toLowerCase() === criteria
  );
  displayProducts(filteredProducts);
};

const searchProducts = (term) => {
  const searchedProducts = products.filter((product) =>
    product.fields.name.toLowerCase().includes(term.toLowerCase())
  );
  displayProducts(searchedProducts);
};

// Event Listeners
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value;
  if (searchTerm) {
    searchProducts(searchTerm);
  } else {
    displayProducts(products); // Show all if search is cleared
  }
});

filterIkea.addEventListener('click', () => filterProducts('ikea'));
filterMarcos.addEventListener('click', () => filterProducts('marcos'));
filterAll.addEventListener('click', () => displayProducts(products));

// Initialize app
const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
