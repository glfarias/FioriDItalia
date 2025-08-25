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
    sectionContainer.innerHTML = ''
    SECTIONS.forEach(section => {
        renderSections(section)
    })
    addListenersToSections()
}

function renderSections(section) {
    const sectionContainer = document.querySelector('.section-container')

    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('section');
    sectionDiv.dataset.target = `${section.en}`;

    const img = document.createElement('img');
    img.src = `assets/img/${section.en}.jpeg`;

    const p = document.createElement('p')
    p.innerText = `${section.es.toUpperCase()}`

    sectionDiv.appendChild(img)
    sectionDiv.appendChild(p)

    sectionContainer.appendChild(sectionDiv);
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



function loadProducts() {
    SECTIONS.forEach(section => {
        renderProducts(section)
    })
    addListenersToProducts()
}

function renderProducts(section) {
    const tempFragment = document.createDocumentFragment();
    const productsContainer = document.querySelector('.products-container');

    // RENDER SECTION TITLE (DIV WITH ID AND PARAGRAPH WITH TITLE)
    const sectionDiv = document.createElement('div');
    sectionDiv.id = `${section.en}`

    const sectionDivP = document.createElement('p')
    sectionDivP.textContent = `${section.es.toUpperCase()}`

    sectionDiv.appendChild(sectionDivP)
    productsContainer.appendChild(sectionDiv)


    // ORGANIZE ELEMENTS AND STORES IT IN A TEMP FRAGMENT
    PRODUCTS[section.en].forEach(element => {

        const img = document.createElement('img');
        img.src = `assets/img/${element.fileName}.jpeg`
        img.classList.add('product-img')

        const titleDescriptionContainerDiv = document.createElement('div');
        titleDescriptionContainerDiv.classList.add('title-description-container')

        const productTitleP = document.createElement('p');
        productTitleP.classList.add('product-title');
        productTitleP.textContent = `${element.title}`;

        const productDescriptionP = document.createElement('p');
        productDescriptionP.classList.add('product-description');
        productDescriptionP.textContent = `${element.description}`;

        titleDescriptionContainerDiv.appendChild(productTitleP);
        titleDescriptionContainerDiv.appendChild(productDescriptionP);

        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.appendChild(img)
        productDiv.appendChild(titleDescriptionContainerDiv)

        tempFragment.appendChild(productDiv)
    })

    // AT THE END OF THE LOOPS, TEMPFRAGMENT IS THE WHOLE STRUCTURE
    // ADDS TEMPFRAGMENT TO PRODUCTSCONTAINER ONLY ONCE, TO AVOID REFLOW/REPAINT
    productsContainer.appendChild(tempFragment)
}

function addListenersToProducts() {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
        product.addEventListener('click', (click) => {
            const cartIcon = document.getElementById('cart-icon')
            const cartCounter = document.getElementById('cart-counter')
            
            setTimeout(() => {
                cartIcon.style.animation = '';
            }, 1500);
            
            product.classList.toggle('blur')
            setTimeout(() => {
                if (product.classList.contains('blur')) {
                    cartIcon.style.animation = 'add .75s forwards';
                    cartCounter.textContent++
                } else {
                    cartIcon.style.animation = 'drop .75s';
                    cartCounter.textContent--
                }
            }, 750);
        })
    })

}



function scrollIntoSection(sectionId) {
    const section = document.getElementById(`${sectionId}`);
    section.scrollIntoView({ behavior: "smooth"})
}



loadSections()
loadProducts()