class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template() {
        throw new Error('Deve ser implementado');
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }

}