document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      if (!validateName(nome)) {
        alert('Por favor, insira um nome válido.');
        return;
      }
      
      if (!validateEmail(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
      }
      
      if (!validateMessage(mensagem)) {
        alert('Por favor, insira uma mensagem válida.');
        return;
      }
      
      alert('Formulário enviado com sucesso!');
      this.reset();
    });

    const submitButton = document.getElementById('submit');
    if (submitButton) {
      submitButton.addEventListener('click', function() {
        this.classList.add('button-clicked');
        setTimeout(() => this.classList.remove('button-clicked'), 300);
      });
    }
  }

  function validateName(name) {
    return name.length > 0;
  }

  function validateEmail(email) {
    const regEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;
    return regEx.test(email);
  }

  function validateMessage(message) {
    return message.length > 0;
  }
});