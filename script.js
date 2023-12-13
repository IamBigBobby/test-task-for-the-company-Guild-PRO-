function getData() {
    const dataProducts = './products.json';

    fetch(dataProducts)
    .then(response => {
        return response.json();
    })
    .then(data => {
        createWrapper();
        createContainerCategory();
        createCategory(data);
        createProductBlock();
        createProductBlockCategories(data);
        createProductElements(data);
        toggleCategories();
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

        if (i === 0) {
            console.log('')
            category.className = `categories__item categories__item_${categories[i].categoryId} categories__item_active`;
        } else {
            category.className = `categories__item categories__item_${categories[i].categoryId}`;
        }

        category.innerHTML = `${categories[i].categoryName}`;

        const containerElement = document.querySelector('.categories');
        containerElement.insertAdjacentElement('beforeend', category);
    }

}

function createProductBlock() {
    const categoryBlock = document.createElement("div");
    categoryBlock.className = "category-block";
    categoryBlock.innerHTML = ``;

    const wrapperElement = document.querySelector('.wrapper');
    wrapperElement.insertAdjacentElement('beforeend', categoryBlock);
}

function createProductBlockCategories(data) {
    const catigoriesLenght = data.categories.length;

    for (let i = 0; i < catigoriesLenght; i++){
        const itemCategoryBlock = document.createElement("div");
        itemCategoryBlock.className = `category-block__item category-block__item${i + 1}`;
        itemCategoryBlock.innerHTML = ``;

        const categoryBlock = document.querySelector('.category-block');
        categoryBlock.insertAdjacentElement('beforeend', itemCategoryBlock);

        if (i > 0) {
            itemCategoryBlock.style.display = 'none';
        }
    }

}

function createProductElements(data) {
    const categoriesBlock = data.products;

    for (let i = 0; i < categoriesBlock.length; i++) {     

        for (let j = 1; j <= data.categories.length; j++) {

            if (categoriesBlock[i].categoryId === j) {

                const categoryItem = document.createElement("div");
                categoryItem.className = `category-block__product-item`;
                categoryItem.innerHTML = `
                <div class="category-block__product-item-img"></div>
                <div class="category-block__product-item-name">
                    ${categoriesBlock[i]["productName"]}
                </div>
                `;

                const categoryBlock = document.querySelector(`.category-block__item${j}`);
                categoryBlock.insertAdjacentElement('beforeend', categoryItem);

            }

        }

    }

}

function toggleCategories() {
    const categories = document.querySelectorAll('.categories__item');
    console.log(categories);
    categories.forEach((category) => {
        category.addEventListener('click', function(event){
            categories.forEach((category) => {
                category.classList.remove('categories__item_active');
            });
            event.target.classList.toggle('categories__item_active');
        });
    });
}

getData();


