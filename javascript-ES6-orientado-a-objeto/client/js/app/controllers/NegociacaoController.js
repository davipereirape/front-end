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

       // let negociacao = new Negociacao(this._inputData, this._inputQuantidade, this._inputValor);

        console.log(this._inputData.value);
    }


}