const jsonexport = require('jsonexport');
const i18nStringsFiles = require('i18n-strings-files');
const json2csv = require('json2csv');
const fs = require('fs');

// Read 'Localizable.strings' and return it as an object containing the key/value pairs
var string2CSV = function() {
  var dataLocalizable = i18nStringsFiles.readFileSync(
    'Localizable_de.strings',
    'UTF-8'
  );
  var dataInfoPlist = i18nStringsFiles.readFileSync(
    'InfoPlist.strings',
    'UTF-8'
  );

  // var outputLocalizableCSV = JSON.stringify(dataLocalizable, null, 2);
  // //Writes object to json file
  var outputLocalizable = fs.writeFile(
    'Localizable.json',
    JSON.stringify(dataLocalizable, null, 2),
    'UTF-8',
    function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('The JSON file was saved!');
    }
  );

  jsonexport(dataLocalizable, function(err, csv) {
    if (err) {
      return console.log(err);
    } else {
      fs.writeFile('Localizable.csv', csv, 'UTF-8');
      console.log('The CSV file has been created');
    }
  });
};

string2CSV();

module.exports = {
  string2CSV: string2CSV
};
