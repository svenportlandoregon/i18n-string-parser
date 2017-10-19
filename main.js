const jsonexport = require('jsonexport');
const i18nStringsFiles = require('i18n-strings-files');
const json2csv = require('json2csv');
const fs = require('fs');

// Read 'Localizable.strings' and return it as an object containing the key/value pairs
var string2CSV = function() {

var dataLocalizable = i18nStringsFiles.readFileSync('Localizable_de.strings', 'UTF-8');
var dataInfoPlist = i18nStringsFiles.readFileSync('InfoPlist.strings', 'UTF-8');

// var outputLocalizableCSV = JSON.stringify(dataLocalizable, null, 2);
// //Writes object to json file
var outputLocalizable = fs.writeFile("Localizable.json", JSON.stringify(dataLocalizable, null, 2), 'UTF-8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The JSON file was saved!");
}); 

jsonexport(dataLocalizable, function(err, csv) {
    if(err) {
        return console.log(err);
    } else {
        fs.writeFile('Localizable.csv', csv, 'UTF-8');
        console.log('The CSV file has been created');
    }
});
}

string2CSV();

module.exports = {
    string2CSV: string2CSV
};







// const fs = require('fs');

// // Directories to clean
// var include = ['output/json/', 'output/txt/'];

// // specific files to ignore
// var exclude = ['.placeholder', '.DS_Store'];

// // loops through each directory
// for (var i = 0; i < include.length; i++) {

//     // read files in directory
//     var files = fs.readdirSync(include[i]);

//     // loops through files in current directory
//     for (var j = 0; j < files.length; j++) {
//         var file = files[j];
//         var del = true;

//         // checks to see if current file is excluded
//         for (var k = 0; k < exclude.length; k++) {
//             if (file == exclude[k]) {
//                 del = false;
//             }
//         }

//         // deletes file if current file is not excluded
//         if (del) {
//             fs.unlink(include[i] + file, error => {
//                 if (error) console.log('Error: ' + error.message);
//                 else console.log('Removed ' + file);
//             })
//         }
//     }
// }







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

