// collapse plug in
$('.collapse').collapse()


//initialing popovers 

$(function() {
  $('[data-toggle="popover"]').popover()
 
})


$(document).ready(function() {
    $("#info_popover").popover({
        placement: 'bottom',
        html: 'true',
        title : '<span class="text-info"><strong>title</strong></span>'+
                '<button type="button" id="close" class="close" onclick="$(&quot;#info_popover&quot;).popover(&quot;hide&quot;);">&times;</button>',
        content : 'test'
    });
});


