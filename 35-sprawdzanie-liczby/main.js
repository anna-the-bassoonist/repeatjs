//Stwórz plik "main.js".
//
//Napisz funkcję, która przyjmuje jako parametr liczbę n. 
//Dowolną liczbę należy przekazać do parametru podczas wywoływania funkcji.
//
//Funkcja ma sprawdzać, czy liczba n znajduje się w przedziale 100-200. 
//Jeżeli tak, w konsoli ma wyświetlić się napis "Liczba znajduje się w przedziale". 
//Jeżeli nie, w konsoli pojawi się "Liczba nie znajduje się w przedziale".
//
//Plik wgraj do zdalnego repozytorium i podeślij link do sprawdzenia.


function sprawdzam (n){
    if (n>=100 && n <= 200){
        console.log('liczba znajduje się w przedziale');
        return true;
    } else {
        console.log('liczba nie znajduje się w przedziale');
        return false;
    }
}

sprawdzam(200);