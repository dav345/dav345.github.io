/* 
  NAME: David Ly
  STUDENT ID: 043 150 101

  Add any JavaScript you need to this file. 
*/

(function() {
  /**
   * Helper object for working with products data and extracting information.
   * See products-data.js for format of the products data set.
   */
  let products = {
    /**
     * Store all products from productsData.js on `products.all` for convenience.
     */
    all: window.productsData,

    // Create new array that copies over requested category or all
    getByCategory: function(category) {
      category = category || 'All';

      let productsByCategory = [];

      products.all.forEach(function(obj) {
        let rObj = {};

        if (obj.category === category) {
          rObj = Object.assign({}, obj); // JSON.parse(JSON.stringify(obj));
          productsByCategory.push(rObj);
        } else if (category === 'All') {
          rObj = Object.assign({}, obj); // JSON.parse(JSON.stringify(obj));
          productsByCategory.push(rObj);
        }
      });

      return productsByCategory;
    }
  };

  /**
   * Helper functions for building table elements.
   */
  let cardHelper = {
    /**
     * Clears (any) existing rows from the #table-rows table body
     */
    clearContainer: function() {
      document.querySelector('#card-container').innerHTML = '';
    },

    /**
     * Takes a single `product` object and builds a DOM object to be injected into
     * the empty div in the html site template file, making sure to append any necessary attributes
     */
    productToCard: function(product) {
      let divCardElement = document.createElement('div');
      divCardElement.classList.add('fixed-size-card');

      let imgElement = document.createElement('img');
      imgElement.classList.add('fixed-size-card');
      imgElement.title = product.title;
      imgElement.alt = product.title;
      imgElement.src = `images/${product.fileName}`;
      imgElement.onerror = function() {
        this.style.display = 'none';
      };

      let divCardText = document.createElement('div');
      divCardText.classList.add('fixed-size-card-text');

      let cardTitle = document.createElement('p');
      cardTitle.innerText = product.title;
      divCardText.appendChild(cardTitle);

      let cardPrice = document.createElement('p');
      cardPrice.innerText = `Price: $${product.priceCad} (CAD)`;
      divCardText.appendChild(cardPrice);

      let cardCategory = document.createElement('p');
      cardCategory.innerText = `Category: ${product.category}`;
      divCardText.appendChild(cardCategory);

      let cardDesc = document.createElement('p');
      cardDesc.innerText = `Description: ${product.desc}`;
      divCardText.appendChild(cardDesc);

      divCardElement.appendChild(imgElement);
      divCardElement.appendChild(divCardText);

      return divCardElement;
    },

    /**
     * - Takes an array of `product` Objects named `products`,
     * - and passes each `product` in the array  to `cardHelper.productToCard()`.
     * - Inject to webpage at div id=card-container
     */
    cardsToContainer: function(products) {
      cardHelper.clearContainer();

      products.forEach(function(obj) {
        document.querySelector('#card-container').appendChild(cardHelper.productToCard(obj));
      });
    }
  };

  /**
   * - Register click handlers for every menu item in the page.
   * - Use the `products` and `cardHelper` Objects, and their associated methods, to update/populate
   * the div id=card-container with the appropriate set of products, based on the
   * menu item clicked.
   */

  function setupMenuHandlers() {
    addEventListener('DOMContentLoaded', function() {
      cardHelper.cardsToContainer(products.getByCategory());
    });

    // These are the menu buttons to filter product by category and display results
    document.querySelector('#all_button').addEventListener('click', function() {
      document.querySelector('#filter-option').innerText = 'All Current Posters';
      cardHelper.cardsToContainer(products.getByCategory());
    });

    document.querySelector('#quotes_button').addEventListener('click', function() {
      document.querySelector('#filter-option').innerText = 'Motivational Quotes Posters';
      cardHelper.cardsToContainer(products.getByCategory('Quotes'));
    });

    document.querySelector('#vibes_button').addEventListener('click', function() {
      document.querySelector('#filter-option').innerText = 'Just Vibes Posters';
      cardHelper.cardsToContainer(products.getByCategory('Vibes'));
    });

    document.querySelector('#funny_button').addEventListener('click', function() {
      document.querySelector('#filter-option').innerText = 'Funny Posters';
      cardHelper.cardsToContainer(products.getByCategory('Funny'));
    });
  }

  // When the page loads, setup all event handlers by calling setup function.
  window.onload = setupMenuHandlers();
})();
