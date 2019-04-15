lint :
	gjslint --nojsdoc --disable 131 script.js
	tidy -errors -quiet index.html
