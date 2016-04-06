    $(document).ready(
            function() {
				
				$("#welcome").text("HckUr");
				$("#welcome").fadeTo(2000, 1);
				$("#welcome").css({"background-color": "transparent", "color": "black", "font-size": "120px"});
				
				$('#homeButton').click(function(){
					$('body').animate({
					'background-position-y': '100%'
						}, 1000, 'linear');
						

					$('#welcome').fadeTo(500, 0);
					
					setTimeout(function (){
					
						$("#welcome").text("HckUr");
						$("#welcome").css({"background-color": "transparent", "color": "black", "font-size": "120px"});
					}, 1300);
					
					setTimeout(function (){
						$('#welcome').fadeTo(500, 1);

					}, 1500);
					
				});
				
				
				$('#aboutButton').click(function(){
					$('body').animate({
					'background-position-y': '0%'
						}, 1000, 'linear');
						
					$('#welcome').fadeTo(500, 0);
					
					setTimeout(function (){
						$.ajax({
							type: "POST", url: "about.html", success: function(a) {
								$('#welcome').html(a);
							}
						});
						
						$("#welcome").css({"background-color": "rgba(18, 18, 18, 0.5)", "color": "white"});
					}, 1300);
					
					setTimeout(function (){
						$('#welcome').fadeTo(500, 1);

					}, 1500);
					
				});
				
				
				$('#worksButton').click(function(){
					$('body').animate({
					'background-position-y': '0%'
						}, 1000, 'linear');
						
					$('#welcome').fadeTo(500, 0);
					
					setTimeout(function (){
						$.ajax({
							type: "POST", url: "works.html", success: function(a) {
								$('#welcome').html(a);
							}
						});
						
						$("#welcome").css({"background-color": "rgba(18, 18, 18, 0.5)", "color": "white"});
					}, 1300);
					
					setTimeout(function (){
						$('#welcome').fadeTo(500, 1);

					}, 1500);
					
				});
					
					
					
				$('#cvButton').click(function(){
					$('body').animate({
					'background-position-y': '0%'
						}, 1000, 'linear');
						
					$('#welcome').fadeTo(500, 0);
					
					setTimeout(function (){
						$.ajax({
							type: "POST", url: "cv.html", success: function(a) {
								$('#welcome').html(a);
							}
						});
						$("#welcome").css({"background-color": "rgba(18, 18, 18, 0.5)", "color": "white"});
					}, 1300);
					
					setTimeout(function (){
						$('#welcome').fadeTo(500, 1);

					}, 1500);
					
				});
				
				$(document).on("click", "#AS", function() {				
					
					$('#rest').fadeTo(100, 0);
					setTimeout(function(){
						$("#rest").fadeTo(100,1);
					}, 200);
					
					setTimeout(function(){
						$("#socialLinks").fadeTo(100,1);
					}, 200);
					
					setTimeout(function(){
						$.ajax({
							type: "POST", url: "../cvs/AS/spanish.html", success: function(a) {
								$('#rest').html(a);
							}
						});		
					}, 100);
					
					setTimeout(function(){
						$.ajax({
							type: "POST", url: "../cvs/AS/socialLinks.html", success: function(a) {
								$('#socialLinks').html(a);
							}
						});		
					}, 100);

				});

				$(document).on("click", "#DP", function() {				
					
					$('#rest').fadeTo(100, 0);
					setTimeout(function(){
						$("#rest").fadeTo(100,1);
					}, 200);
					
					setTimeout(function(){
						$.ajax({
							type: "POST", url: "../cvs/DP/spanish.html", success: function(a) {
								$('#rest').html(a);
							}
						});		
					}, 100);
					
					setTimeout(function(){
						$.ajax({
							type: "POST", url: "../cvs/DP/socialLinks.html", success: function(a) {
								$('#socialLinks').html(a);
							}
						});		
					}, 100);

				});		
				
				$(document).on("click", "#CB", function() {				
					
					$('#rest').fadeTo(100, 0);
					setTimeout(function(){
						$("#rest").fadeTo(100,1);
					}, 200);
					
					setTimeout(function(){
						$.ajax({
							type: "POST", url: "../cvs/CB/spanish.html", success: function(a) {
								$('#rest').html(a);
							}
						});		
					}, 100);
					
					setTimeout(function(){
						$.ajax({
							type: "POST", url: "../cvs/CB/socialLinks.html", success: function(a) {
								$('#socialLinks').html(a);
							}
						});		
					}, 100);

				});
				
    });