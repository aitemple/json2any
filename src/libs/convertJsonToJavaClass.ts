

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

export default convertJsonToJava;