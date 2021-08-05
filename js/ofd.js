
// $('.report__collapse-btn').click(function() {
//     var toggleBtn = $(this);
//     var toggleText = $(this).find('span');
//     var contentText = $(this).find('span').text();
//     //toggleBtn.button('toggle');
//     toggleBtn.find('svg').toggleClass('report__svg-btn report__svg-btn--rotate');
//      toggleText.text(toggleBtn.hasClass('collapsed') && contentText == "Подробнее "? 'Подрбнее': 'Скрыть');
// });


$('.report__collapse-btn').on('click', function() {
    var toggleBtn = $(this);
    toggleBtn.button('toggle');
    var toggleText = $(this).find('span');
    toggleBtn.find('svg').toggleClass('report__svg-btn report__svg-btn--rotate');
    var toggleBlock = $(this).parent('.report__card-header').siblings('.collapse')[0];

    if (toggleBlock.classList.contains('show')){
        toggleText.text('Подробнее');
    }else{
        toggleText.text('Свернуть');
        if($('.report__collapse-btn').not(this).find('span').html() == 'Свернуть'){
            $('.report__collapse-btn').not(this).find('span').text('Подробнее');
            $('.report__collapse-btn').not(this).find('svg').removeClass('report__svg-btn--rotate');
        }
    
    }
});


