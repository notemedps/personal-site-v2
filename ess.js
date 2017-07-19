
	var text = ['Web Designer','App Developer','Programming Tutor','Web Developer'];
	var i =0;
	setInterval(function(){
		if(i>3){i=0;}
		$('#res').html(`

			<div class="typewriter" id="tp">
		      <h4>`+text[i]+`</h4>
		    </div>

			`);
		i++;
	},5000);


var more = ['I can design responsive web pages for you','I can develop mobile apps for you','I can teach Programming to you','I can develop both Static and Dynamic web pages for you'];

var j =0;
	setInterval(function(){
		if(j>3){j=0;}
		$('#more').html(`
			<b> 
			`+more[j]+`
			 </b>
			 `);
		j++;
	},5000);



