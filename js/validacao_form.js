document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name) {
    alert('O campo "Nome" não pode ser vazio.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Por favor, insira um endereço de e-mail válido.');
    return;
  }

  if (!message) {
    alert('O campo "Mensagem" não pode ser vazio.');
    return;
  }

  alert('Mensagem enviada com sucesso!');
  this.reset();
});

document.getElementById('submit-button').addEventListener('click', function() {
  this.classList.add('button-clicked');
  setTimeout(() => this.classList.remove('button-clicked'), 300);
});