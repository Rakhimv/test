const loader_container = document.querySelector('.loader_container');
const container = document.querySelector('.container');

function init() {
    setTimeout(() => {
        loader_container.style.opacity = 0;
        loader_container.style.display = 'none';

        container.style.display = 'block';
        setTimeout(() => (container.style.opacity = 1), 50);

    }, 2000);
}

init();