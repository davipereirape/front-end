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
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }  

    obtemVolume() 
    {
        return this.quantidade * this.valor;
    } 
}