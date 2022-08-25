class Login{
    constructor(){
        this.btn_entrar = '//android.view.ViewGroup[@content-desc="Entrar"]/android.widget.TextView'       
        this.btn_sair = '//android.widget.TextView[@content-desc="Botão Sair"]'
    }    

    botaoEntrar = () => {
        return $(this.btn_entrar)
    }

    botaoSair  = () => {
        return $(this.btn_sair)
    }
}

module.exports = new Login()