/**
 * Classe que representa uma Negociação.
 * 
 * @author Davi Pereira - <pereiradavipe@gmail.com>.
 * @size 28/05/2017.
 */
class Negociacao
{
    constructor(data, quantidade, valor)
    {
        this._data = new Date(data.getTime()); // Novo objeto, para evitar alterações por refência (no frezze deep)
        this._quantidade = quantidade;
        this._valor = valor;

        // Congela o objeto, impedindo alterações nele. Pode checar se um objeto está congelado através do método
        // Object.isFreeze(objeto); O freeze NÃO faz um deep frezer
        Object.freeze(this);
    }  

    // get permite acesso ao objeto, de forma objeto.metodo , retornando o valor do return e evitando 
    // edição do atributo da classe.
    get volume() 
    {
        return this._quantidade * this._valor;
    } 

    get data()
    {
        // retorna um novo objeto para evitar à alteração no objeto da negociação. Através da referência da 
        // data. (no freezer deep)
        return new Date(this._data.getTime());
    }

    get quantidade()
    {
        return this._quantidade;
    }

    get valor()
    {
        return this._valor;
    }
}