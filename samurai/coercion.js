/* W JavaScript, konwersje niejawne (lub "coercion") zachodzą wtedy, gdy operator jest używany z wartościami różnych typów. JavaScript automatycznie konwertuje jedno z nich (lub oba), aby operacja mogła zostać dokonana. Oto kilka przykładów niejawnych konwersji w JavaScript:

Dodawanie stringa z liczbą: */
// konkatenacja stringa z liczbą
var result = "5" + 3; // Wynik: "53"

//Mnożenie stringa z liczbą:
//Kiedy używasz operatorów innych niż + między stringiem a liczbą, string jest zazwyczaj konwertowany na liczbę.
var result = "5" * 3; // Wynik: 15

//Konwersja wartości logicznych:
var value = true;
console.log(value + 1); // Wynik: 2 (true jest konwertowane na 1)

//Porównania z podwójnym znakiem równości (==):
//JavaScript próbuje dokonać konwersji typów, aby dokonać porównania.
console.log(1 == true); // Wynik: true
console.log(1 == "1"); // true
console.log(false == 0); // true

//Niejawna konwersja do wartości logicznej:
//W kontekstach, które wymagają wartości logicznej (jak w instrukcjach warunkowych), wartości są konwertowane na true lub false.
if ("0") {
  console.log("String '0' jest traktowany jako true!");
}

//Operacje z wartościami null i undefined:
console.log(null + 2); // 2 (null jest konwertowane na 0)
console.log(undefined + 2); // NaN
