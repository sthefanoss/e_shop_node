//imports
const path = require('path');
const fileSystem = require('fs');

//instances
const directoryPath = path.join(__dirname, '../../data');

//exports
module.exports.readJSONsfromFile =
    fileName => {
        try {
            const filePath = path.join(directoryPath, `${fileName}.json`);
            const fileContent = fileSystem.readFileSync(filePath);
            return JSON.parse(fileContent);
        }
        catch (error) {
            console.log(`Could not read from ${fileName}.json !`);
            return null;
        }
    };

module.exports.writeJSONsInFile =
    (fileName, JSONs) => {
        try {
            const filePath = path.join(directoryPath, `${fileName}.json`);
            fileSystem.writeFileSync(filePath, JSON.stringify(JSONs));
        }
        catch (error) {
            console.log(`Could not write in ${fileName}.json !`);
        }
    };