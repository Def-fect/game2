document.querySelector('main .fa-caret-down').addEventListener('mouseover', (evt) => {
    if (document.querySelector('header').classList.contains('navigation')) {
        document.querySelector('.navigation').classList.remove('navigation')
        document.querySelector('header').classList.add('navigation-grid')
        document.querySelector('main i').classList.remove('fa-caret-down')
        document.querySelector('main i').classList.add('fa-caret-up')

    }
    else {
        document.querySelector('header').classList.remove('navigation-grid');        
        document.querySelector('header').classList.add('navigation')    
        document.querySelector('main i').classList.remove('fa-caret-up')    
        document.querySelector('main i').classList.add('fa-caret-down')
    }  
});

document.addEventListener('DOMContentLoaded', () => {
    // ESC-näppäimen toiminta
    document.addEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
            evt.preventDefault();

            // Check which dialog is open
            if (newGameDialog.open) {
                newGameDialog.close();
                mainMenu.showModal();
            }
            else if (loadGameDialog.open) {
                loadGameDialog.close();
                mainMenu.showModal();
            }
            else if (!mainMenu.open) {
                mainMenu.showModal();
            }
            else {
                mainMenu.close();
            }
        }
    });
});