const fs = require('fs');
const jsonexport = require('jsonexport');
const i18nStringsFiles = require('i18n-strings-files');
const json2csv = require('json2csv');

// Directories to clean
var include = ['test_iOS/', 'test_Android/'];

// specific files to ignore
var exclude = ['.placeholder', '.DS_Store'];

// loops through each directory
for (var i = 0; i < include.length; i++) {
  // read files in directory
  var files = fs.readdirSync(include[i]);

  // loops through files in current directory
  for (var j = 0; j < files.length; j++) {
    var file = files[j];
    var del = true;

    // checks to see if current file is excluded
    for (var k = 0; k < exclude.length; k++) {
      if (file == exclude[k]) {
        del = false;
      }
    }

    // finds file if current file is not excluded
    if (include) {
      fs.readFile(include[i] + file, error => {
        if (error) {
          console.log('Error: ' + error.message);
        } else {
          var dataLocalizable = i18nStringsFiles.readFileSync(
            'Localizable.strings',
            'UTF-8'
          );

          var outputLocalizable = fs.writeFile(
            'LocalizableTest.json',
            JSON.stringify(dataLocalizable, null, 2),
            'UTF-8',
            function(err) {
              if (err) {
                return console.log(err);
              } else {
                console.log('The file was saved!');
              }
            }
          );
        }
      });
    }
  }
}
