document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const dropdown = document.querySelectorAll('.dropdown-menu');
    const tema = document.getElementById('cores');
    let escuro = false;

    // Carregar o tema armazenado
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        themeStylesheet.setAttribute('href', storedTheme);
        updateButtonState(storedTheme);
        updateNavbarTogglerStyles(storedTheme);
        updateDropdownStyle(storedTheme);
    }

    verificarPagina();

    button.addEventListener('click', () => {
        const currentTheme = themeStylesheet.getAttribute('href');
        const newTheme = currentTheme === 'css/main_css.css' ? 'css/dark_css.css' : 'css/main_css.css';
        themeStylesheet.setAttribute('href', newTheme);
        updateButtonState(newTheme);
        updateNavbarTogglerStyles(newTheme);
        updateDropdownStyle(newTheme);
        escuro = newTheme === 'css/dark_css.css';
        // Salvar a preferência no localStorage
        localStorage.setItem('theme', newTheme);
        verificarPagina();

    });

    function updateButtonState(theme) {
        if (theme === 'css/main_css.css') {
            button.classList.remove('btn-dark');
            button.classList.add('btn-light');
            escuro = false;
        } else {
            button.classList.remove('btn-light');
            button.classList.add('btn-dark');
            escuro = true;
        }
    }

    function updateNavbarTogglerStyles(theme) {
        if (theme === 'css/main_css.css') {
            navbarToggler.classList.remove('navbar-dark');
            navbarToggler.classList.add('navbar-light');
            escuro = false;
        } else {
            navbarToggler.classList.remove('navbar-light');
            navbarToggler.classList.add('navbar-dark');
            escuro = true;
        }
    }
    function updateDropdownStyle(theme) {
        dropdown.forEach( menu => {
            if (theme === 'css/main_css.css') {
                menu.classList.remove('dropdown-menu-dark')
                menu.classList.add('dropdown-menu-light')
                escuro = false;
            } else {
                menu.classList.remove('dropdown-menu-light')
                menu.classList.add('dropdown-menu-dark')
                escuro = true;
            }
        });
    }
    function verificarPagina() {
        const caminhoAtual = window.location.pathname;
        const nomePagina = caminhoAtual.split('/').pop();

        if (nomePagina === 'index.html') {
            if (escuro) {
                tema.textContent = `
            body, article {
				background-color: #303029;
				color: white;
			}
			header, footer {
				background-color: #445f3e;
				color: white;
			}
			nav {
				background-color: #1b170e;
			}
                .list-group, .list-group-flush, .list-group-item {
				background-color: #303029 !important;
                color: white;
			} 
                `;} else {
                tema.textContent = `
            body, article {
				background-color: #FEFAE0;
			}
			header, footer {
				background-color: #597E52;
				color: white;
			}
			nav {
				background-color: #C6A969;
			}
            .list-group, .list-group-flush, .list-group-item {
				background-color: #FEFAE0 !important;
			} 
                `;
            }
        }
        if (nomePagina === 'eletronico.html') {
            if (escuro) {
                tema.textContent = `
            body, article {
                background-color: #231d2e;
                color: white;
            }
            header, footer {
                background-color: #4f3e5f;
                color: white;
            }
            nav {
                background-color: #131314;
            }
                `;} else {
                tema.textContent = `
            body, article {
                background-color: #faf7ff;
            }
            header, footer {
                background-color: #69527e;
                color: white;
            }
            nav {
                background-color: #9f83d3;
            }
                `;
            }
        }
        if (nomePagina === 'papel.html') {
            if (escuro) {
                tema.textContent = `
            body, article {
			  background-color: #243b50;
			  color: rgb(233, 239, 247);
			}
			header, footer {
			  background-color: #356892;
			  color: white;
			}
			nav {
			  background: #121f29;
			}
                `;} else {
                tema.textContent = `
            body, article {
			  background-color: #F6F4EB
			}
			header, footer {
			  background-color: #4682A9;
			  color: white;
			}
			nav {
			  background: #72a7db;
			}
                `;
            }
        }
        if (nomePagina === 'plastico.html') {
            if (escuro) {
                tema.textContent = `
            body, article {
			  background-color: #291313;
			  color: #e9d5d5;
			}
			
			header, footer {
			  background-color: #700909;
			  color: #ffecec;
			}
			
			nav {
			  background: #1f0606;
			}
                `;} else {
                tema.textContent = `
            body, article {
			  background-color: #ffd1d1
			}
			
			header, footer {
			  background-color: #ee1010;
			  color: white;
			}
			
			nav {
			  background: #fe2e2e;
			}
                `;
            }
        }
        if (nomePagina === 'lixoorganico.html') {
            if (escuro) {
                tema.textContent = `
            body, article {
			  background-color: #2b1804;
			  color: #faede8;
			}
			
			header, footer {
			  background-color: #613101;
			  color: white;
			}
			
			nav {
			  background: #1d0d02;
			}
                `;} else {
                tema.textContent = `
            body, article {
			  background-color: #F5CCA0;
			}
			
			header, footer {
			  background-color: #964b00;
			  color: white;
			}
			
			nav {
			  background: #a7521a;
			}
                `;
            }
        }
        if (nomePagina === 'metal.html') {
            if (escuro) {
                tema.textContent = `
            body, article {
			  background-color: #312600;
			  color: #e0d7c1;
			}
			header, footer {
			  background-color: #927000;
			  color: #fffaf0;
			}
			nav {
			  background: #352401;
			}
                `;} else {
                tema.textContent = `
            body, article {
			  background-color: #fff2cc;
			  color: #362500;
			}
			header, footer {
			  background-color: #F9D00F;
			  color: #291c00;
			}
			nav {
			  background: #F0AE2C;
			}
                `;
            }
        }
        if (nomePagina === 'vidro.html') {
            if (escuro) {
                tema.textContent = `
            body, article {
			  background-color: #0b1f08;
			  color: #e9ffe6;
			}
			header, footer {
			  background-color: #23531c;
			  color: white;
			}
			nav {
			  background: #061802;
			}
                `;} else {
                tema.textContent = `
            body, article {
			  background-color: #dcf3d8;
			  color: #030f01;
			}
			header, footer {
			  background-color: #45803a;
			  color: white;
			}
			nav {
			  background: #6cb95d;
			}
                `;
            }
        }
    }
});
//-------------------------------------------------------------------------

const tooltipTriggerList = document.querySelectorAll('[data-meutooltip="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

