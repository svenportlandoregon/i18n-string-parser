
var i18nStringsFiles = require('i18n-strings-files');
var fs = require('fs');

// Read 'Localizable.strings' and return it as an object containing the key/value pairs
var data = i18nStringsFiles.readFileSync('Localizable.strings', 'UTF-8');
console.log(data);

