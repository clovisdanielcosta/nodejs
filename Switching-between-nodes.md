Estas configurações são para Windows.
No meu caso desinstalei completamente a versão do Note que tinha anteriormente.

Passos: 

1 - Acesse a página do NVM para Windows no GitHub:

https://github.com/coreybutler/nvm-windows/releases

2 - Faça o download e extraia o arquivo "nvm-setup.zip".

3 - Duplo clique para instalar o arquivo "nvm-setup.exe".

4 - Para checar a instalação digite num terminal:

$ nvm version

5 - Para ver a lista das versões do Node disponíveis digite:

$ nvm list available

6 - Por exemplo, se quiser instalar a versão "12.14.0" digite:

$ nvm install 12.14.0

7 - Agora que a versão foi instalada, defina a mesma para ser usada:

$ nvm use 12.14.0

8 - Para verificar se a versão do Node foi alterada digite:

$ node -v

9 - Instale novamente as dependências do node dentro da pasta do seu projeto:

$ npm install

10 - Se quiser mudar também a versão do Angular para, por exemplo "9.1.7", entre na pasta do projeto, delete a pasta "node_modules" e digite:

$ npm install @angular/cli@9.1.7

11 - Instale novamente as dependências do projeto:

$ npm install

12 - Para verificar a versão do Angular/Cli instalada digite:

$ ng -v


Obs:
Se precisar instalar o Node via package manager (Chocolatey) acesse o repositório abaixo:

https://github.com/clovisdanielcosta/nodejs
