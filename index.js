// function AJAX_JSON_Req( url )
// {
//     var AJAX_req = new XMLHttpRequest();
//     AJAX_req.open( "GET", url, true );
//     AJAX_req.setRequestHeader("Content-type", "application/json");
//
//     AJAX_req.onreadystatechange = function()
//     {
//         if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
//         {
//             var response = JSON.parse( AJAX_req.responseText );
//             document.write( response.name );
//         }
//     }
//     AJAX_req.send();
// }
//
// AJAX_JSON_Req( 'products.json' );
//
// var response = JSON.parse( AJAX_req.responseText );
// document.write( products[0].name );

$(document).ready(function(){
  $.getJSON('products.json', function(data){
    console.log(data);

    var $placeholder = $('#placeholder');


    $(data.products).each(function () {
        var output = "<ul><li>" + this.name + " " + this.url + "--" + this.type + "</li></ul>";
        $placeholder.append(output);
    });
    $('.input').keyup(function () {
        var yourtext = $(this).val();
        if (yourtext.length > 0) {
            var abc = $("li").filter(function () {
              var $this = $(this);
                var str = $this.text();
                var re = new RegExp(yourtext, "i");
                var result = re.test(str);
                if (!result) {
                    return $this;
                }
            }).hide();
        } else {
            $("li").show();
        }
    });

  });
});






//   $(".input").keyup(function(){
//
//     var input = $(".input").val();
//     //alert(input);
//
//     $.ajax({
//       url: "ajax.php",
//       data: "input="+input,
//       success: function(msg){
//         alert(msg);
//       }
//     });
//
//   });
// });
