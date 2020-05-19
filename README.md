# nodejs
Curso de introdução ao Node.Js pela Digital Innovation One.
A instalação no Windows demandou pesquisas e consultas a vários sites.

PRINCIPAIS TECNOLOGIAS
    NodeJs
    Chocolatey
    WindowsPowerShell

INSTALANDO NODE NO WINDOWS 

Obs: (tecle Enter após os comandos)

CHOCOLATEY

1 - Opte pela instalação através Package Manager.
2 - Instalando o gerenciador de pacotes Chocolatey:
3 - Abra o PowerShell como Administrador.
4 - Verifique se as políticas de execução não estão restritas digite:
    
    Get-ExecutionPolicy

Se o retorno for "Restricted" digite (senão pule para o passo 5):

    Set-ExecutionPolicy Bypass -Scope Process

5 - Em seguida, para instalar o Chocolatey digite:

    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

6 - Para verificar a instalação digite:

    choco

ERROS COMUNS NA INSTALAÇÃO

Caso encontre erro na instalação do Chocolatey devido a ausência do arquivo "Microsoft.PowerShell_profile.ps1", dentro do terminal PowerShell como administrador, digite o comando abaixo e tecle enter:

    if (!(Test-Path -Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
    }

Depois digite:

    type $profile

Caso encontre o erro de "Arquivo não está assinado digitalmente" digite:

    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

Feche o PowerShell e abra novamente.

INSTALANDO A VERSÃO ESTÁVEL DO NODEJS

1 - Para instalar a última versão estável do Node digite:
    
    choco install nodejs-lts

Se precisar reinstalar a versão estável novamente acrescente --force no comando:

    choco install --force nodejs-lts

2 - Para verificar a instalação, abra um terminal ou prompt, digite:

    node -v

    npm -v

Se aparecer os detalhes das versões tanto do Node como do gerenciador de pacotes do Node (Npm) a instalação foi um sucesso.

FONTES:
https://chocolatey.org/install
https://superuser.com/questions/1313745/how-can-i-solve-warning-when-i-install-chocolatey
https://www.tenforums.com/general-support/107659-how-sign-powershell-profile-w-self-signed-certificate.html

