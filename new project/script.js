<script type="text/javascript">
     $(document).ready(function(){


$('#button').click(function(){translate();});

function translate(){
  
  var sourceText = $('textarea#sourceText').val();
  var sourceLang = 'ar';
  var targetLang = 'en';
  console.log(sourceText);
  
  var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
  //console.log(url);
  
  $.getJSON(url, function(data) {
      $('textarea#resultText').val(data[0][0][0]);
    });

}








     	});


	</script>