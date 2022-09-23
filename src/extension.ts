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
	let disposable = vscode.commands.registerCommand('orderly.addSequenceMultipleCursors', () => {
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


	let disposable2 = vscode.commands.registerCommand('orderly.addSequenceSingleSelection', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor === undefined) {
			return;
		}
		const s = editor.selections;

		// get range
		const textRange = new vscode.Range(s[0].start, s[0].end);

		// get text
		const text = editor.document.getText(s[0]);

		// console.log("s", s[0].start, s[0].end, textRange, text);

		const regex = /\r?\n/;
		const found = text.split(regex);

		// return if empty
		if (found?.length === 0) {
			return;
		}

		let number = 1;
		var result: string[] = [];
		// process and re-generate the text
		for (let i = 0; i < found.length; i++) {
			const ele = found[i];

			// keep the original whitespace text
			if (ele.trim().length === 0) {
				result.push(ele);
				continue;
			}

			result.push(`${number}. ${ele}`);			
			number++;
		}

		editor.edit((edit) => {
			// let i = 1;
			edit.replace(textRange, result.join('\n'));
		});
	});


	let disposable3 = vscode.commands.registerCommand('orderly.regenerateOrder', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor === undefined) {
			return;
		}
		const s = editor.selections;

		// get range
		const textRange = new vscode.Range(s[0].start, s[0].end);

		// get text
		const text = editor.document.getText(s[0]);

		const regex = /\r?\n/;
		const found = text.split(regex);

		// return if empty
		if (found?.length === 0) {
			return;
		}

		let number = 1;
		var result: string[] = [];

		// process and re-generate the text
		for (let i = 0; i < found.length; i++) {
			const ele = found[i];
			// keep the original whitespace text
			if (ele.trim().length === 0) {
				result.push(ele);
				continue;
			}

			if (ele.search(/^\d+\./) === -1) {
				result.push(`${number}.` + ele);
			} else {
				result.push(ele.replace(/^\d+\./, `${number}.`));
			}
			number++;
		}

		// replace the final content
		editor.edit((edit) => {
			edit.replace(textRange, result.join('\n'));
		});

	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
}

// this method is called when your extension is deactivated
export function deactivate() { }
