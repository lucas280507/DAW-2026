const categoryLinks = document.querySelectorAll('nav a');
const selectedCategory = document.getElementById('selected-category');

categoryLinks.forEach(function (link) {
  link.addEventListener('click', function (evento) {
// Desativa a navegação padrão do link    
    evento.preventDefault();

// Pega o nome da categoria do link clicado
    const categoryName = link.textContent;

// Atualiza o texto do elemento com o id "selected-category" para mostrar a categoria clicada
    selectedCategory.textContent = categoryName;
    
alert('Categoria clicada: ' + categoryName);

//remover a class "active" de todos os links
      categoryLinks.forEach(function (categoryLinks) {
        categoryLinks.classList.remove('active');
      });

//adicionar a class "active" ao link clicado
      link.classList.add('active');

    });
});
