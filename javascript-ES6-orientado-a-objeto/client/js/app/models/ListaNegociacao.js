/**
 * Classe que representa uma Lista Negociação.
 * 
 * @author Davi Pereira - <pereiradavipe@gmail.com>.
 * @size 30/06/2017.
 */
class ListaNegociacao
{
    constructor()
    {
        this._listaNegociacao = [];
    }

    adiciona(negociacao)
    {
        this._listaNegociacao.push(negociacao);
    }

    get listaNegociacao()
    {
        return [].concat(this._listaNegociacao);
    }

}