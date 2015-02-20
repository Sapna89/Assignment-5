// var initially = function() {
// 	$(function() {
//   $( "#dialog" ).dialog();
//   $( "button" )
//     .button()
//     .click(function( event ) {
//     event.preventDefault();               
//   });
// });
// 	$("#dialog").dialog('hide');
// }

//document.getElementById('dialog').visibility = 'hidden';

// var a = 1;
// var intervalTimer = setInterval(function(){
// console.log(a++)
// $(function() {
//   $( "#dialog" ).dialog();
//   $( "button" )
//     .button()
//     .click(function( event ) {
//     event.preventDefault();               
//   });
// });

// var stay = document.getElementById('stay');
// var exit = document.getElementById('exit');
// stay.addEventListener('click', function(evt) {console.log('stay is clicked');
// 	$("#dialog").dialog('close');
// });

// exit.addEventListener('click', function(evt) {console.log('exit is clicked'); 
// 	window.location.href="https://www.google.com/";
// });
// }, 5000);

// var later = function() {
// $(function() {
//   $( "#dialog" ).dialog();
//   $( "button" )
//     .button()
//     .click(function( event ) {
//     event.preventDefault();               
//   });
// });

// var stay = document.getElementById('stay');
// var exit = document.getElementById('exit');
// stay.addEventListener('click', function(evt) {console.log('stay is clicked');
// 	$("#dialog").dialog('close');
// });

// exit.addEventListener('click', function(evt) {console.log('exit is clicked'); 
// 	window.location.href="https://www.google.com/";
// });
// }

$(function(){


	$('#dialog').dialog({
		autoOpen: false,
		modal: true,
		buttons: {
			Stay: function() {

				$(this).dialog('close');
				setTimeout(function(){
					openPopup();

				}, 10000);
			},
			Exit: function() {
				$(this).dialog('close');
				window.location.href="https://www.google.com/";
			}
		}

	});

	function openPopup() {
		$('#dialog').dialog('open');
	}

	setTimeout(function(){
		openPopup();
	}, 10000);

})



