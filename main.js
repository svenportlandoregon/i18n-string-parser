
var i18nStringsFiles = require('i18n-strings-files');
var fs = require('fs');

// Read 'Localizable.strings' and return it as an object containing the key/value pairs
var dataLocalizable = i18nStringsFiles.readFileSync('Localizable.strings', 'UTF-8');
var dataInfoPlist = i18nStringsFiles.readFileSync('InfoPlist.strings', 'UTF-8');
console.log(dataLocalizable, dataInfoPlist);



