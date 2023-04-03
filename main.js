const dropdownBtn = document.getElementById('dropdown-btn');
const dropdown = document.getElementById('dropdown');

dropdownBtn.addEventListener('click' , function() {
    if(dropdown.style.display === 'block'){
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
})
