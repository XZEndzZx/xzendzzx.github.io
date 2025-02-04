// Definindo as cores de cada elemento
const elementColors = {
    'Li': '#d50000',  // Lítio (vermelho)
    'Al': '#757575',  // Alumínio (cinza)
    'Cu': '#ff6f00',  // Cobre (laranja)
    'Si': '#616161',  // Silício (cinza escuro)
    'Pb': '#607d8b',  // Chumbo (azul escuro)
    'Fe': '#795548',  // Ferro (marrom)
    'Ag': '#c0ca33',  // Prata (verde amarelado)
    'Au': '#fbc02d',  // Ouro (amarelo)
};

// Função que mostra os detalhes do elemento
function mostrarDetalhes(elemento) {
    const info = document.getElementById('info');
    const buttons = document.querySelectorAll('.element-btn');
    
    // Reseta a classe 'clicked' de todos os botões
    buttons.forEach(button => {
        button.classList.remove('clicked');
        button.style.backgroundColor = 'transparent';
    });
    
    // Marca o botão clicado
    const buttonClicked = document.querySelector(`button[data-element="${elemento}"]`);
    buttonClicked.classList.add('clicked');
    buttonClicked.style.setProperty('--btn-color', elementColors[elemento]); // Aplica a cor dinâmica
    buttonClicked.style.color = '#fff'; // Cor do texto para branco

    let conteudo = "";

    switch(elemento) {
        case 'Li':
            conteudo = `
                <h2>Lítio (Li)</h2>
                <p><strong>Número Atômico:</strong> 3</p>
                <p><strong>Função no celular:</strong> Usado nas baterias dos telefones.</p>
                <p><strong>Propriedades:</strong> Metal leve e altamente reativo, essencial para armazenar energia.</p>
                <p><strong>Curiosidades:</strong> O lítio foi o primeiro metal a ser utilizado em baterias recarregáveis.</p>
            `;
            break;
        case 'Al':
            conteudo = `
                <h2>Alumínio (Al)</h2>
                <p><strong>Número Atômico:</strong> 13</p>
                <p><strong>Função no celular:</strong> Usado no corpo externo e estrutura dos telefones.</p>
                <p><strong>Propriedades:</strong> Metal leve, resistente à corrosão e ótimo condutor de calor.</p>
                <p><strong>Curiosidades:</strong> O alumínio é o metal mais abundante na crosta terrestre.</p>
            `;
            break;
        case 'Cu':
            conteudo = `
                <h2>Cobre (Cu)</h2>
                <p><strong>Número Atômico:</strong> 29</p>
                <p><strong>Função no celular:</strong> Usado nos circuitos elétricos e nas conexões internas.</p>
                <p><strong>Propriedades:</strong> Excelente condutor de eletricidade.</p>
                <p><strong>Curiosidades:</strong> O cobre é reciclável e tem sido usado desde a antiguidade.</p>
            `;
            break;
        case 'Fe':
            conteudo = `
                <h2>Ferro (Fe)</h2>
                <p><strong>Número Atômico:</strong> 26</p>
                <p><strong>Função no celular:</strong> Componentes estruturais e em algumas ligas.</p>
                <p><strong>Propriedades:</strong> Metal forte, comum e amplamente utilizado na indústria.</p>
                <p><strong>Curiosidades:</strong> O ferro é o quarto elemento mais abundante na crosta terrestre.</p>
            `;
            break;
        case 'Pb':
            conteudo = `
                <h2>Chumbo (Pb)</h2>
                <p><strong>Número Atômico:</strong> 82</p>
                <p><strong>Função no celular:</strong> Usado em algumas baterias mais antigas e componentes de proteção.</p>
                <p><strong>Propriedades:</strong> Metal pesado e tóxico, atualmente menos usado por ser perigoso.</p>
                <p><strong>Curiosidades:</strong> O chumbo era usado em pinturas e em gasolina, mas é muito nocivo à saúde.</p>
            `;
            break;
        case 'Ag':
            conteudo = `
                <h2>Prata (Ag)</h2>
                <p><strong>Número Atômico:</strong> 47</p>
                <p><strong>Função no celular:</strong> Usado nos conectores e circuitos eletrônicos.</p>
                <p><strong>Propriedades:</strong> Excelente condutor elétrico e altamente reflexivo.</p>
                <p><strong>Curiosidades:</strong> A prata é usada há milênios para fazer moedas e adornos.</p>
            `;
            break;
        case 'Au':
            conteudo = `
                <h2>Ouro (Au)</h2>
                <p><strong>Número Atômico:</strong> 79</p>
                <p><strong>Função no celular:</strong> Utilizado em componentes eletrônicos e contatos.</p>
                <p><strong>Propriedades:</strong> Metal nobre, altamente resistente à corrosão e oxidação.</p>
                <p><strong>Curiosidades:</strong> O ouro é um dos metais mais valiosos e duráveis conhecidos.</p>
            `;
            break;
        case 'Si':
            conteudo = `
                <h2>Silício (Si)</h2>
                <p><strong>Número Atômico:</strong> 14</p>
                <p><strong>Função no celular:</strong> Usado para compor os chips dos celulares e processadores.</p>
                <p><strong>Propriedades:</strong> Semimetal, essencial para a eletrônica e tecnologia de semicondutores.</p>
                <p><strong>Curiosidades:</strong> O silício é o segundo elemento mais abundante na crosta terrestre.</p>
            `;
            break;
    }

    info.innerHTML = conteudo;
}

// Adicionando eventos de clique aos botões
const buttons = document.querySelectorAll('.element-btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const elemento = e.target.closest('button').getAttribute('data-element');
        mostrarDetalhes(elemento);
    });
});

