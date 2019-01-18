var
	images = document.images,
	imagesTotalCount = images.length,
	imagesLoadedCount = 0,
	preloader = document.getElementById('page-preloader'),
	percDisplay = document.getElementById('load_perc');

for(var i = 0; i < imagesTotalCount; i++)
	{
		var imageClone = new Image();
		imageClone.onload = imageLoaded;
		imageClone.onerror = imageLoaded;
		imageClone.src = images[i].src;
	}

	// console.log(imagesTotalCount);
	// console.log(imagesLoadedCount);
	

function imageLoaded() {
	imagesLoadedCount++;
	// console.log(imagesLoadedCount);
	percDisplay.innerHTML = (((100/imagesTotalCount)*imagesLoadedCount)<<0) + '%';
	// console.log((100/imagesTotalCount)*imagesLoadedCount);
	if(imagesLoadedCount >= imagesTotalCount){
		window.onload = function() {
			var div = document.querySelector('.wrapper');
			setTimeout(function() {
				if(!preloader.classList.contains('done')){
					preloader.classList.add('done');
				}
			}, 2000);
			div.classList.add('visible');
		}
	}
}


