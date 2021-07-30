$(document).ready(function(){
    $('#class').click(function(){
       $('#first').addClass("red");
    })

    $('#toggle').click(function(){
        $('#second').slideToggle("slow");
    })

    $('#hide').click(function(){
        $('#third').hide("slow");
    })
    $('#seek').click(function(){
        $('#third').show("slow");
    })
    $('#fadein').click(function(){
        $('#fourth').fadeIn(1000);
    })
    $('#fadeout').click(function(){
        $('#fourth').fadeOut(1000);
    })
    $('#slideup').click(function(){
        $('#slide').slideUp("slow");
    })
    $('#slidedown').click(function(){
        $('#slide').slideDown("slow");
    })
    $('#append').click(function(){
        $('#sixth').append("<strong> I love Coding Dojo!</strong>");
    })
    $('#html').click(function(){
        $('#seventh').html("<strong> I love Coding Dojo!</strong>");
    })
    $('#seventh').hover(function(){
        $('#seventh').html("<strong> I love Coding Dojo!</strong>");
    })
    $('#before').click(function(){
        $('#JQuery').before("Here we go.");
    })
    $('#after').click(function(){
        $('#JQuery').after("<strong>Bring it!</strong>");
    })
    $('#attr').attr({
        id:"renamed"
    })
    $('#renamed').click(function(){
        $('#ninth').append(" The button ID was renamed successfully.");
    })
   
    $('#text').click(function(){
        $('#tenth').text("<strong>It's a beautiful day in the neighborhood!</strong>")
    })
    $('#value').click(function(){
        $("input:text").val("Finished last JQuery test!")
    })
})