let input = prompt("your name?")
let array = input.split("")
let greet = "Hello"
let cach = "SomeName"
let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]
if (array[0]==="J") {
	cach = "JSomeName"
	for (let i = 0; i < names.length; i++){
		if (input === names[i]) {
			cach = names[i]
		}
	}
	greet = "Goodbye"	
}
else if (array[0]!="J") {
	for (let i = 0; i < names.length; i++){
		if (input === names[i]) {
			cach = names[i]
		}
	}
}
console.log(greet + " " + cach)
