Este é o projeto de desafio Salesfy, etapa Backend.

Para instalação, rodar o comando:
$ npm install

Para rodar corretamente com maior produtividade para desenvolvimento, rode em terminais diferentes os seguintes comandos:

$ sudo yarn compile-watch
-- Este comando é responsável por manter seu typescript sendo compilado a cada save. Você pode acompanhar neste terminal qualquer erro de escrita no seu programa.

$ sudo yarn nodemon
-- A cada compilação bem sucedida, o Backend lança novamente e automaticamente uma nova versão no ar. Mantendo a execução sempre com a versão mais atualizada do código.

Caso esteja usando vsCode, é recomendado o uso da execução com debug, o que pode ser alcançado via arquivo launch.json com a seguinte configuração:

{
	// Use IntelliSense to learn about possible attributes.
	// Hover to view descriptions of existing attributes.
	// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
	"version": "0.2.0",
	"configurations": [
		
		{
			"type": "node",
			"request": "launch",
			"name": "Launch Challenge Backend",
			"program": "${workspaceFolder}/js/app.js",
			"runtimeArgs": [
				"test"
			],
			"preLaunchTask": null,
			"outFiles": [
				"${workspaceFolder}/js/**/*.js"
			],
			"cwd": "${workspaceRoot}",
			"runtimeExecutable": "yarn",
			"stopOnEntry": false,
			"console": "integratedTerminal",
			"trace": true,
			"autoAttachChildProcesses": true
		}
	]
}

Uma vez que alterado o arquivo, execute no vsCode com o botão F5.