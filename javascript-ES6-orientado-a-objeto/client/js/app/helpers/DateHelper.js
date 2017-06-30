/**
 * Classe que auxilia a criação e manipulação de datas
 * 
 * @author Davi Pereira - <pereiradavipe@gmail.com>.
 * @size 29/06/2017.
 */
class DateHelper
{

    constructor()
    {
        throw new Error('DateHelper não pode ser instanciada!');
    }

    static dataParaTexto(data)
    {
        return data.getDate()
             + '/' + (data.getMonth() + 1) 
             + '/' + data.getFullYear();
    }

    static textoParaData(texto)
    {
        // utilização do aereo function
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2) ); 
    }
}