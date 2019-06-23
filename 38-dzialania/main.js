//Stwórz plik "main.js".
//
//Napisz funkcję, która przyjmuje jako parametry dwie liczby, które przekażesz podczas wywoływania funkcji.
//
//Funkcja ma dodawać, odejmować i mnożyć liczby przekazane do parametrów i wyświetlać w konsoli następujące stringi:
//
//1. "Wynik dodawania wynosi x" 
//2. "Wynik odejmowania wynosi x" 
//3. "Wynik mnożenia wynosi x"
//
//Gdzie x jest wynikiem danego działania.
//
//Natomiast jeżeli wynikiem jest liczba ujemna, w konsoli powinien pojawić się string:
//"Wynik jest ujemny"
//
//Plik wgraj do zdalnego repozytorium i podeślij link do sprawdzenia.


function dzialania(liczba1, liczba2) {
    if (liczba1 + liczba2 >= 0) {
        let dodawanie = liczba1 + liczba2;
        console.log("Wynik dodawania wynosi " + dodawanie);
    } else {
        console.log("Wynik jest ujemny");
    }
    if (liczba1 - liczba2 >= 0) {
        let odejmowanie = liczba1 - liczba2;
        console.log("Wynik odejmowania wynosi " + odejmowanie);
    } else {
        console.log("Wynik jest ujemny");
    }
    if (liczba1 * liczba2 >= 0) {
        let mnozenie = liczba1 * liczba2;
        console.log("Wynik mnozenia wynosi " + mnozenie);
    } else {
        console.log("Wynik jest ujemny");
    }
}
dzialania(8, -2);

//function dzialaniaLiczbowe(parametr1,parametr2){
//
//    let dodawanie = parametr1 + parametr2;
//    let odejmowanie = parametr1 - parametr2;
//    let mnozenie = parametr1 * parametr2;
//
//    if (dodawanie>0) {
//      console.log("Wynik dodawania wynosi" + " " + dodawanie);
//    } else {
//      console.log('wynik jest ujemny');
//    }
//
//    if (odejmowanie>0) {
//      console.log("Wynik odejmowania wynosi" + " " + odejmowanie);
//    }  else {
//      console.log('wynik jest ujemny');
//    }
//
//    if (mnozenie>0) {
//      console.log("Wynik mnożenia wynosi" + " " + mnozenie);
//    } else {
//      console.log('wynik jest ujemny');
//    }
//}
//
//dzialaniaLiczbowe(10,20);
