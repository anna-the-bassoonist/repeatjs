//Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.
//Podpowiedź przed wysłaniem zadania do sprawdzenia:
//- użyj pętli for lub forEach w zadaniu
let mojatablica = [1,2,3,4,5,6];
function iloczynSuma(mojatablica) {
        let suma =0;
        let iloczyn =1;
    mojatablica.forEach(function(element,index){
         mojasuma = suma += element;
         mojiloczyn = iloczyn *= element;
       
    });
         console.log("suma wynosi:"+mojasuma+", iloczyn wynosi:"+ mojiloczyn);
    }
iloczynSuma(mojatablica);