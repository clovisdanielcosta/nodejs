
<h1 align="center">
:small_red_triangle_down: Curso de Introdução ao NodeJs
</h1>
<p>
Este repositório foi criado para efeito de estudo no curso de NodeJS pela <b>Digital Innovation One</b>. Como foi encontrada certa dificuldade para a instalação do NodeJs no Windows foi descrito um passo a passo nesta introdução para ajudar outros desenvolvedores que talvez se deparem com as mesmas dificuldades na instalação.
</p> 

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#small_orange_diamond-chocolatey">Chocolatey</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#beetle-erros">Erros comuns</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#small_orange_diamond-nodejs">Instalando o NodeJs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#small_orange_diamond-verificando">Verificando</a>
</p>
<br>

## :rocket: Tecnologias

Nesse projeto foram usadas as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [Chocolatey](https://chocolatey.org/)

## :memo: Requisitos

- Windows 7 ou superior.
- Optar pela instalação através Package Manager. 
- Familiaridade como o uso do Windows PowerShell (tecle Enter após os comandos).

## :small_orange_diamond: Chocolatey

Para gerenciar a instalação do NodeJS iremos usar o Chocolatey.
Instalando:
1. Abra o PowerShell como Administrador.
2. Verifique se as políticas de execução não estão restritas digite:
    
    Get-ExecutionPolicy

Se o retorno for "Restricted" digite (senão pule para o passo 3):

    Set-ExecutionPolicy Bypass -Scope Process

3. Em seguida, para instalar o Chocolatey digite:

    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

4. Verifique as mensagens no final da instalação. Se houver aviso de erro note a seção "Erros" logo abaixo.

5. Para verificar a instalação digite:

    choco

## :beetle: Erros

Caso encontre erro na instalação do Chocolatey devido a ausência do arquivo "Microsoft.PowerShell_profile.ps1", dentro do terminal PowerShell como administrador, copie o comando abaixo, cole no PowerShell e tecle enter:

    if (!(Test-Path -Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
    }

Depois digite:

    type $profile

Em seguida repita os passos 3 e 5 da seção "Chocolatey".

Caso encontre o erro de "Arquivo não está assinado digitalmente" digite:

    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

Feche o PowerShell e abra novamente.

## :small_orange_diamond: NodeJS 

Para instalar a última versão estável do Node digite:
    
    choco install nodejs-lts

Se precisar reinstalar a versão estável acrescente "--force" no comando:

    choco install --force nodejs-lts

## :small_orange_diamond: Verificando
Para verificar a instalação, abra um terminal ou prompt, digite:

    node -v

Depois:

    npm -v

Se aparecer os detalhes das versões tanto do Node como do gerenciador de pacotes do Node (Npm) a instalação foi um sucesso.

Fontes para consulta adicional:<br>
https://chocolatey.org/install <br>
https://superuser.com/questions/1313745/how-can-i-solve-warning-when-i-install-chocolatey<br>
https://www.tenforums.com/general-support/107659-how-sign-powershell-profile-w-self-signed-certificate.html<br>



