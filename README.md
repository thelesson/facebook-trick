# facebook-trick
Get email and password in the line command of node js, using express + javascript injection...it is possible because as a vulnerability with the window.open() in facebook

# Truque com o facebook

Obter email e senha do usuário no terminal* de comando do node js, com uma simples injection aceita pelo Facebook.

*usado apenas como didatica, podendo o response da requição ser inserida em qualquer site, onde seria armazenada uma lista de logins válidos, capturados por uma extensão maliciosa instalada no browser...

A principio, se faz necessário injetar o código que está no arquivo config.js, no console do navegador que será utilizado como isca. Posteriormente esse código poderá ser inserido em um complemento do navegador, evitando assim a atualização manual(F5) do código.

Após o código inserido no navegador. Rode o server.js no terminal do node e aguarde a "vitima" inserir seus dados no navegador onde o código malicioso foi inserido. O usuário não perceberá nenhuma anomalia, apenas uma nova aba aberta redirecionando para a home.

Esse truque funciona praticamente com todos os sites e serve como alerta aos desavisados que realizam login em redes sociais, email, internet banking, etc em qualquer máquina sem verificar se existe algo malicioso por baixo dos panos...
