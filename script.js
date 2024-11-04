

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const productGrid = document.getElementById('product-grid');

    data.forEach(product => {
    
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');

      card.innerHTML = `
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="card-price">$${product.price.toFixed(2)}</span>
              <div>
                <a href="#" class="btn btn-primary">View</a>
                <a href="#" class="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      `;

      productGrid.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });