/**
 * Classe que representa uma ViewNegociação.
 * 
 * @author Davi Pereira - <pereiradavipe@gmail.com>.
 * @size 30/06/2017.
 */
class NegociacaoView extends View
{

    constructor(elemento)
    {
        super(elemento);
    }

    template(model) { 
            return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.listaNegociacao.map(n =>
                        ` 
                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                        `
                    ).join('')};
                </tbody>
                <tfoot>
                    <td colspan="3"><b>Total:</td>
                    <td>
                        ${ model.listaNegociacao.reduce((total, n) => total + n.volume, 0.0)}
                    </td>  
                </tfoot>
            </table>
        `;
    }
}