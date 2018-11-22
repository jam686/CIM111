

$(document).ready(function(){

$("#toggle").click(function(){

$('#o').toggle();

var a=$('#toggle').text();

//change text on it

if(a=='Show Paragraph')

$('#toggle').text('Hide Paragraph');

else

$('#toggle').text('Show Paragraph');

});

});

//change the background-color of paragraph

function go()

{

var a=$('#sel').val();

//apply css using jquery selector

$('#o').css("background-color",a);

}

//append item to list

function ap()

{

//get the value by jquery selector

var a = $('#text').val();

if(a!='')

{

//append value

$('#ul').append('<li>'+a+'</li>');

$('#text').val('');

}

}

//fade out animation on paragraph

$( "p" ).click(function() {

$( "p" ).fadeOut( "slow" );

});
