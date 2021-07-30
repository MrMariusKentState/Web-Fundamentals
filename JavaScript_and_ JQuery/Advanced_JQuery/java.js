

    function paragraph(){
            $('p').hide();
        }



    $(document).ready( function() {

        $('h4').click(function() {
            $(this).parent().css("background-color","gray")
        })

        $('#container').click(function() {
            $(this).children().siblings().siblings().css("color", "red")
        })

        $('h3').click(function() {
            $(this).show('Hi there!')
            paragraph();
        })

        $('h4').hover(function() {
            $(this).css('color', 'blue');
        })

        $('form').submit(function(){
            console.log($(this).serialize());
            return false;        
        })

        $('h4').click(function(){
            $('form').submit();
        })

    })
