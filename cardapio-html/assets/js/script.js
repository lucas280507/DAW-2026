const categoryLinks = document.querySelectorAll("nav a");
const selectedCategory = document.querySelector("#selected-category");

categoryLinks.forEach(function (link) {
	link.addEventListener("click", function (event) {
		event.preventDefault();

        const categoryName = link.textContent;

        selectedCategory.textContent = "Categoria selecionada: " + categoryName;

     

        categoryLinks.forEach(function (categoryLink) {
            categoryLink.classList.remove("active");
		
    })

    link.classList.add("active");
		
	});
});