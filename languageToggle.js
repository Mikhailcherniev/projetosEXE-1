function Escolher(idioma) {
    fetch(`txt_${idioma}.json`)
        .then(resposta => resposta.json())
        .then(texto => {
            document.getElementById('txtLanguageTest').innerText = texto.txtLanguageTest;
            // document.getElementById('paragrafo2').innerText = texto.paragrafo2;

            // document.getElementById('pergunta1').innerText = texto.pergunta1;
            // document.getElementById('resposta1').innerText = texto.resposta1;

            // document.getElementById('pergunta2').innerText = texto.pergunta2;
            // document.getElementById('resposta2').innerText = texto.resposta2;

            // document.getElementById('pergunta3').innerText = texto.pergunta3;
            // document.getElementById('resposta3').innerText = texto.resposta3;

            // document.getElementById('pergunta4').innerText = texto.pergunta4;
            // document.getElementById('resposta4').innerText = texto.resposta4;
        })

        .catch(error => console.error('Erro buscando textos:', error))
}