$(document).ready(function(){
    $('button').click(function(){
        $('div').animate({
            left:'100px',
            height:'100px',
            width:'100px'
        }, 3000, function(){
            $('div').animate({
            backgroundColor: 'blue'
            }, 5000, function(){
                $('div').append('<h2>Animacja zakonczona</h2>');
            });
        });
    })
});