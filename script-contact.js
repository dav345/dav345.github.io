/* 
  NAME: David Ly
  STUDENT ID: 043 150 101

  Add any JavaScript you need to this file. 
*/

(function() {
  /**
   * - Register click handlers for every menu item in the page.
   * - Use the `products` and `cardHelper` Objects, and their associated methods, to update/populate
   * the div id=card-container with the appropriate set of products, based on the
   * menu item clicked.
   */

  function setupMenuHandlers() {
    addEventListener('DOMContentLoaded', function() {
      document.querySelector('#order-number-label').style.display = 'none';

      document.querySelector('#order-number-input').style.display = 'none';

      document.querySelector('#order-number-input input').value = 'not applicable';
    });

    document.querySelector('#contact-question').addEventListener('change', function() {
      document.querySelector('#order-number-label').style.display = 'none';

      document.querySelector('#order-number-input').style.display = 'none';

      document.querySelector('#order-number-input input').value = 'not applicable';
    });

    document.querySelector('#contact-comment').addEventListener('change', function() {
      document.querySelector('#order-number-label').style.display = 'none';

      document.querySelector('#order-number-input').style.display = 'none';

      document.querySelector('#order-number-input input').value = 'not applicable';
    });

    document.querySelector('#contact-order-problem').addEventListener('change', function() {
      document.querySelector('#order-number-label').style.display = '';

      document.querySelector('#order-number-input').style.display = '';

      document.querySelector('#order-number-input input').value = '';
    });
  }

  // When the page loads, setup all event handlers by calling setup function.
  window.onload = setupMenuHandlers();
})();
