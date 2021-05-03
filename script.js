function Car (year, owner, manufacturer) {
  /*in the body of the function, we use the 'this' keyword, it helps us set these parameters as properties on an object. 'this' references the current object, which is the 'Car' */

  this.year = year;
  this.owner = owner;  
	this.manufacturer;
	this.speak = function () {
		return `vrooooooom!`;
	}

  /*I also added a function 'speak ()' to the 'Car' object */

  /* there are some differences in sytax between 'literal notation' and function constructor when creating an object. 'literal notation uses double colon : while 'constructor' function uses equal = sign for defining properties */

  

};
