
const i18nStringsFiles = require('i18n-strings-files');
const fs = require('fs');

// Read 'Localizable.strings' and return it as an object containing the key/value pairs
var dataLocalizable = i18nStringsFiles.readFileSync('Localizable.strings', 'UTF-8');
var dataInfoPlist = i18nStringsFiles.readFileSync('InfoPlist.strings', 'UTF-8');


//Writes object to json file
fs.writeFile("Localizable.json", JSON.stringify(dataLocalizable, null, 2), 'UTF-8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 










// var toObjectToJSON = fs.writeFile('./data.json', JSON.stringify(dataLocalizable, null, 2) , 'utf-8');


// Read 'Localizable.strings' and pass an object containing the key/value pairs (each value contains 'text' and 'comment') to a callback
// i18nStringsFiles.readFile('Localizable.strings', { 'encoding' : 'UTF-8', 'wantsComments' : true }, function(err, data){
//     console.log(data);
// });

