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
        event.preventDefault(); // cancela o evento do botão, (o submit após este tratamento)
        
        let negociacao = new Negociacao(DateHelper.textoParaData(this._inputData.value), this._inputQuantidade, this._inputValor);
        let diaMesAno = DateHelper.dataParaTexto(negociacao.data);

        console.log(diaMesAno);
        console.log(negociacao);

    }
}