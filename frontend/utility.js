// Smooth navigation toggle with animations
document.querySelector('main i').addEventListener('click', (evt) => {
  const header = document.querySelector('header');
  const icon = document.querySelector('main i');

  if (header.classList.contains('navigation-grid')) {
    // Closing animation
    header.style.animation = 'slideUp 0.5s ease-out forwards';

    setTimeout(() => {
      header.classList.remove('navigation-grid');
      header.classList.add('navigation');
      icon.classList.replace('fa-caret-up', 'fa-caret-down');
      header.style.animation = '';
    }, 450);
  } else {
    // Opening animation
    header.classList.remove('navigation');
    header.classList.add('navigation-grid');
    icon.classList.replace('fa-caret-down', 'fa-caret-up');
  }
});


// Add slideUp animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Enhanced dropdown interactions
document.querySelectorAll('nav[title="dropdown"]').forEach((dropdown) => {
  dropdown.addEventListener('mouseenter', () => {
    const dropdownMenu = dropdown.querySelector('.dropdown');
    if (dropdownMenu) {
      dropdownMenu.style.display = 'block';
      dropdownMenu.style.zIndex = '1001'; // Убедитесь, что это установлено
    }
  });

  dropdown.addEventListener('mouseleave', () => {
    const dropdownMenu = dropdown.querySelector('.dropdown');
    if (dropdownMenu) {
      dropdownMenu.style.display = 'none';
    }
  });
});

// Dialog animations
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('close', () => {
    dialog.style.animation = 'modalFadeOut 0.3s ease-out';
    setTimeout(() => {
      dialog.style.animation = '';
    }, 300);
  });
});

const dialogStyle = document.createElement('style');
dialogStyle.textContent = `
    @keyframes modalFadeOut {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.8);
        }
    }
`;
document.head.appendChild(dialogStyle);


//Preventing Quiz & endData dialogs from closing. Enables access to Game Menu.
dialogs = {
  mainMenu : document.querySelector('#mainMenu'),
  newMenu : document.querySelector('#newGameDialog'),
  loadMenu : document.querySelector('#loadGameDialog'),
  endMenu : document.querySelector('.ending-dialog')  
};

document.addEventListener('keydown', (evt) => {

  if (evt.key === 'Escape') {
    evt.preventDefault();

    if(dialogs.loadMenu.open) {
      dialogs.loadMenu.close()
      dialogs.mainMenu.showModal()
    }

    else if (dialogs.newMenu.open) {
      dialogs.newMenu.close()
      dialogs.mainMenu.showModal()  
    }

    else if (dialogs.mainMenu.open) {
      dialogs.mainMenu.close()
    }

    else if (dialogs.endMenu) {
      console.log(`Cant' close!`)
    }

    else {
      dialogs.mainMenu.showModal()
    }
  }

});





