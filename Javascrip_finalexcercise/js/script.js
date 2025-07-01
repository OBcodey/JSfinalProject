
function upDate(previewPic){

  document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`
  document.getElementById('image').innerHTML = previewPic.alt;
  
	}

	function unDo(){
    
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
		
	}

  function AddTabFocus (){

    images = document.querySelectorAll(".preview");

    for (var i = 0; i < images.length;  i++) {
      console.log("image " + i);

      images[i].setAttribute("tabindex","0")
    }
  
}