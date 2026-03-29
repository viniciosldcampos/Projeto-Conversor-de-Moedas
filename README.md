<h1>💱 Conversor de Moedas</h1>

<p>
Aplicação web desenvolvida com <strong>HTML, CSS e JavaScript</strong> que permite converter valores de 
<strong>Real Brasileiro (BRL)</strong> para <strong>Dólar (USD)</strong>, <strong>Euro (EUR)</strong> e 
<strong>Libra (GBP)</strong>.
</p>
<hr>

<h2>📌 Objetivo</h2>
<p>
Projeto desenvolvido com objetivo de praticar manipulação do DOM, lógica de programação 
e construção de interfaces dinâmicas com JavaScript puro.
</p>
<hr>

<h2>🧑‍💻 Tecnologias Utilizadas</h2>
<ul>
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript</li>
</ul>
<hr>

<h2>🚀 Demonstração</h2>
<p>
O usuário insere um valor em Real e seleciona a moeda desejada. O sistema realiza a conversão automaticamente 
e atualiza a interface dinamicamente.
</p>
<hr>

<h2>📊 Fluxo da Aplicação</h2>
<ol>
<li>Usuário digita valor</li>
<li>Seleciona moeda</li>
<li>Clica em converter</li>
<li>JavaScript executa cálculo</li>
<li>DOM é atualizado</li>
<li>Valor convertido exibido</li>
</ol>
<hr>

<h2>🧩 Conceitos Aplicados</h2>
<ul>
<li>Manipulação do DOM</li>
<li>Eventos JavaScript</li>
<li>Funções</li>
<li>Condicionais</li>
<li>Formatação de moeda</li>
<li>Boas práticas JavaScript</li>
</ul>
<hr>

<h2>🧠 Arquitetura do Projeto</h2>

<p>O projeto segue uma arquitetura simples baseada em:</p>

<ul>
<li><strong>HTML</strong> — Estrutura da interface</li>
<li><strong>CSS</strong> — Estilização</li>
<li><strong>JavaScript</strong> — Lógica e manipulação do DOM</li>
</ul>
<hr>

<h2>📁 Estrutura do Projeto</h2>
<pre>
📁 conversor-moedas
 ├── index.html
 ├── style.css
 ├── scripts.js
 └── 📁 assets
     ├── logo.gif
     ├── moeda-real.png
     ├── moeda-dolar.png
     ├── moeda-euro.png
     ├── moeda-libra.png
     └── arrow.png
</pre>
<hr>

<h2>🧱 Estrutura HTML</h2>

<h3>Container Principal</h3>

<p>
O elemento <code>&lt;main&gt;</code> atua como container principal da aplicação:
</p>

<pre>
&lt;main class="container"&gt;
</pre>

<p>
Essa abordagem melhora a semântica e organização da interface.
</p>
<hr>

<h3>Seleção de Moedas</h3>

<h4>Moeda de Origem</h4>

<pre>
&lt;select&gt;
&lt;option value=''&gt;R$ Real Brasileiro&lt;/option&gt;
&lt;/select&gt;
</pre>

<p>
A moeda de origem está fixa em Real Brasileiro.
</p>

<h4>Moeda de Destino</h4>

<pre>
&lt;select id='currency-select'&gt;
&lt;option value='euro'&gt;€ Euro&lt;/option&gt;
&lt;option value='dolar'&gt;US$ Dólar americano&lt;/option&gt;
&lt;option value='libra'&gt;£ Libra&lt;/option&gt;
&lt;/select&gt;
</pre>

<p>
Este elemento permite selecionar a moeda desejada para conversão.
</p>

<hr>

<h3>Campo de Entrada</h3>

<pre>
&lt;input type='text' id='input-currency' placeholder='R$ 1.000,00'&gt;
</pre>

<p>
Responsável por receber o valor digitado pelo usuário.
</p>

<hr>

<h3>Área de Conversão</h3>

<h4>Valor de Origem</h4>

<pre>
&lt;p class='convertValue'&gt;R$0,00&lt;/p&gt;
</pre>

<h4>Valor Convertido</h4>

<pre>
&lt;p class='convertedValue'&gt;R$0,00&lt;/p&gt;
</pre>

<p>
Esses elementos são atualizados dinamicamente via JavaScript.
</p>

<hr>

<h3>Botão de Conversão</h3>

<pre>
&lt;button class='convert-button'&gt;CONVERTER&lt;/button&gt;
</pre>

<p>
Responsável por disparar o evento de conversão.
</p>

<hr>

<h2>⚙️ Lógica JavaScript</h2>

<h3>Seleção de Elementos DOM</h3>

<pre>
const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('#currency-select');
</pre>

<p>
Captura elementos essenciais para manipulação dinâmica.
</p>

<hr>

<h3>Função convertValues()</h3>

<p>
Responsável por realizar a conversão de moedas.
</p>

<h4>Captura do Valor</h4>

<pre>
const inputCurrencyValue = document.getElementById('input-currency').value;
</pre>

<h4>Formatação do Valor em Real</h4>

<pre>
new Intl.NumberFormat('pt-br', {
style: 'currency',
currency: 'BRL'
})
</pre>

<p>
Utiliza a API <strong>Intl.NumberFormat</strong> para formatar valores monetários.
</p>

<hr>

<h3>Valores das Moedas</h3>

<pre>
let dolarToday = 5.26;
let euroToday = 6.04;
let libraToday = 6.97;
</pre>

<p>
Valores fixos utilizados como base de conversão.
</p>

<hr>

<h3>Estrutura Condicional</h3>

<p>
Define qual moeda será utilizada:
</p>

<pre>
if (currencySelect.value == 'dolar')
</pre>

<p>
Dependendo da moeda selecionada, o cálculo é executado.
</p>

<hr>

<h3>Função changeCurrency()</h3>

<p>
Responsável por:
</p>

<ul>
<li>Alterar nome da moeda</li>
<li>Trocar imagem</li>
<li>Atualizar valor automaticamente</li>
</ul>

<pre>
function changeCurrency()
</pre>

<hr>

<h3>Eventos</h3>

<h4>Evento do botão</h4>

<pre>
convertButton.addEventListener('click', convertValues);
</pre>

<h4>Evento do select</h4>

<pre>
currencySelect.addEventListener('change', changeCurrency);
</pre>

<p>
Eventos responsáveis pela interação do usuário.
</p>

<hr>

<h2>🚀 Melhorias Futuras</h2>

<ul>
<li>Integração com API de câmbio</li>
<li>Conversão automática ao digitar</li>
<li>Validação de input</li>
<li>Modo dark</li>
<li>Mais moedas</li>
<li>Responsividade avançada</li>
</ul>
