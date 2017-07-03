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
        this._listaNegociacao = new ListaNegociacao();
        this._negociacaoView = new NegociacaoView($('#negociacaoView'));
        this._negociacaoView.update(this._listaNegociacao); 
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
    }

    
    adiciona(event) 
    { 
        event.preventDefault(); // cancela o evento do botão, (o submit após este tratamento)
        
        this._listaNegociacao.adiciona(this._criaNegociacao());
        this._negociacaoView.update(this._listaNegociacao); 
        this._limpaFormulario();
        
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao()
    {
        return new Negociacao(DateHelper.textoParaData(
            this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
    }

    _limpaFormulario()
    {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        
        this._inputData.focus(); 
    }
}