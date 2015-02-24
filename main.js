$(function(){

	$('#accordion').accordion();
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



