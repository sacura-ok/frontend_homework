$(function(){

  $('input').focus(function() {
    $(this).val('');
  });

  $('button').on('click',function(){

    $('.block-images__image').remove();

    var API_KEY = '4779313-cf91834b18ea796b767f4be16';
    var reseach = $('input').val();

    $.ajax({
	     url: 'https://pixabay.com/api/?key='+API_KEY+'&q='+reseach,
	     dataType: 'jsonp',
	     type: 'GET',
	     success: function(result){
		     for( n = 0; n < result.hits.length; n++){
            $('.block-images').append('<div class="block-images__image"><img src="'+result.hits[n].webformatURL+'"></div>'); // result.data[x].images.low_resolution.url - это URL картинки среднего разрешения, 306х306
		    }
	    },
	     error: function(result){
		     console.log(result);
	    }
    });
  });

  $('input').keypress(function(event){

    if(event.keyCode==13){

      event.preventDefault();

      $('.block-images__image').remove();

      var API_KEY = '4779313-cf91834b18ea796b767f4be16';
      var reseach = $('input').val();

      $.ajax({
	       url: 'https://pixabay.com/api/?key='+API_KEY+'&q='+reseach,
	       dataType: 'jsonp',
	       type: 'GET',
	       success: function(result){
		         for( n = 0; n < result.hits.length; n++){
               $('.block-images').append('<div class="block-images__image"><img src="'+result.hits[n].webformatURL+'"></div>'); // result.data[x].images.low_resolution.url - это URL картинки среднего разрешения, 306х306
		         }
	       },
	       error: function(result){
		         console.log(result);
	       }
       });

     }
   });

});
