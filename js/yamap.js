ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.776062, 37.610997],
        zoom: 10
    }, {
            autoFitToViewport: 'always',
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myFirstPlacemark = new ymaps.Placemark([55.801131, 37.508167], {
            hintContent: 'Песчаная улица, 13'
            
        }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/marker.gif',
                // Размеры метки.
                iconImageSize: [32, 44]
            }),

        mySecondPlacemark = new ymaps.Placemark([55.757556, 37.651592], {
            hintContent: 'Подсосенский переулок, 11'
            
        }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/marker.gif',
                // Размеры метки.
                iconImageSize: [32, 44]
            });

    myMap.geoObjects
        .add(myFirstPlacemark)
        .add(mySecondPlacemark);

    //myMap.behaviors.disable('drag');
});