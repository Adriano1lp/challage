const allureReporter = require('@wdio/allure-reporter').default
const login = require('../pages/login')

describe('Validar login e logout da tela de informações', () => {
    it('Dado que o usuario esteja ta tela inicial do app', async () => {
        allureReporter.addDescription('O usuário deve ser capaz de fazer login e logout no aplicativo')
        expect('Explore climas locais socialmente, com o Sowe')
    })

    it('E clicar no botão entrar', async () => {
        await login.botaoEntrar().click()
    })

    it('E a localização e a previsão do tempo for exibida', async () => {
        expect('Sowe')
      })
 
    it('Quando clicar no botão Sair', async () => {
        await login.botaoSair().click()
    })

    it('Então a tela de informações de clima deverar ser fechada', async () => {
        expect('Explore climas locais socialmente, com o Sowe')
    })
})