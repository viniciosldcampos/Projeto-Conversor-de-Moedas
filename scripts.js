const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('#currency-select');


/* Lógica - Botão Converter*/
function convertValues() {
    const inputCurrencyValue = document.getElementById('input-currency').value;
    const currencyConvertValue = document.getElementsByClassName('convertValue')[0];
    const currencyConvertedValue = document.getElementsByClassName('convertedValue')[0];

    /* Valor do Real - Input*/
    currencyConvertValue.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue);
    
    /*Valor do Dólar e Euro hoje */
    let dolarToday = 5.26;
    let euroToday = 6.04;
    let libraToday = 6.97;
    
    /*Condicional Valor do Select (Dolar, Euro ou Yen) */
    if (currencySelect.value == 'dolar') {
        currencyConvertedValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday);
        
    } else if (currencySelect.value == 'euro') {
        currencyConvertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday);
        
    } else {
        currencyConvertedValue.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday);
    }
}


/* Função para quando mudar as moedas, alterar valores e imagem*/
function changeCurrency() {
    const currencyName = document.getElementsByClassName('converted') [0];
    const currencyImg = document.querySelector('.currency-img2');


    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano';
        currencyImg.src = './assets/moeda-dolar.png';
        
    } else if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro';
        currencyImg.src = './assets/moeda-euro.png';
    } else {
        currencyName.innerHTML = 'Libra';
        currencyImg.src = './assets/moeda-libra.png';
    }

    /* Chamando a função calculo para atualizar o valor quando mudar as moedas */
    convertValues();
}

/* Quando mudar o valor do select a função changeCurrency executa */
currencySelect.addEventListener('change', changeCurrency);

/* Quando o botão é clicado a função convertValues executa */
convertButton.addEventListener('click', convertValues);
