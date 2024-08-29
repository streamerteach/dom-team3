window.onload = function () {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        profile.addEventListener('mouseenter', function () {
            effectOn(profile.id);
        });
        profile.addEventListener('mouseleave', function () {
            effectOff(profile.id);
        });
        profile.addEventListener('click', function () {
            editTitle(profile);
        });
    });
};

function effectOn(id) {
    const element = document.getElementById(id);
    element.style.border = "3px solid #3498db";
}

function effectOff(id) {
    const element = document.getElementById(id);
    element.style.border = "none";
}

function editTitle(profile) {
    const newTitle = prompt("Enter new title for " + profile.nextElementSibling.textContent + ":");
    if (newTitle) {
        profile.nextElementSibling.nextElementSibling.textContent = newTitle;
    }
}
