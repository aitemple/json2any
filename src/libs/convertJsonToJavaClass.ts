type JavaType = 'String' | 'Ineteger' | 'double' | 'boolean' | 'long' | 'float' | 'Object' | 'int';

/**
 * Converts a JSON string to a Java class string representation.
 * @param jsonContent The JSON string to convert.
 * @returns A string representing the Java class.
 */
function convertJsonToJava(jsonContent: string): string {
    const jsonObject = JSON.parse(jsonContent);
    let javaClass = 'public class MyClass {\n';

    const typeMapping: { [key: string]: JavaType } = {
        'string': 'String',
        'number': 'double', // 假设所有数字都映射到 double
        'boolean': 'boolean',
        // 注意：JavaScript 的 number 类型可能需要根据上下文映射到 int 或 double
    };
    for (const key in jsonObject) {
        // const type = typeof jsonObject[key];
        const type = parseNumber(jsonObject[key]);

        javaClass += `    private ${type} ${key};\n`;
        // Add getters and setters here
    }
    javaClass += '}\n';
    return javaClass;
}
/**
 * Determines the Java type for a given number value.
 * @param value The number to determine the Java type for.
 * @returns The Java type as a string.
 */
function parseNumber(value: number): JavaType {
    let javaType: JavaType = 'String';
          if (typeof value === 'number') {
            if (Number.isInteger(value)) {
                // 检测 int 和 long
                if (value >= -Math.pow(2, 31) && value <= Math.pow(2, 31) - 1) {
                    javaType = 'int';
                    // javaType = 'Integer';
                } else {
                    javaType = 'long';
                }
            } else {
                // 默认使用 double 作为浮点数类型
                javaType = 'double';
            }
        } else if (typeof value === 'boolean') {
            javaType = 'boolean';
          }
    return javaType;
}
// Export the convertJsonToJava function as the default export
export default convertJsonToJava;