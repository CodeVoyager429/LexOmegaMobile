document.addEventListener("DOMContentLoaded", () => {
  const botButton = document.createElement('div');
  botButton.innerHTML = '💬';
  botButton.style.position = 'fixed';
  botButton.style.bottom = '20px';
  botButton.style.right = '20px';
  botButton.style.background = '#00ffc3';
  botButton.style.color = '#000';
  botButton.style.borderRadius = '50%';
  botButton.style.width = '50px';
  botButton.style.height = '50px';
  botButton.style.display = 'flex';
  botButton.style.justifyContent = 'center';
  botButton.style.alignItems = 'center';
  botButton.style.fontSize = '24px';
  botButton.style.cursor = 'pointer';
  botButton.title = "Chat with Lex Omega AI";

  botButton.onclick = () => {
    alert("Chatbot placeholder activated — real-time assistant coming soon.");
  };

  document.body.appendChild(botButton);
});
