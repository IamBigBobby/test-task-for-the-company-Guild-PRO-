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
        createCategory(data);
    })
}

function createWrapper() {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.innerHTML = ``;

    const bodyElement = document.body;
    bodyElement.appendChild(wrapper);
}
function createCategory(data) {
    console.log(data.categories.map);
    const categories = data.categories;

    for (let i = 0; i < categories.length; i++) {
        const category = document.createElement("div");
        category.className = `category category_${categories[i].categoryId}`;
        category.innerHTML = `${categories[i].categoryName}`;

        const wrapperElement = document.querySelector('.wrapper');
        wrapperElement.appendChild(category);
        console.log(categories[i].categoryName);
    }
}
getData();


