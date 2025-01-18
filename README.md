# Frontend Mentor - Intro component with sign up form solution

Esta é uma solução para o [Intro component with sign up form solution](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação construindo projetos realistas.
### Screenshot

![](./images/Animação1.gif)
![](./images/Animação2.gif)
![](./images/Animação3.gif)

### Link

- URL do site ativo: [link aqui](https://andersonf-dev.github.io/Intro-component-with-sign-up-form/)

# Trecho de código usado js
```js
 // Validação dos campos
    campos.forEach(campo => {
      const input = document.getElementById(campo.id);
      const errorSpan = document.getElementById(campo.erroId);
      
      if (!input.value.trim() || (campo.validar && !campo.validar(input.value))) {
        // Exibe erro
        input.classList.add('erro');
        errorSpan.textContent = campo.mensagem;
        errorSpan.style.display = 'block';
        isValid = false;
      } else {
        // Remove erro
        input.classList.remove('erro');
        errorSpan.textContent = '';
        errorSpan.style.display = 'none';
      }
    });
```
### Criado com
- Marcação HTML5 semântica
- Propriedades personalizadas CSS
- Flexbox
- CSS Grid
- JavaScript

### O que aprendi

- Aprendi a criar um card, posicionar elementos na tela centralizar, consultar o HTML através do DOM com JavaScript.
- Exibir e esconder enformações no HTML pelo JavaScript. 
- Adicionar e remover o ativo.
- Capturar e exibir dado de a cordo com o clique na lista e exibir o mesmo valor em outro lugar
- Validar formulário traves do JavaScript

### Desenvolvimento contínuo

Este é apenas mais um de muitos dos projetos de front end que fiz. Continuarei fazendo e me desenvolvendo ainda mais. Estou aprendendo cada dia mais, fazendo esses desafios, 