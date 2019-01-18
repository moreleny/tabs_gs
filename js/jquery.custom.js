jQuery(document).ready(function(){
	$('.fullname-window').mask('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', {translation: {'X': {pattern: /[А-Яа-я-" "]/, optional: false } } });
	$('.phone-window').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});
	$('.main-form').validate();
});



