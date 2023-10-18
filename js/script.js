let toggleBtn = document.querySelector('.toggle-btn');
let dropDown = document.querySelector('.dropdown');
let toggleIcon = document.querySelector('.toggle-btn i');

toggleBtn.onclick = () => {
    dropDown.classList.toggle('show');

    let isOpen = dropDown.classList.contains('show');

    toggleIcon.classList = isOpen ? "fas fa-times" : "fas fa-bars";
}

document.querySelectorAll('li').forEach(n => n.addEventListener("click", () => {
    dropDown.classList.remove('show');

    let isOpen = dropDown.classList.contains('show');

    toggleIcon.classList = isOpen ? "fas fa-times" : "fas fa-bars";
}))