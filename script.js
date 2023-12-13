function getData() {
    const dataProducts = './products.json';

    fetch(dataProducts)
    .then(response => {
        return response.json();
    })
    .then(data => {
        data;
        createWrapper();
        createContainerCategory();
        createCategory(data);
        createProductBlock();
        // createProductBlock(data);
    })
}

function createWrapper() {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.innerHTML = ``;

    const bodyElement = document.body;
    bodyElement.insertAdjacentElement('afterbegin' ,wrapper);
}

function createContainerCategory() {
    const categories = document.createElement("div");
    categories.className = "categories";
    categories.innerHTML = ``;

    const wrapperElement = document.querySelector('.wrapper');
    wrapperElement.insertAdjacentElement('afterbegin', categories);
}

function createCategory(data) {
    const categories = data.categories;

    for (let i = 0; i < categories.length; i++) {
        const category = document.createElement("div");
        category.className = `categories__item categories__item_${categories[i].categoryId}`;
        category.innerHTML = `${categories[i].categoryName}`;

        const containerElement = document.querySelector('.categories');
        containerElement.insertAdjacentElement('afterbegin', category);
    }

}

function createProductBlock() {
    const categoryBlock = document.createElement("div");
    categoryBlock.className = "category-block";
    categoryBlock.innerHTML = ``;

    const wrapperElement = document.querySelector('.wrapper');
    wrapperElement.insertAdjacentElement('beforeend', categoryBlock);
}

// function createProductBlocks() {
//     const categoryBlock = document.createElement("div");
//     categories.className = "categories";
//     categories.innerHTML = ``;

//     const wrapperElement = document.querySelector('.wrapper');
//     wrapperElement.appendChild(categories);
// }

// function createProductElements(data) {
//     const categoriesBlock = data.products;

//     for (let i = 0; i < categoriesBlock.length; i++) {     
// // dynamic change of categories when adding a new product category
//         for (let j = 1; j <= data.categories.length; j++) {

//             if (categoriesBlock[i].categoryId === j) {
//                 console.log(categoriesBlock[i]);    
//             }

//         }

//     }

// }

getData();


