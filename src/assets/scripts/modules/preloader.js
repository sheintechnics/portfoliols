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

	console.log(imagesTotalCount);
	console.log(imagesLoadedCount);
	

function imageLoaded() {
	imagesLoadedCount++;
	console.log(imagesLoadedCount);
	percDisplay.innerHTML = (((100/imagesTotalCount)*imagesLoadedCount)<<0) + '%';
	console.log((100/imagesTotalCount)*imagesLoadedCount);
	if(imagesLoadedCount >= imagesTotalCount)
	{
		setTimeout(function() {
			if(!preloader.classList.contains('done')){
				preloader.classList.add('done');
			}
			div.classList.add('visible');
		}, 2000);
		window.onload = function() {
			var div = document.querySelector('.wrapper');
			div.classList.add('visible');
		}
	}
}


