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
    'Co': '#1c3f5f',  // Cobalto (Azul Cobalto)
    'Ta': '#808080',
    'Nd': '#808080',
    'Zn': '#bac4c8',
    'Mn': '#494d4b',
    'Ti': '#5b798e',
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
        case 'Co':
            conteudo = `
                <h2>Cobalto (Co)</h2>
                <p><strong>Número Atômico:</strong> 27</p>
                <p><strong>Função no celular:</strong> Essencial para alimentar nossa tecnologia moderna. O metal é comumente usado para fabricar baterias de íons de lítio, que são encontradas em itens como smartphones.</p>
                <p><strong>Propriedades:</strong> Semimetal, essencial para a eletrônica e tecnologia de semicondutores.</p>
                <p><strong>Curiosidades:</strong> seu nome vem do alemão "kobold", que significa "duende" ou "espírito travesso"</p>
                `;
                break;
        case 'Ta':
            conteudo = `
                <h2>Tântalo (Ta)</h2>
                <p><strong>Número Atômico:</strong> 73</p>
                <p><strong>Função no celular:</strong> Usado em capacitores, componentes essenciais para a estabilidade e funcionamento da eletrônica.</p>
                <p><strong>Propriedades:</strong> Semimetal, Esses capacitores são essenciais para armazenar e liberar energia elétrica de forma eficiente, permitindo que os dispositivos sejam mais compactos, rápidos e duráveis, além de melhorarem o desempenho da bateria.</p>
                <p><strong>Curiosidades:</strong> O tântalo é extremamente resistente à corrosão, tanto que nem mesmo o ácido mais forte, o ácido fluorídrico (HF), consegue dissolvê-lo facilmente.</p>
                `;
                break;
        case 'Nd':
            conteudo = `
                <h2>Neodímio (Nd)</h2>
                <p><strong>Número Atômico:</strong> 60</p>
                <p><strong>Função no celular:</strong> Um dos elementos das terras raras, utilizado em imãs para alto-falantes e motores.</p>
                <p><strong>Propriedades:</strong> Lantanídeo, Esses imãs são essenciais em motores elétricos, discos rígidos, fones de ouvido, alto-falantes e até em turbinas eólicas.</p>
                <p><strong>Curiosidades:</strong> Apesar de seu nome, o neodímio não é realmente "raro", ele é mais abundante na crosta terrestre do que o ouro! No entanto, sua extração e separação de outros elementos são difíceis, o que o torna valioso.</p>
                `;
                break;
        case 'Zn':
            conteudo = `
                <h2>Zinco (Zn)</h2>
                <p><strong>Número Atômico:</strong> 30</p>
                <p><strong>Função no celular:</strong> Encontrado em alguns circuitos e componentes eletrônicos, além de ser usado no revestimento de outros metais para evitar corrosão.</p>
                <p><strong>Propriedades:</strong> O zinco é um metal essencial usado principalmente para galvanização, um processo que protege o ferro e o aço contra a corrosão, aumentando sua durabilidade.</p>
                <p><strong>Curiosidades:</strong> O zinco é um dos poucos metais que, quando dobrado, emite um som característico chamado "grito do zinco". Esse som ocorre devido à fricção entre os cristais internos do metal ao serem deformados.</p>
                `;
                break;
        case 'Mn':
            conteudo = `
                <h2>Manganês (Mn)</h2>
                <p><strong>Número Atômico:</strong> 25</p>
                <p><strong>Função no celular:</strong> Usado em algumas baterias de lítio, melhorando a estabilidade e eficiência.</p>
                <p><strong>Propriedades:</strong> utilizado em baterias</p>
                <p><strong>Curiosidades:</strong> O manganês é tão importante para o corpo humano quanto para a indústria! Ele ajuda na formação dos ossos, na cicatrização e no metabolismo. No entanto, em excesso, pode ser tóxico e causar problemas neurológicos semelhantes ao Parkinson.</p>
                `;
                break;
        case 'Ti':
            conteudo = `
                <h2>Titânio (Ti)</h2>
                <p><strong>Número Atômico:</strong> 22</p>
                <p><strong>Função no celular:</strong> Usado em algumas ligas para componentes internos e externos devido à sua durabilidade e resistência à corrosão.</p>
                <p><strong>Propriedades:</strong> conhecido por sua alta resistência, baixa densidade e resistência à corrosão, sendo amplamente usado em indústrias aeroespacial, médica (implantes e próteses) e até em equipamentos esportivos.</p>
                <p><strong>Curiosidades:</strong>  O titânio é tão resistente à corrosão que pode permanecer intacto até mesmo na água do mar. Por isso, é usado em embarcações e até em estruturas subaquáticas para evitar ferrugem e degradação!</p>
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
