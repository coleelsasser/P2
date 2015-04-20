// Part-A
var isArmstrong = function(n) {
	//strict
	"use strict";
	var sum = 0;
	//string
	n = String(n);
	for(var i = 0; i < n.length; ++i)
		//use math.pow?
		sum = sum + Math.pow(Number(n[i]), n.length);

	if(Number(n) == sum){
		return true;
	}
	else {
		return false;
	}
};
//all good^
// Part-B
var allArmstrongs = function() {
	//Strict
	"use strict";
	//empty array for armstrong 
	var armsArray = [];
	//go through and add numbers to array?
	for(var i = 1; i < 100000; ++i) {
		if (isArmstrong(i)) {
		armsArray.push(i);
		} 
	}
	//new string
	var String2 = "";
	//sort and add to String 2
	for(var j = 0; j < armstrongArray.length; ++j) {
		String2 += armstrongArray[j] + ' ';
	}
	console.log(String2);
	//log String2
};
//all good^
//Part-C
var allSubstrings1 = function(string) {
	//strict
	"use strict";
	var result = "";

	for(var i = 0; i <= string.length; i++) {

        for(var j = i+1; j <= string.length; j++) {
        	result = result + string.substring(i,j) + ', ' + ' ';
        	//fix ^ office hours maybe?
        }
	}
	return result;
};
// working^
// Part-D
var allSubstrings2 = function(string) {
	"use strict";
	// empty array.
	var answer = [];
	for(var i = 0; i <= string.length; i++) {
        for(var j = i+1; j <= string.length; j++) { 
        var b = string.substring(i,j);
        // push substrings into answer array.
        answer.push(b);
        }
	}
	return answer;
};
//No errors!^
// Part-E
var maxWord = function(string) {
	"use strict"
	// Split stings?
	// set word to null?
	//Go to lab for help
	var seperate = string.split(" "), max = 0, word = null;
	for (var i = 0; i < seperate.length; ++i) {
		if (max < seperate[i].length) {
			max = seperate[i].length;
			word = seperate[i];
		}
	}
	return word;
};
