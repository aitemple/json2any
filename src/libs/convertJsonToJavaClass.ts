type JavaType = 'String' | 'Integer' | 'double' | 'boolean' | 'Long' | 'float' | 'Object' | 'int' | 'Object';

/**
 * Converts a JSON string to a Java class string representation.
 * @param jsonContent The JSON string to convert.
 * @returns A string representing the Java class.
 */
function convertJsonToJava(jsonContent: string): string {
    const jsonObject = JSON.parse(jsonContent);
    let javaClass = 'public class MyClass {\n';

    for (const key in jsonObject) {
        // const type = typeof jsonObject[key];
        const type = parseObject(jsonObject[key]);

        javaClass += `    private ${type} ${key};\n`;
        // Add getters and setters here
        javaClass += `    public ${type} get${key.charAt(0).toUpperCase() + key.slice(1)}() {\n`;
        javaClass += `        return this.${key};\n`;
        javaClass += `    }\n`;
        javaClass += `    public void set${key.charAt(0).toUpperCase() + key.slice(1)}(${type} ${key}) {\n`;
        javaClass += `        this.${key} = ${key};\n`;
        javaClass += `    }\n`;
    }
    javaClass += '}\n';
    return javaClass;
}
/**
 * Determines the Java type for a given number value.
 * @param value The number to determine the Java type for.
 * @returns The Java type as a string.
 */
function parseObject(value: any): JavaType {
    let javaType: JavaType = 'String';
          if (typeof value === 'number') {
            if (Number.isInteger(value)) {
                // 检测 int 和 long
                if (value >= -Math.pow(2, 31) && value <= Math.pow(2, 31) - 1) {
                    javaType = 'Integer';
                } else {
                    javaType = 'Long';
                }
            } else {
                // 默认使用 double 作为浮点数类型
                javaType = 'double';
            }
        } else if (typeof value === 'boolean') {
            javaType = 'boolean';
          } else {
            javaType = 'Object';
        }
    return javaType;
}
// Export the convertJsonToJava function as the default export
export default convertJsonToJava;