document.addEventListener('DOMContentLoaded', function () {
  const checkoutButton = document.getElementById('checkout-button');

  if (checkoutButton) {
    checkoutButton.addEventListener('click', function () {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.zIndex = '10000';

      const modal = document.createElement('div');
      modal.style.background = '#1e1e1e';
      modal.style.padding = '2rem';
      modal.style.borderRadius = '12px';
      modal.style.border = '2px solid gold';
      modal.style.color = 'white';
      modal.style.width = '320px';
      modal.style.textAlign = 'center';
      modal.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.5)';

      modal.innerHTML = `
        <h2 style="color: gold;">LexOmega Checkout</h2>
        <p>Secure Payment Placeholder</p>
        <p>Amount: <strong>$49.99</strong></p>
        <button id="pay-now" style="background: gold; color: black; border: none; padding: 0.7rem 1.2rem; font-weight: bold; border-radius: 8px; cursor: pointer; margin-top: 1rem;">Pay Now</button><br><br>
        <button id="cancel-checkout" style="background: transparent; color: #ccc; border: none; cursor: pointer;">Cancel</button>
      `;

      overlay.appendChild(modal);
      document.body.appendChild(overlay);

      // Payment simulation logic
      document.getElementById('pay-now').addEventListener('click', function () {
        modal.innerHTML = `<h2 style="color: cyan;">✅ Payment Successful!</h2><p>Thank you for joining LexOmega.</p>`;
        setTimeout(() => {
          document.body.removeChild(overlay);
        }, 3000);
      });

      // Cancel
      document.getElementById('cancel-checkout').addEventListener('click', function () {
        document.body.removeChild(overlay);
      });
    });
  }
});
