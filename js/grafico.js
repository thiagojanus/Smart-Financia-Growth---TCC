// Dados simulados
const educacaoFinanceiraData = [
    { regiao: 'Norte', nivel: 2.3 },
    { regiao: 'Nordeste', nivel: 3.9 },
    { regiao: 'Centro-Oeste', nivel: 5.9 },
    { regiao: 'Sudeste', nivel: 3.5 },
    { regiao: 'Sul', nivel: 1.2 },
];

const endividamentoData = [
    { ano: 2016, percentual: 58.7 },
    { ano: 2017, percentual: 58.9 },
    { ano: 2018, percentual: 60.7 },
    { ano: 2019, percentual: 64.7 },
    { ano: 2020, percentual: 66.5 },
    { ano: 2021, percentual: 70.9 },
    { ano: 2022, percentual: 77.9 },
];

const alfabetizacaoFinanceiraData = [
    { pais: 'Brasil', pontuacao: 46.37 },
    { pais: 'Argentina', pontuacao: 61 },
    { pais: 'Chile', pontuacao: 67 },
    { pais: 'Colômbia', pontuacao: 56 },
    { pais: 'Equador', pontuacao: 46.37 },
    { pais: 'Peru', pontuacao: 57 },
    { pais: 'Uruguai', pontuacao: 64 },
    { pais: 'Paraguai', pontuacao: 32.84 },
];

const educacaoFinanceiraImpactoData = [
    { aspecto: 'Poupança', comEducacao: 29, semEducacao: 69 },
    { aspecto: 'Investimento', comEducacao: 42, semEducacao: 58 },
    { aspecto: 'Controle de Gastos', comEducacao: 53, semEducacao: 47 },
    { aspecto: 'Planejamento Financeiro', comEducacao: 82.3, semEducacao: 19.5 },
    { aspecto: 'Orçamento', comEducacao: 53.9, semEducacao: 45.8 },
];

const dicasFinanceiras = [
    
];

const cursosEducacaoFinanceira = [
    
];

const glossarioFinanceiro = [
   
];

// Funções de inicialização
function initCharts() {
    // Gráfico de Educação Financeira por Região
    new Chart(document.getElementById('educacao-financeira-chart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: educacaoFinanceiraData.map(d => d.regiao),
            datasets: [{
                label: 'Nível de Educação  Financeira',
                data: educacaoFinanceiraData.map(d => d.nivel),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });

    // Gráfico de Endividamento
    new Chart(document.getElementById('endividamento-chart').getContext('2d'), {
        type: 'line',
        data: {
            labels: endividamentoData.map(d => d.ano),
            datasets: [{
                label: 'Percentual de Endividamento',
                data: endividamentoData.map(d => d.percentual),
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Impacto da Educação Financeira
    new Chart(document.getElementById('impacto-educacao-chart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: educacaoFinanceiraImpactoData.map(d => d.aspecto),
            datasets: [
                {
                    label: 'Com Educação Financeira',
                    data: educacaoFinanceiraImpactoData.map(d => d.comEducacao),
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
                {
                    label: 'Sem Educação Financeira',
                    data: educacaoFinanceiraImpactoData.map(d => d.semEducacao),
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    function initDicasFinanceiras() {
        const list = document.getElementById('dicas-financeiras');
        dicasFinanceiras.forEach(dica => {
            const li = document.createElement('li');
            li.textContent = dica;
            list.appendChild(li);
        });
    }
    
    function initCursosEducacaoFinanceira() {
        const tbody = document.querySelector('#cursos-table tbody');
        cursosEducacaoFinanceira.forEach(curso => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${curso.nome}</td>
                <td>${curso.duracao}</td>
                <td>${curso.nivel}</td>
            `;
            tbody.appendChild(tr);
        });
    }
    function initGlossarioFinanceiro() {
        const list = document.getElementById('glossario-financeiro');
        glossarioFinanceiro.forEach(item => {
            const dt = document.createElement('dt');
            dt.textContent = item.termo;
            const dd = document.createElement('dd');
            dd.textContent = item.definicao;
            list.appendChild(dt);
            list.appendChild(dd);
        });
    }
 
 
}

function initDicasFinanceiras() {
    const list = document.getElementById('dicas-financeiras');
    dicasFinanceiras.forEach(dica => {
        const li = document.createElement('li');
        li.textContent = dica;
        list.appendChild(li);
    });
}

function initCursosEducacaoFinanceira() {
    const tbody = document.querySelector('#cursos-table tbody');
    cursosEducacaoFinanceira.forEach(curso => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${curso.nome}</td>
            <td>${curso.duracao}</td>
            <td>${curso.nivel}</td>
        `;
        tbody.appendChild(tr);
    });
}

function initGlossarioFinanceiro() {
    const list = document.getElementById('glossario-financeiro');
    glossarioFinanceiro.forEach(item => {
        const dt = document.createElement('dt');
        dt.textContent = item.termo;
        const dd = document.createElement('dd');
        dd.textContent = item.definicao;
        list.appendChild(dt);
        list.appendChild(dd);
    });
}

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

function initPlanilhaGastos() {
    const table = document.getElementById('planilha-gastos-table').getElementsByTagName('tbody')[0];
    const addButton = document.getElementById('adicionar-categoria');

    addButton.addEventListener('click', () => {
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td><input type="text" placeholder="Nova Categoria"></td>
            <td><input type="number" placeholder="0.00" step="0.01" min="0"></td>
        `;
        addInputListeners(newRow);
        updateTotal();
    });

    function addInputListeners(row) {
        const input = row.getElementsByTagName('input')[1];
        input.addEventListener('input', updateTotal);
    }

    function updateTotal() {
        let total = 0;

        for (let i = 0; i < table.rows.length; i++) {
            const row = table.rows[i];
            const value = parseFloat(row.cells[1].getElementsByTagName('input')[0].value) || 0;
            total += value;
        }

        document.getElementById('total-gasto').textContent = total.toFixed(2);
    }
}

function initQuizFinanceiro() {
    const quizContainer = document.getElementById('quiz-container');
    const perguntas = [
        {
            pergunta: "1) O que é um orçamento financeiro pessoal?",
            opcoes: [
                "Um empréstimo bancário",
                "Uma ferramenta para controlar receitas e despesas",
                "Um tipo de investimento",
                "Uma conta poupança"
            ],
            respostaCorreta: 1,
            explicacao: "Um orçamento financeiro pessoal é uma ferramenta essencial para controlar entradas e saídas de dinheiro."
        },
        {
            pergunta: "2) Qual é a melhor estratégia para começar a poupar dinheiro?",
            opcoes: [
                "Gastar todo o salário e poupar o que sobrar",
                "Separar uma parte do salário assim que receber",
                "Fazer empréstimos para investir",
                "Esperar ter um salário maior"
            ],
            respostaCorreta: 1,
            explicacao: "O ideal é separar uma parte do salário logo quando receber, antes de começar a gastar."
        },
        {
            pergunta: "3) O que é taxa SELIC?",
            opcoes: [
                "Um tipo de imposto",
                "Taxa de câmbio do dólar",
                "Taxa básica de juros da economia",
                "Taxa de rendimento da poupança"
            ],
            respostaCorreta: 2,
            explicacao: "A SELIC é a taxa básica de juros da economia brasileira, definida pelo Banco Central."
        },
        {
            pergunta: "4) Qual é a diferença entre investimentos de renda fixa e renda variável?",
            opcoes: [
                "Renda fixa tem rendimento conhecido, renda variável não",
                "Renda fixa é sempre mais rentável",
                "Renda variável não tem riscos",
                "Não há diferença entre eles"
            ],
            respostaCorreta: 0,
            explicacao: "Na renda fixa, você sabe previamente o rendimento ou sua forma de cálculo, enquanto na renda variável o retorno é imprevisível."
        },
        {
            pergunta: "5) O que é uma dívida boa?",
            opcoes: [
                "Dívida para comprar um carro usado",
                "Dívida para investir em educação",
                "Dívida de cartão de crédito",
                "Dívida com juros altos"
            ],
            respostaCorreta: 1,
            explicacao: "Uma dívida boa é aquela que gera retorno, como um empréstimo para financiar a educação, que pode levar a melhores oportunidades de trabalho."
        },
        {
            pergunta: "6) Qual é a função de um fundo de emergência?",
            opcoes: [
                "Investir em ações",
                "Cobrir despesas inesperadas",
                "Comprar imóveis",
                "Pagar contas mensais"
            ],
            respostaCorreta: 1,
            explicacao: "Um fundo de emergência serve para cobrir despesas inesperadas, garantindo segurança financeira em situações imprevistas."
        },
        {
            pergunta: "7) O que caracteriza um investimento de risco?",
            opcoes: [
                "Rendimento garantido",
                "Possibilidade de perda do capital investido",
                "Taxa de juros fixa",
                "Investimento em imóveis"
            ],
            respostaCorreta: 1,
            explicacao: "Investimentos de risco são aqueles que podem levar à perda do capital investido, como ações ou criptomoedas."
        },
        {
            pergunta: "8) O que é o conceito de 'juros simples'?",
            opcoes: [
                "Juros calculados sobre o capital inicial apenas",
                "Juros que aumentam a cada mês",
                "Juros sobre juros acumulados",
                "Taxa de juros fixa para empréstimos"
            ],
            respostaCorreta: 0,
            explicacao: "Os juros simples são calculados apenas sobre o capital inicial, sem considerar os juros acumulados ao longo do tempo."
        },
        {
            pergunta: "9) Como a educação financeira pode impactar sua vida?",
            opcoes: [
                "Aumenta despesas mensais",
                "Ajuda a tomar decisões financeiras mais informadas",
                "Elimina a necessidade de poupança",
                "Reduz o conhecimento sobre investimentos"
            ],
            respostaCorreta: 1,
            explicacao: "Na renda fixa, você sabe previamente o rendimento ou sua forma de cálculo, enquanto na renda variável o retorno é imprevisível."
        },
        {
            pergunta: "10) O que é um cartão de crédito?",
            opcoes: [
               "Uma forma de empréstimo",
                "Uma conta para guardar dinheiro",
                "Um tipo de investimento",
                "Um seguro de vida"
            ],
            respostaCorreta: 0,
            explicacao: "Um cartão de crédito é uma forma de empréstimo que permite ao usuário comprar bens e serviços com a promessa de pagamento posterior."
        }
    ];

    let perguntaAtual = 0;
    let pontuacao = 0;

    function mostrarPergunta() {
        const pergunta = perguntas[perguntaAtual];
        quizContainer.innerHTML = `
            <p>${pergunta.pergunta}</p>
            ${pergunta.opcoes.map((opcao, index) => `
                <div>
                    <input type="radio" id="opcao-${index}" name="quiz" value="${index}">
                    <label for="opcao-${index}">${opcao}</label>
                </div>
            `).join('')}
            <button class="btn" id="submit-quiz">Responder</button>
            <p id="quiz-resultado"></p>
            <p id="quiz-status">Pergunta ${perguntaAtual + 1} de ${perguntas.length}</p>
        `;

        document.getElementById('submit-quiz').addEventListener('click', verificarResposta);
    }

    function verificarResposta() {
        const selecionada = document.querySelector('input[name="quiz"]:checked');
        if (selecionada) {
            const resultado = document.getElementById('quiz-resultado');
            const pergunta = perguntas[perguntaAtual];
    
            if (parseInt(selecionada.value) === pergunta.respostaCorreta) {
                resultado.textContent = "Correto! " + pergunta.explicacao;
                resultado.style.color = "green"; // Muda a cor para verde
                resultado.style.fontWeight = "bolder"; // Define a cor da borda como verde
                pontuacao++;
            } else {
                resultado.textContent = `Incorreto. ${pergunta.explicacao}`;
                resultado.style.color = "red"; // Muda a cor para vermelho
                resultado.style.fontWeight = "bolder"; // Define a cor da borda como vermelha
            }
    
            // Desabilitar botão após resposta
            document.getElementById('submit-quiz').disabled = true;
    
            // Aguardar 5 segundos antes de passar para próxima pergunta
            setTimeout(() => {
                perguntaAtual++;
                if (perguntaAtual < perguntas.length) {
                    mostrarPergunta();
                } else {
                    mostrarResultadoFinal();
                }
            }, 6000);
        }
    }

    function mostrarResultadoFinal() {
        const percentualAcerto = (pontuacao / perguntas.length) * 100;
        quizContainer.innerHTML = `
            <h3>Quiz Finalizado!</h3>
            <p>Você acertou ${pontuacao} de ${perguntas.length} perguntas (${percentualAcerto}%)</p>
            <button class="btn" id="reiniciar-quiz">Tentar Novamente</button>
        `;

        document.getElementById('reiniciar-quiz').addEventListener('click', () => {
            perguntaAtual = 0;
            pontuacao = 0;
            mostrarPergunta();
        });
    }

    // Iniciar o quiz
    mostrarPergunta();
}
// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    initDicasFinanceiras();
    initCursosEducacaoFinanceira();
    initGlossarioFinanceiro();
    initTabs();
    initPlanilhaGastos();
    initQuizFinanceiro();
});