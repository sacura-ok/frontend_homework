$(document).ready(function(){

    var $oldNumberTab = 0;

    $('.tab').on('click', function() {

      var $numberTab = $(this).index('.tab');

      // console.log('this = ',this);
      // console.log('numberTab = ',$numberTab);

      $('div .tab').eq($oldNumberTab).removeClass('active');
      $('div .content').eq($oldNumberTab).hide();
      $('div .content').eq($numberTab).show();
			$('div .content').eq($numberTab).addClass('activeContent');
      $('div .tab').eq($numberTab).addClass('active');
      $oldNumberTab = $numberTab;

    });

});
