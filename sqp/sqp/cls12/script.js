function ToggleAnswer(button) {
    var ansr = button.parentNode.nextElementSibling;

    if (ansr.style.display === 'none') {
        ansr.style.display = 'block';
        button.textContent = 'Hide Answer';
    } else {
        ansr.style.display = 'none';
        button.textContent = 'Show Answer';
    }
}

// Hide all answer sections on page load
window.addEventListener('load', function () {
    var ansrSections = document.querySelectorAll('.ansr');
    ansrSections.forEach(function (ansr) {
        ansr.style.display = 'none';
    });
});



function ToggleExplanation(button) {
    var expp = button.parentNode.nextElementSibling;

    if (expp.style.display === 'none') {
        expp.style.display = 'block';
        button.textContent = 'Hide Explanation';
    } else {
        expp.style.display = 'none';
        button.textContent = 'Show Explanation';
    }
}

// Hide all answer sections on page load
window.addEventListener('load', function () {
    var ansrSections = document.querySelectorAll('.expp');
    exppSections.forEach(function (expp) {
        expp.style.display = 'none';
    });
});
