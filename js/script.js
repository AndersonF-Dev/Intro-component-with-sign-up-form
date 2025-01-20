
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário se houver erros
   
  
    let isValid = true; // Flag para rastrear se o formulário é válido
  
    // Campos e mensagens de erro
    const campos = [
      { id: 'firstName', erroId: 'nameError', mensagem: 'First Name cannot be empty' },
      { id: 'lastName', erroId: 'lastNameError', mensagem: 'Last Name cannot be empty' },
      { id: 'email', erroId: 'emailError', mensagem: 'Looks like this is not an email', validar: validarEmail },
      { id: 'password', erroId: 'passwordError', mensagem: 'Password cannot be empty' },
    ];
  
    // Validação dos campos
    campos.forEach(campo => {
      const input = document.getElementById(campo.id);
      const errorSpan = document.getElementById(campo.erroId);
      
      if (!input.value.trim() || (campo.validar && !campo.validar(input.value))) {
        // Exibe erro
        input.classList.add('erro');
        errorSpan.textContent = campo.mensagem;
        errorSpan.style.display = 'block';
        errorSpan.style.borderColor = "red";
        isValid = false;
      } else {
        // Remove erro
        input.classList.remove('erro');
        errorSpan.textContent = '';
        errorSpan.style.display = 'none';
      }
    });
  
    // Enviar o formulário se for válido
    if (isValid) {
      alert('Formulário enviado com sucesso!');
      // Aqui você pode enviar os dados do formulário
    }
  });
  
  // Função para validar email
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  