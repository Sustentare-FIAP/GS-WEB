async function fetchDataFromAPIs1() {
    const apiURLs = [
        'https://tr.ons.org.br/Content/Get/Geracao_Norte_Eolica_json',
        'https://tr.ons.org.br/Content/Get/Geracao_Nordeste_Eolica_json',
        'https://tr.ons.org.br/Content/Get/Geracao_SudesteECentroOeste_Eolica_json',
        'https://tr.ons.org.br/Content/Get/Geracao_Sul_Eolica_json',
    ];

    const apiLabels = [
        'Energia Eólica Norte',
        'Energia Eólica Nordeste',
        'Energia Eólica Sudeste e Centro-Oeste',
        'Energia Eólica Sul'
    ];

    await fetchAndRender(apiURLs, apiLabels, 'lineChart1');
}

async function fetchDataFromAPIs2() {
    const apiURLs = [
        'https://tr.ons.org.br/Content/Get/Geracao_Norte_Solar_json',
        'https://tr.ons.org.br/Content/Get/Geracao_Nordeste_Solar_json',
        'https://tr.ons.org.br/Content/Get/Geracao_SudesteECentroOeste_Solar_json',
        'https://tr.ons.org.br/Content/Get/Geracao_Sul_Solar_json'
    ];

    const apiLabels = [
        'Energia Solar Norte',
        'Energia Solar Nordeste',
        'Energia Solar Sudeste e Centro-Oeste',
        'Energia Solar Sul'
    ];

    await fetchAndRender(apiURLs, apiLabels, 'lineChart2');
}

async function fetchAndRender(apiURLs, apiLabels, canvasId) {
    try {
        const responses = await Promise.all(apiURLs.map(url => fetch(url)));
        const dataSets = await Promise.all(responses.map(res => res.json()));

        const datasets = dataSets.map((data, index) => {
            const hora = data.map(item => {
                const date = new Date(item.instante);
                return date.toLocaleTimeString([], { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
            });

            const values = data.map(item => item.geracao);

            return {
                label: apiLabels[index],
                data: values,
                borderColor: getRandomColor(),
                backgroundColor: getRandomColor(0.2),
                tension: 0.3,
                borderWidth: 0.7,
            };
        });

        const labels = dataSets[0].map(item => {
            const date = new Date(item.instante);
            return date.toLocaleTimeString([], { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
        });

        updateChart(labels, datasets, canvasId);
    } catch (error) {
        console.error('Erro ao buscar dados das APIs:', error);
    }
}

function updateChart(labels, datasets, canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    const config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Consumo por minuto'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Consumo (MW)'
                    },
                    beginAtZero: true
                }
            }
        }
    };

    new Chart(ctx, config);
}

function getRandomColor(opacity = 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

fetchDataFromAPIs1();
fetchDataFromAPIs2();
