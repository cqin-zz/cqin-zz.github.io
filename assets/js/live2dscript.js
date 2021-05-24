const loadScript = function loadScript(c, b) {
			var a = document.createElement("script");
			a.type = "text/javascript";
			"undefined" != typeof b && (a.readyState ? a.onreadystatechange = function () {
				if ("loaded" == a.readyState || "complete" == a.readyState) a.onreadystatechange = null, b()
			} : a.onload = function () {
				b()
			});
			a.src = c;
			document.body.appendChild(a)
		};
		(function () {
			if ((typeof(device) != 'undefined') && (device.mobile())) {
				document.getElementById("live2dcanvas").style.width = '75px';
				document.getElementById("live2dcanvas").style.height = '150px';
			} 
			else if (typeof(device) === 'undefined') console.error('Cannot find current-device script.');
			loadScript("/assets/js/loadlive2d.js", function () {
				loadlive2d("live2dcanvas", "/assets/model/hijiki.model.json", 0.5);
			});
		})();