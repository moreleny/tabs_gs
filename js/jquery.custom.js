jQuery(document).ready(function(){
	$('.fullname-window').mask('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', {translation: {'X': {pattern: /[А-Яа-я-" "]/, optional: false } } });
	$('.phone-window').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});
	$('.delivery-form').validate({
		rules: {
			fullname: {
				required: true,
				minlength: 3,
				maxlength: 75,
			},
			phone: {
				required: true,
				minlength: 18,
				maxlength: 18,
			},
			adress: {
				required: true,
				minlength: 1,
			},
			comment: {
				required: true,
				minlength: 1,
			},
		},
		messages: {
			fullname: {
				required: "Поле обязательно для заполнения",
				minlength: "Введите минимум 3 символа",
				maxlength: 75,
			},
			phone: {
				required: "Поле обязательно для заполнения",
				minlength: "Введите 10-значный телефонный номер",
				maxlength: "Введите 10-значный телефонный номер",
			},
			adress: {
				required: "Поле обязательно для заполнения",
				minlength: "Введите адрес в указанном формате",
			},
			comment: {
				required: "Поле обязательно для заполнения",
			},

		},
	});
	$('.pickup-form').validate({
		rules: {
			way: {
				required: true,
			},
			
		},
		messages: {
			way: {
				required: "Выберите один из вариантов",
			},
		},
	});
});



