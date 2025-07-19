document.addEventListener('DOMContentLoaded', function () {
  const chatButton = document.getElementById('chatbot-button');
  if (chatButton) {
    chatButton.addEventListener('click', function () {
      const chatWindow = document.createElement('div');
      chatWindow.style.position = 'fixed';
      chatWindow.style.bottom = '80px';
      chatWindow.style.right = '20px';
      chatWindow.style.width = '300px';
      chatWindow.style.height = '400px';
      chatWindow.style.background = '#1e1e1e';
      chatWindow.style.color = '#f5f5f5';
      chatWindow.style.border = '2px solid gold';
      chatWindow.style.borderRadius = '12px';
      chatWindow.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.6)';
      chatWindow.style.padding = '1rem';
      chatWindow.style.zIndex = '9999';
      chatWindow.style.overflowY = 'auto';
      chatWindow.innerHTML = '<strong>LexOmega Chatbot</strong><br><br><p>How can I assist you today?</p>';

      const closeButton = document.createElement('button');
      closeButton.textContent = '✖'; // Fixed: proper Unicode character for close
      closeButton.style.position = 'absolute';
      closeButton.style.top = '5px';
      closeButton.style.right = '10px';
      closeButton.style.background = 'transparent';
      closeButton.style.border = 'none';
      closeButton.style.color = 'gold';
      closeButton.style.fontSize = '1.2rem';
      closeButton.style.cursor = 'pointer';
      closeButton.addEventListener('click', function () {
        document.body.removeChild(chatWindow);
      });

      chatWindow.appendChild(closeButton);
      document.body.appendChild(chatWindow);
    });
  }
});
