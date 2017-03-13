jQuery(document).ready(function() {

    $img = $('img');
    i = 0;
    nombreImg = $img.length - 1;
    $imgVisible = $img.eq(i);
    var $prev = $('#prev');
    var $next = $('#next');


    // $( "img" ).not("imgVisible").hide();








    $next.click(function() {

        i++;
        $img.css('display', 'none');
        $imgVisible = $img.eq(i);
        $imgVisible.css('display', 'block');
        if (i >= nombreImg) {
          i = 0;
        }

    });

    $prev.click(function() {

        i--;
        $img.css('display', 'none');
        $imgVisible = $img.eq(i);
        $imgVisible.css('display', 'block');

        if (i < 0) {
            i = nombreImg;
        }

    });

    var autorun = setInterval(function() {

        if (i < nombreImg) {
          i++;
        } else {
            i = 0;
        }

        $img.css('display', 'none');
        $imgVisible = $img.eq(i);
        $imgVisible.css('display', 'block');


    }, 3000);

});
