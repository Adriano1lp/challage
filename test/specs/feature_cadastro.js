const cadastro = require('../pages/cadastro')
const allureReporter = require('@wdio/allure-reporter').default

describe('Validar cadastro de usuario', () => {

    it('Dado que o usuario esteja ta tela inicial do app', async () => {
        allureReporter.addDescription('O usuário deve ser de fazer o cadastro no aplicativo e verificar a tela de informações de clima')
        expect('Explore climas locais socialmente, com o Sowe')
    })

    it('E clicar no botão de cadastro', async () => {
        await cadastro.botaoCadastrar().click()
              
    })
    
    it('E adicionar um numero de telefone', async () => {
        await cadastro.campoCelular('11923242223')
        await cadastro.botaoAvancar().click()
    })

    it('E adicionar seu nome completo', async () => {
        await cadastro.campoNome('Adriano Lima')
        await cadastro.botaoAvanca().click()    
    })

    it('Quando clicar no botão de localização automatica', async () => {
        await cadastro.botaoLocalizacao().click()       
    })

    it('E confirmar o compartilhamento da localização', async () => {
        await cadastro.botaoSim().click()
    })

    it('Então a localização e a previsão do tempo é exibida', async () => {
        expect('Sowe')
    })
    
})

