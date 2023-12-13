function getData() {
    const dataProducts = './products.json';

    fetch(dataProducts)
    .then(response => {
        return response.json();
    })
    .then(data => {
        data;
        console.log(data);
        createWrapper();
        createContainerCategory();
        createCategory(data);
        // createProductBlock(data);
    })
}

function createWrapper() {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.innerHTML = ``;

    const bodyElement = document.body;
    bodyElement.appendChild(wrapper);
}
function createContainerCategory() {
    const categories = document.createElement("div");
    categories.className = "categories";
    categories.innerHTML = ``;

    const wrapperElement = document.querySelector('.wrapper');
    wrapperElement.appendChild(categories);
}
function createCategory(data) {
    const categories = data.categories;

    for (let i = 0; i < categories.length; i++) {
        const category = document.createElement("div");
        category.className = `categories__item categories__item_${categories[i].categoryId}`;
        category.innerHTML = `${categories[i].categoryName}`;

        const containerElement = document.querySelector('.categories');
        containerElement.appendChild(category);
        console.log(categories[i].categoryName);
    }
}
getData();


