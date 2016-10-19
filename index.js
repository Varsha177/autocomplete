function init() {
    $("li").hide();
}

$(document).ready(function(){


  $.getJSON('products.json', function(data){
    console.log(data);

    var $placeholder = $('#placeholder');


    $(data.products).each(function () {
        var output = "<li>" + this.name + " " + this.url + "--" + this.type + "</li>";
        $placeholder.append(output);
    });
        $("li").hide();
    $('.input').keyup(function () {
        var search = $(this).val();

        if (search.length <= 0) {
          $("li").hide();
        }
        else{
          var filterText = $("li").each(function () {
              var $this = $(this);

              var str = $this.text();
              var re = new RegExp(search, "i");

              var result = re.test(str);
              if (result) {
                $this.show()
              }
              else {
                $this.hide()
              }
            }); 

        }
       // else {
        //    $("li").show();
        //}
    });

  });

});
