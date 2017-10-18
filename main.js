const jsonexport = require('jsonexport');
const i18nStringsFiles = require('i18n-strings-files');
const json2csv = require('json2csv');
const papaparse = require('papaparse');
const fs = require('fs');

// Read 'Localizable.strings' and return it as an object containing the key/value pairs
var dataLocalizable = i18nStringsFiles.readFileSync('Localizable.strings', 'UTF-8');
var dataInfoPlist = i18nStringsFiles.readFileSync('InfoPlist.strings', 'UTF-8');

// var outputLocalizableCSV = JSON.stringify(dataLocalizable, null, 2);
// //Writes object to json file
var outputLocalizable = fs.writeFile("Localizable.json", JSON.stringify(dataLocalizable, null, 2), 'UTF-8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

jsonexport(dataLocalizable, function(err, csv) {
    if(err) {
    return console.log(err);
    } else {
        fs.writeFile('Localizable.csv', csv, 'UTF-8');
        console.log(csv);
    }
});

//dictionary add labels to key:value pairs in object :: map, array
// var readyForParsing = fs.readFileSync('Localizable.json', 'UTF-8');

// console.log(readyForParsing);

// Papa.parse('Localizable.json', {
//     complete: function(results) {
//         console.log("Finished:", results.data);
//     }
// });





// var fields = ['source string', 'target string'];
// var fields = [];

// var csv = json2csv({ data: outputLocalizableCSV, fields: fields});

// fs.writeFile('Localizable.csv', csv, function(err) {
//     if (err) throw err;
//     console.log('file saved');
//   });

// try {
//     var result = json2csv({ data: outputLocalizable, fields: fields });
//     console.log(result);
// } catch (err) {
//     console.error(err);
// }








// // var toObjectToJSON = fs.writeFile('./data.json', JSON.stringify(dataLocalizable, null, 2) , 'utf-8');


// // Read 'Localizable.strings' and pass an object containing the key/value pairs (each value contains 'text' and 'comment') to a callback
// i18nStringsFiles.readFile('Localizable.strings', { 'encoding' : 'UTF-8', 'wantsComments' : true }, function(err, data){
//     console.log(data);
// });

