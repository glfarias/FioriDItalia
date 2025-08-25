const SECTIONS = [
    {
        en: 'pizzas',
        es: 'pizzas'
    },
    {
        en: 'calzones',
        es: 'calzones'
    },
    {
        en: 'drinks',
        es: 'bebidas'
    },
    {
        en: 'desserts',
        es: 'postres'
    }
]

const PRODUCTS = {
    pizzas: [
        {
            fileName: 'pizzas',
            title: 'Margherita',
            description: 'Tomate, Mozzarella, Orégano (T.M.O)',
            price: '10E'
        },
        {
            fileName: 'pizzas',
            title: 'Prosciutto',
            description: '(T.M.O), York',
            price: '10E'
        },
        {
            fileName: 'pizzas',
            title: 'Prosciutto Funghi',
            description: '(T.M.O), York, Champiñónes',
            price: '10E'
        },
        {
            fileName: 'pizzas',
            title: 'New York',
            description: '(T.M.O), York, Atún',
            price: '10E'
        },
        {
            fileName: 'pizzas',
            title: 'Energy',
            description: '(T.M.O), Bacon, Pollo, Boloñesa, Chorizo',
            price: '10E'
        }
    ],

    calzones: [
        {
            fileName: 'calzones',
            title: 'Al Gusto del Cliente',
            description: '(T.M.O) + 4 ingredientes elegidos por ti',
            price: '11E'
        },
        {
            fileName: 'calzones',
            title: 'Al Gusto del Chef',
            description: '(T.M.O) + 4 ingredientes elegidos por el Chef',
            price: '11E'
        }
    ],

    drinks: [
        {
            fileName: 'drinks',
            title: 'Coca-Cola',
            description: 'Sabor Original',
            price: '1,50E'
        },
        {
            fileName: 'drinks',
            title: 'Coca-Cola Zero',
            description: 'Sin azúcar',
            price: '1,50E'
        },
        {
            fileName: 'drinks',
            title: 'Coca-Cola Zero Zero',
            description: 'Sin azúcar, sin cafeína',
            price: '1,50E'
        }
    ],

    desserts: [
        {
            fileName: 'desserts',
            title: 'Tarta de Limón',
            description: 'Caseras, hechas al diario con un sabor auténtico refrescante',
            price: '2,50E'
        },
        {
            fileName: 'desserts',
            title: 'Tarta de Maracuyá',
            description: 'Caseras, hechas al diario con un sabor tropical inolvidable',
            price: '2,50E'
        }
    ]
}

function loadSections() {
    const sectionContainer = document.querySelector('.section-container')
    SECTIONS.forEach(section => {
        sectionContainer.innerHTML += `
        <div class="section" data-target="${section.en}">
        <img src="assets/img/${section.en}.jpeg">
        <p>${section.es.toUpperCase()}</p>
      </div>
        `
    })

    addListenersToSections()

}


function addListenersToSections() {
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => {
        section.addEventListener('click', (click) => {
            const sectionClicked = click.currentTarget;
            // const sectionId = sectionClicked.dataset.target;
            const sectionId = sectionClicked.getAttribute('data-target');
            scrollIntoSection(sectionId);
        })
    })
}

function scrollIntoSection(sectionId) {
    const section = document.getElementById(`${sectionId}`);
    section.scrollIntoView({ behavior: "smooth"})
}


function loadProducts() {
    SECTIONS.forEach(section => {
        renderProducts(section)
    })
    addListenersToProducts()
}

function renderProducts(section) {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML +=
        `
            <div id="${section.en}">
                <p>${section.es.toUpperCase()}</p>
            </div>
        `;

    console.log(section)
    PRODUCTS[section.en].forEach(element => {
        productsContainer.innerHTML +=
            `
            <div class="product">

                <img src="assets/img/${element.fileName}.jpeg" alt="" class="product-img">

                <div class="title-description-container">
                    <p class="product-title">${element.title}</p>
                    <p class="product-description">${element.description}</p>
                </div>

            </div>
        `
    })
}

function addListenersToProducts() {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
        product.addEventListener('click', (click) => {
            product.classList.toggle('blur')
        })
    })

}

loadSections()
loadProducts()