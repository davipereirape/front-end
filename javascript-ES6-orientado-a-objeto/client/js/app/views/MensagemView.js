/**
 * Classe que representa uma View de Mensagem.
 * 
 * @author Davi Pereira - <pereiradavipe@gmail.com>.
 * @size 03/07/2017.
 */
class MensagemView extends View
{

    constructor(elemento)
    {
        super(elemento);
    }

    template(model)
    {
        return `<p class="alert alert-info">${model.texto}</p>`;
    }

}