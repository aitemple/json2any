import * as assert from 'assert';
import * as vscode from 'vscode';
import convertJsonToJava from '../libs/convertJsonToJavaClass'; 

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');
        test('convertJsonToJavaClass Test', () => {
        // 定义一个简单的 JSON 字符串
        const jsonInput = `{"name":"John", "age":30, "isStudent":false}`;
        // 调用 convertJsonToJavaClass 函数
        const javaClassOutput = convertJsonToJava(jsonInput);
        // 定义期望的 Java 类输出
        const expectedOutput = `public class MyClass {
    private String name;
    private int age;
    private boolean isStudent;

    // Getters and Setters
}
`;
            // 使用 expect 断言实际输出与期望输出是否一致
            assert.strictEqual(javaClassOutput, expectedOutput);
    });
});