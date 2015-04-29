var fs = require('fs');

var word = process.argv[2], // 要找的字
	file = process.argv[3], // 被搜尋的檔案
	number = 0; 

console.log('Start serach \"'+word+'" in "'+file+'"...')

// === 開始寫程式吧 === //



console.log("There's "+number+" \""+word+"\" in \""+file+"\"!");