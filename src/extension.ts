// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('json2class.convertJsonToJava', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('Open a JSON file first.');
            return;
        }

        const jsonContent = editor.document.getText();
        try {
            const javaClass = convertJsonToJava(jsonContent);
            vscode.workspace.openTextDocument({ content: javaClass, language: 'java' })
                .then(doc => vscode.window.showTextDocument(doc));
        } catch (error) {
            vscode.window.showErrorMessage('Failed to convert JSON to Java.');
        }
    });
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "json2class" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// const disposable = vscode.commands.registerCommand('json2class.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from json2class!');
	// });

	context.subscriptions.push(disposable);
}


function convertJsonToJava(jsonContent: string): string {
    const jsonObject = JSON.parse(jsonContent);
    let javaClass = 'public class MyClass {\n';

    for (const key in jsonObject) {
        const type = typeof jsonObject[key];
        javaClass += `    private ${type} ${key};\n`;
        // Add getters and setters here
    }

    javaClass += '}\n';
    return javaClass;
}
// This method is called when your extension is deactivated
export function deactivate() {}
