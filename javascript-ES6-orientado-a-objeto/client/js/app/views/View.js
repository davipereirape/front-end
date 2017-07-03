/**
 * Classe que representa uma View.
 * 
 * 
 * @author Davi Pereira - <pereiradavipe@gmail.com>.
 * @size 03/07/2017.
 */
class View 
{
    constructor(elemento)
    {
        this._elemento = elemento
    }

    template() 
    {
        throw new Error('O método _template deve ser implementado!');
    }

    update(model)
    {
        this._elemento.innerHTML = this.template(model);
    }
}