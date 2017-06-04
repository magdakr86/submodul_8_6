// scripts.js

var a = prompt("Podaj wartość a:"),
    b = prompt("Podaj wartość b:"),
    value = (a * a) + (2 * a * b) - (b * b);

console.log('Wynik działania (a * a) + (2 * a * b) - (b * b), gdzie a: ' + a + 'i b: ' + b + '  wynosi: ' + value);

if (value > 0) {
	console.log("Wynik dodatni");
} else if (value < 0) {
	console.log("Wynik ujemny");
} else {
	console.log("Wynik wynosi 0");
}