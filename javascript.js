const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function (params) {

    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'


}

/*scroll view*/

// Select all links with href starting with '#'
const links = document.querySelectorAll('a[href^="#"]');

// Add click event listener to each link
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default jump to the anchor link

        const targetId = link.getAttribute('href').slice(1); // Get the target section id
        const targetElement = document.getElementById(targetId); // Get the target section element

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Smooth scroll
            });
        }
    });
});

