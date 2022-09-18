// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "orderly" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('orderly.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const editor = vscode.window.activeTextEditor;
		if (editor === undefined) {
			return;
		}

		const s = editor.selections;
		
		editor.edit((edit) => {
			let i = 1;
			s.forEach(_s => {
				// console.log(_s.start, "=>", _s.end);
				edit.insert(_s.start, `${i}.`);
				i++;
			});
		});

		vscode.window.showInformationMessage('Hello World from orderly! test1');
	});


	let disposable2 = vscode.commands.registerCommand('orderly.helloWorld2', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor === undefined) {
			return;
		}

		const s = editor.selections;
		
		editor.edit((edit) => {
			let i = 1;
			s.forEach(_s => {
				// console.log(_s.start, "=>", _s.end);
				edit.insert(_s.start, `${i})`);
				i++;
			});
		});

	});

	let disposable3 = vscode.commands.registerCommand('orderly.reorder', () => {
		// find sequence and replace
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
}

// this method is called when your extension is deactivated
export function deactivate() { }
