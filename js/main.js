$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWith: 1200
        });  
    }
    // Posts
    if(window.location.href.indexOf('index') > -1){

    var posts = [
        {
            title: 'prueba de titulo 1',
            date: 'Publicado el dia ' + moment().date()+" de "+ moment().format('MMMM')+' del '+ moment().format('YYYY'),
            content: 'Nullam vitae nunc risus. Vestibulum vel ante tincidunt, vehicula purus non, pharetra risus. Nam lorem magna, cursus a ipsum commodo, pharetra gravida dolor. Proin ipsum ante, ultricies in odio nec, fermentum ornare massa. Ut urna tellus, suscipit sit amet facilisis quis, egestas ac mi. Nullam non magna sem. Phasellus fringilla, arcu sed dapibus vulputate, urna lorem ultrices ex, eu gravida libero augue sed est. Nunc porta in nibh id ullamcorper. Duis nulla orci, varius eu est quis, varius volutpat elit. Maecenas risus augue, rutrum eget dapibus eu, aliquet interdum felis. Mauris malesuada velit lectus, id consectetur tellus tincidunt et. Praesent elementum placerat mattis. Curabitur est ex, pulvinar ut mattis quis, pretium sit amet odio. Maecenas nec enim nisi. Fusce pulvinar egestas nulla, ac lacinia nulla.'
        },
        {
            title: 'prueba de titulo 2',
            date: 'Publicado el dia ' + moment().date()+" de "+ moment().format('MMMM')+' del '+ moment().format('YYYY'),
            content: 'Nullam vitae nunc risus. Vestibulum vel ante tincidunt, vehicula purus non, pharetra risus. Nam lorem magna, cursus a ipsum commodo, pharetra gravida dolor. Proin ipsum ante, ultricies in odio nec, fermentum ornare massa. Ut urna tellus, suscipit sit amet facilisis quis, egestas ac mi. Nullam non magna sem. Phasellus fringilla, arcu sed dapibus vulputate, urna lorem ultrices ex, eu gravida libero augue sed est. Nunc porta in nibh id ullamcorper. Duis nulla orci, varius eu est quis, varius volutpat elit. Maecenas risus augue, rutrum eget dapibus eu, aliquet interdum felis. Mauris malesuada velit lectus, id consectetur tellus tincidunt et. Praesent elementum placerat mattis. Curabitur est ex, pulvinar ut mattis quis, pretium sit amet odio. Maecenas nec enim nisi. Fusce pulvinar egestas nulla, ac lacinia nulla.'},
        {
            title: 'prueba de titulo 3',
            date: 'Publicado el dia ' + moment().date()+" de "+ moment().format('MMMM')+' del '+ moment().format('YYYY'),
            content: 'Nullam vitae nunc risus. Vestibulum vel ante tincidunt, vehicula purus non, pharetra risus. Nam lorem magna, cursus a ipsum commodo, pharetra gravida dolor. Proin ipsum ante, ultricies in odio nec, fermentum ornare massa. Ut urna tellus, suscipit sit amet facilisis quis, egestas ac mi. Nullam non magna sem. Phasellus fringilla, arcu sed dapibus vulputate, urna lorem ultrices ex, eu gravida libero augue sed est. Nunc porta in nibh id ullamcorper. Duis nulla orci, varius eu est quis, varius volutpat elit. Maecenas risus augue, rutrum eget dapibus eu, aliquet interdum felis. Mauris malesuada velit lectus, id consectetur tellus tincidunt et. Praesent elementum placerat mattis. Curabitur est ex, pulvinar ut mattis quis, pretium sit amet odio. Maecenas nec enim nisi. Fusce pulvinar egestas nulla, ac lacinia nulla.'},
        {
            title: 'prueba de titulo 4',
            date: 'Publicado el dia ' + moment().date()+" de "+ moment().format('MMMM')+' del '+ moment().format('YYYY'),
            content: 'Nullam vitae nunc risus. Vestibulum vel ante tincidunt, vehicula purus non, pharetra risus. Nam lorem magna, cursus a ipsum commodo, pharetra gravida dolor. Proin ipsum ante, ultricies in odio nec, fermentum ornare massa. Ut urna tellus, suscipit sit amet facilisis quis, egestas ac mi. Nullam non magna sem. Phasellus fringilla, arcu sed dapibus vulputate, urna lorem ultrices ex, eu gravida libero augue sed est. Nunc porta in nibh id ullamcorper. Duis nulla orci, varius eu est quis, varius volutpat elit. Maecenas risus augue, rutrum eget dapibus eu, aliquet interdum felis. Mauris malesuada velit lectus, id consectetur tellus tincidunt et. Praesent elementum placerat mattis. Curabitur est ex, pulvinar ut mattis quis, pretium sit amet odio. Maecenas nec enim nisi. Fusce pulvinar egestas nulla, ac lacinia nulla.'
        },
        {
            title: 'prueba de titulo 5',
            date: 'Publicado el dia ' + moment().date()+" de "+ moment().format('MMMM')+' del '+ moment().format('YYYY'),
            content: 'Nullam vitae nunc risus. Vestibulum vel ante tincidunt, vehicula purus non, pharetra risus. Nam lorem magna, cursus a ipsum commodo, pharetra gravida dolor. Proin ipsum ante, ultricies in odio nec, fermentum ornare massa. Ut urna tellus, suscipit sit amet facilisis quis, egestas ac mi. Nullam non magna sem. Phasellus fringilla, arcu sed dapibus vulputate, urna lorem ultrices ex, eu gravida libero augue sed est. Nunc porta in nibh id ullamcorper. Duis nulla orci, varius eu est quis, varius volutpat elit. Maecenas risus augue, rutrum eget dapibus eu, aliquet interdum felis. Mauris malesuada velit lectus, id consectetur tellus tincidunt et. Praesent elementum placerat mattis. Curabitur est ex, pulvinar ut mattis quis, pretium sit amet odio. Maecenas nec enim nisi. Fusce pulvinar egestas nulla, ac lacinia nulla.'
        }
    ];
    
    posts.forEach((item, index)=>{
        var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <p>
                    <a href="#" class="button-more">Leer más</a>
                </p>
            </article>
        `;
        $('#posts').append(post);
    });

    }
    // Selector de tema
    var theme = $('#theme');
    $('#to-green').click(function(){
        theme.attr("href","css/green.css")
    });
    $('#to-red').click(function(){
        theme.attr("href","css/red.css")
    });
    $('#to-blue').click(function(){
        theme.attr("href","css/blue.css")
    });

    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // Login falso
    $('#login form').submit(function(){
        var form_name = $('#form_name').val();
        localStorage.setItem("form_name", form_name);
    });
    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != 'undefined'){
        var about_parrafo = $('#about p');
        about_parrafo.html('<br><strong>Bienvenido, '+form_name+'</strong><br>');
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
        $('#login').hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    } 

    // Acordeon
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1 ){
        setInterval(function(){
            var reloj = moment().format("h:mm:ss"); 
            $('#reloj').html(reloj);
        },1000)
    }

    // Validación
    if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd/mm/yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

});