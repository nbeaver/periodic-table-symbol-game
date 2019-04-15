lint :
	gjslint --nojsdoc --disable 131 script.js
	# error 131 is "Single-quoted string preferred over double-quoted string."
	# Example: gjslint --disable 1,0011
	tidy -errors -quiet index.html
