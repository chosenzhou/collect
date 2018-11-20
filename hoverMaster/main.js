/**
 * 
 
 */
//the script of img25
			var newImg25=document.getElementById("new-img25");
			var oldImg25=document.getElementById("old-img25");
			var itemsImg25=document.getElementById("items-img25");
			var oldLeft=itemsImg25.offsetLeft;
			var oldWidth=oldImg25.clientWidth;

			function img25Mouseover(event){
				var distanceX=event.clientX-oldLeft;
				if(distanceX<oldWidth){
					oldImg25.style.width=distanceX+"px";
				}
			}

			function img25Mouseout(event){
				oldImg25.style.width=oldWidth+"px";
			}

			itemsImg25.addEventListener("mousemove", img25Mouseover,false);
			itemsImg25.addEventListener("mouseout", img25Mouseout,false)
