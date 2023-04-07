const dropdownBtn = document.getElementById('dropdown-btn');
const dropdown = document.getElementById('dropdown');
const burgerMenu = document.getElementById('burger_menu');
const header = document.getElementById('header-ul');


dropdownBtn.addEventListener('click' , function() {
    if(dropdown.style.display === 'block'){
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
})


burgerMenu.addEventListener('click', function () {
    if(header.style.display === 'flex'){
        header.style.display = 'none';
    } else {
        header.style.display = 'flex';
    }
})