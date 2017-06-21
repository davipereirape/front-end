/**
 * Classe que representa uma Negociação.
 * 
 * @author Davi Pereira - <pereiradavipe@gmail.com>.
 * @size 28/05/2017.
 */
class NegociacaoController
{

    constructor()
    {
        let $ = document.querySelector.bind(document); // Joga a função na variável $.

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        Object.freeze(this);
    }

    adiciona(event) 
    {
        event.preventDefault();

        let data = new Date(...this._inputData.value
            .split('-').map((item, indice) => item - indice % 2) ); // utilização do aereo function

        let negociacao = new Negociacao(data, this._inputQuantidade, this._inputValor);
        console.log(negociacao);
    }


}