var original_link = "{% url 'cart:add-coupon' order.id %}";
    $('#code').on('change', function(){
        $('.button').attr('href', original_link);
        code = document.getElementById("code").value;
        var new_href = $('.button').attr('href') + '?coupon_code=' + code;
        $('.button').attr('href', new_href);
    });