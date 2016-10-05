class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this.inputQuantidade = $('#quantidade');
        this.inputData = $('#data');
        this.inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();
        let negociacao = new Negociacao(
            new Date(...this.inputData.value
                .split('-')
                .map((item, index) => item - index % 2)),
            this.inputQuantidade.value,
            this.inputValor.value
        );
        console.log(negociacao);
        // adiciona negociação em lista
    }
}