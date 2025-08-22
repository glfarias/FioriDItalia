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
    section.scrollIntoView()
}

loadSections()