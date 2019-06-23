var mojeLiczby1 = [11, 33, 67, 100];
var mojeLiczby2 = [11, 22, 78, 13, 13, 4, 78, 1, 1, 1];
var mojeLiczby3 = [-1, -1, -1, -3, -4, -5];


function znajdzLiczbe(arr) {

    var secondBig = arr.sort(function (a, b) {
        return b - a
                    return SecondBig;

    });

    var newSecondBig = secondBig.filter(function (num) { return num < secondBig ;

        });
    };

    console.log(znajdzLiczbe(mojeLiczby1));
    console.log(znajdzLiczbe(mojeLiczby2));
    console.log(znajdzLiczbe(mojeLiczby3));



    //    function znajdzLiczbe(arr) {
    //        var newArr =  arr.filter(znajdzLiczbe => znajdzLiczbe < Math.max(...arr));
    //        return Math.max(...newArr); 
    //        }
