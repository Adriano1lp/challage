class Cadastro{
    constructor(){
        this.btn_cadastrar = '//android.view.ViewGroup[@content-desc="Cadastrar"]'       
        this.input_celular = '//android.widget.EditText[@content-desc="insira o numero de celular"]'
        this.btn_avancar = '//android.view.ViewGroup[@content-desc="Botao Avancar"]/android.widget.TextView'
        this.input_nome = '//android.widget.EditText[@content-desc="Insira o nome completo"]'
        this.btn_seguir = '(//android.view.ViewGroup[@content-desc="Botao Avancar"])[2]/android.widget.TextView'
        this.btn_localizacao = '//android.view.ViewGroup[@content-desc="LOCALIZAÇÃO AUTOMÁTICA"]'
        this.btn_sim = '//android.view.ViewGroup[@content-desc="Sim"]'
     }

    botaoCadastrar = () => {
        return $(this.btn_cadastrar)
    }
    
    campoCelular = (value) => {
        return $(this.input_celular).setValue(value)
    }

    botaoAvancar = () => {
        return $(this.btn_avancar)
    }

    campoNome = (value) => {
        return $(this.input_nome).setValue(value)
    }

    botaoAvanca = () => {
        return $(this.btn_seguir)
    }

    botaoLocalizacao = () => {
        return $(this.btn_localizacao)
    }

    botaoSim  = () => {
        return $(this.btn_sim)
    }
}

module.exports = new Cadastro()