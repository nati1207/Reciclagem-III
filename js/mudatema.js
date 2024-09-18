document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.mudar-tema');
  const themeStylesheet = document.getElementById('theme-stylesheet');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const lists = document.querySelectorAll('.mudacor');
  const dropdown = document.querySelectorAll('.dropdown-menu');
  const tema = document.getElementById('cores');
  const forms = document.querySelectorAll('.corinha')
  let escuro = false;


  // Carregar o tema armazenado
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    themeStylesheet.setAttribute('href', storedTheme);
    updateButtonState(storedTheme);
    updateNavbarTogglerStyles(storedTheme);
    updateDropdownStyle(storedTheme);
    updateListStyle(storedTheme);
    updateFormStyle(storedTheme);
  }

  verificarPagina();
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const currentTheme = themeStylesheet.getAttribute('href');
      const newTheme = currentTheme === 'css/main_css.css' ? 'css/dark_css.css' : 'css/main_css.css';
      themeStylesheet.setAttribute('href', newTheme);
      updateButtonState(newTheme);
      updateNavbarTogglerStyles(newTheme);
      updateDropdownStyle(newTheme);
      updateListStyle(newTheme);
      updateFormStyle(newTheme);
      escuro = newTheme === 'css/dark_css.css';
      // Salvar a preferência no localStorage
      localStorage.setItem('theme', newTheme);
      verificarPagina();
    });
  });

  function updateListStyle(theme) {
    lists.forEach(list => {
      if (theme === 'css/main_css.css') {
        list.classList.remove('text-bg-dark');
        list.classList.add('text-bg-light');
        escuro = false;
      } else {
        list.classList.remove('text-bg-light');
        list.classList.add('text-bg-dark');
        escuro = true;
      }
    });
  }

  function updateFormStyle(theme) {
    forms.forEach(form => {
      if (theme === 'css/main_css.css') {
        form.classList.remove('bg-dark', 'border-secondary', 'text-dark');
        escuro = false;
      } else {
        form.classList.add('bg-dark', 'border-secondary', 'text-dark');
        escuro = true;
      }
    });
  }
  


  function updateButtonState(theme) {
    buttons.forEach(button => {
      if (theme === 'css/main_css.css') {
        button.classList.remove('btn-dark');
        button.classList.add('btn-light');
        escuro = false;
      } else {
        button.classList.remove('btn-light');
        button.classList.add('btn-dark');
        escuro = true;
      }
    });
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
    dropdown.forEach(menu => {
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
                `;
      } else {
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
                `;
      } else {
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
                `;
      } else {
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
                `;
      } else {
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
                `;
      } else {
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
                `;
      } else {
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
      .list-group,
			.list-group-flush,
			.list-group-item {
				background-color: #0b1f08 !important;
        color: white;
			}
                `;
      } else {
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
      .list-group,
			.list-group-flush,
			.list-group-item {
				background-color: #dcf3d8 !important;
			}
                `;
      }
    }
    if (nomePagina === 'contato.html') {
      if (escuro) {
        tema.textContent = `
        .formi {
      background-color: #212529;
      margin: auto;
      width: 600px;
      padding-bottom: 30px;
      border: 1px solid #1b1e22;
      border-radius: 10px;
    }
    input::placeholder {
      color: #b1b1b1 !important;
    }
    .simbolos {
      background-color: #6c747c !important;
      border: 1px solid #6c747c;
      border-radius: 7px;
    }
        `
      } else {
        tema.textContent = `
        .formi {
      background-color: #f8f9fa;
      margin: auto;
      width: 600px;
      padding-bottom: 30px;
      border: 1px solid #cccdce;
      border-radius: 10px;
    }
    .corzinha {
      color: #000 !important;
    }
        `
      }
    }
  }
});

//TOOLTIP-------------------------------------------------------------------------

const tooltipTriggerList = document.querySelectorAll('[data-meutooltip="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//PAGIINATION--------------------------------------------------------------------------------

const ativar = (elemento, pageNumber) => {
  let itemsPG = document.getElementsByClassName("page-item");

  let items = document.getElementsByClassName("card");


  for (i = 0; i < itemsPG.length; i++) {
    itemsPG[i].classList.remove("active");
  }
  elemento.classList.add("active");

  for (i = 0; i < items.length; i++) {
    items[i].classList.add("d-none");
  }
  items[pageNumber - 1].classList.remove("d-none");

  let previousButton = document.getElementsByClassName("previous-button")[0];
  console.log(previousButton)
  if (pageNumber == 1) {
    previousButton.classList.add("disabled")
  }
  else {
    previousButton.classList.remove("disabled")
  }

  let nextButton = document.getElementsByClassName("next-button")[0];
  if (pageNumber == itemsPG.length - 2) {
    nextButton.classList.add("disabled")
  }
  else {
    nextButton.classList.remove("disabled")
  }


}
const Previous = () => {
  let previousButton = document.getElementsByClassName("previous-button")[0];
  if (previousButton.classList.contains("disabled")) {
    return;
  }

  let itemsPG = document.getElementsByClassName("page-item");
  for (i = 0; i < itemsPG.length; i++) {
    let isActive = itemsPG[i].classList.contains("active");
    if (isActive) {
      ativar(itemsPG[i - 1], i - 1)
    }
  }

}
const Next = () => {
  let nextButton = document.getElementsByClassName("next-button")[0];
  if (nextButton.classList.contains("disabled")) {
    return;
  }

  let itemsPG = document.getElementsByClassName("page-item");
  for (i = 0; i < itemsPG.length; i++) {
    let isActive = itemsPG[i].classList.contains("active");
    if (isActive) {
      ativar(itemsPG[i + 1], i + 1)
    }
  }
}

//ALERT----------------------------------------------------------------------------------

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


const alertTrigger = document.getElementById('mudar-tema')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Tema alterado')
  })
}
//TABELA------------------------------------------------------------

const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// 1. Searching for specific data of HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}