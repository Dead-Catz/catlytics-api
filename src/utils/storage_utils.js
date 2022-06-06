const fs = require('fs');
const checkStorage = (filePath = '') => {
    let parts = filePath.split('/');
    if (!fs.existsSync(`storage/`))
        fs.mkdirSync(`storage/`);
    let str = `storage/`
    for (var i = 0; i < parts.length; i++) {
        if (parts[i].indexOf('.') != -1)
            break;
        str += parts[i] + '/';
        if (!fs.existsSync(str))
            fs.mkdirSync(str);
    }
};
export const loadFromStorage = (filePath, resultType = 'object') => {
    checkStorage(filePath);
    if (!fs.existsSync(filePath))
        return undefined;
    let str = fs.readFileSync(filePath).toString();
    if (resultType == 'object')
        return JSON.parse(str);
    return str;
}
export const saveToStorage = (filePath, data) => {
    checkStorage(filePath);
    if (typeof (data) != 'string')
        data = JSON.stringify(data);
    fs.writeFileSync(filePath, data);
};