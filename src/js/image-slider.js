$(document).ready(function(){

    // Adiciona imagens ao Slider
    var images= [];
    images[0]= '../img/banner.png';
    images[1]= '../img/banner.png';
    images[2]= '../img/banner.png';
    images[3]= '../img/banner.png';
    images[4]= '../img/banner.png';
    
    // Seta o tempo de troca entre as imagens 

    var pauseBetweenImages=3000;
    
    var count=0;
    var imageCount= images.length-1;
    
    // Cria os Dots de navegação
    
    var navDots= [];
    
    for(var i=0; i<imageCount+1; i++)
    {
    navDots[i]='<div class="dot"></div>';
    $('.dot-container').append(navDots[i]);
    }
    
    $('.main-content').html('<img src=' + images[count] +'>');

    // Adiciona a classe .responsive-img    
    $('.main-content > img').addClass('responsive-img');
    
    // Adiciona a classe .active ao dot atual
    $( '.dot' ).eq(count).addClass('active');
    
    // fucntion that will run a certain time intervals
    
    timingRun = setInterval(function(){ sliderTiming();}, pauseBetweenImages); 
    
    function sliderTiming ()
    {
    $( '.dot' ).eq(count).removeClass('active');
    count++;
    
    if(count>imageCount)
    {
    count=0;
    }

    // Efeito de fadeIn e fadeOut
    $('.main-content').fadeOut(100,function () {
    $('.main-content').html('<img src=' + images[count] +'>');
    $('.main-content > img').addClass('responsive-img');
    $( '.dot' ).eq(count).addClass('active');
    $('.main-content').fadeIn(500);

    });
    }
    
    $('.right-arrow>img').click(function(){
    $( '.dot' ).eq(count).removeClass('active');
    count++;
    if(count>imageCount)
    {
    count=0;
    }
    $('.main-content').fadeOut(100, function () {
    $('.main-content').html('<img src=' + images[count] +'>');
    $('.main-content > img').addClass('responsive-img');
    $( '.dot' ).eq(count).addClass('active');
    $('.main-content').fadeIn(500);
    
    }); 
    resetTiming();
    });
    
    $('.left-arrow>img').click(function(){
    $( '.dot' ).eq(count).removeClass('active');
    count--;
    if(count<0)
    {
    count=imageCount;
    }
    $('.main-content').fadeOut(100, function () {
    $('.main-content').html('<img src=' + images[count] +'>');
    $('.main-content > img').addClass('responsive-img');
    $( '.dot' ).eq(count).addClass('active');
    $('.main-content').fadeIn(500);

    });
    resetTiming();
    });
    
    $('.dot').click(function () {
    $( '.dot' ).eq(count).removeClass('active');
    count= $(this).index();
    $('.main-content').fadeOut(100,function () {
    $('.main-content').html('<img src=' + images[count] +'>');
    $('.main-content > img').addClass('responsive-img');
    $( '.dot' ).eq(count).addClass('active');
    $('.main-content').fadeIn(500);
    
    });
    resetTiming();
    });
    
    // Reseta o tempo de intervalo
    function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); },pauseBetweenImages);
    }
    
    });