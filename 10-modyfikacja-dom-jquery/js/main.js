$(document).ready(function(){
    $('#btn-wgore').click(function(){
        $('p:last').insertBefore('p:first');
    });
    $('#btn-wdol').click(function(){
        $('p:first').insertAfter('p:last');
    })
})