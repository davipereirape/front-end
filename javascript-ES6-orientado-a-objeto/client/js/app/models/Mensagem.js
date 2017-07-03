/**
 * Classe que representa uma Mensagem.
 * 
 * @author Davi Pereira - <pereiradavipe@gmail.com>.
 * @size 03/07/2017.
 */
class Mensagem 
{
    constructor(texto='') 
    {
        this._texto = texto;
    }

    get texto()
    {
        return this._texto;
    }

    set texto(texto)
    {
        this._texto = texto;
    }
}