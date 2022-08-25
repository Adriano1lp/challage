# challage
teste automatizado mobile: Android

# tecnologias utilizadas
WebdriverIO
Appium
Linguagem Javascript
Node.js
Java
Android Studio

# instruções
1 - instale a versão mais recente do [Node.js](https://nodejs.org/en/)
2 - instale a versão mais recente do [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/)
3 - instale a versão mais recente do [Android Studio](https://developer.android.com/studio)
4 - configuire as variaveis de ambiente corretamente
5 - clone o projeto na sua maquina
6 - abra o arquivo wdio.config e adicione as informações (nome do device e versão do android) do seu dispositivo ou emulador 
7 - abra o terminal na pasta do projeto e digite o comando **npm install**

# execução do teste
abra o terminal na pasta do projeto e digite o comando **npx wdio run wdio.conf.js**

# obtendo relatorios
depois da execução digite o comando **allure generate allure-results --clean && allure open**
para ver o relatorio de teste
