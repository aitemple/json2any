// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import convertJsonToJava from './libs/convertJsonToJavaClass';
import convertJsonToGo from './libs/convertJsonToGoLangClass';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    registerConvertCommand(context, 'json2any.convertJsonToJava', convertJsonToJava, 'java');
    registerConvertCommand(context, 'json2any.convertJsonToGolangClass', convertJsonToGo, 'go');

    console.log('Congratulations, your extension "json2any" is now active!');
}

function registerConvertCommand(context: vscode.ExtensionContext, functionName: string, convertFunction: (jsonContent: string) => string, languageType: string) {
    let disposable = vscode.commands.registerCommand(functionName, () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('Open a JSON file first.');
            return;
        }

        const jsonContent = editor.document.getText();
        try {
            const convertedContent = convertFunction(jsonContent);
            vscode.workspace.openTextDocument({content: convertedContent, language: languageType})
                .then(doc => vscode.window.showTextDocument(doc));
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to convert JSON to ${languageType}.`);
        }
    });
    context.subscriptions.push(disposable);
}



// This method is called when your extension is deactivated
export function deactivate() {}
