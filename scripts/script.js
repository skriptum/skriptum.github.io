var c = document.getElementById('canva') 
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
var $ = c.getContext("2d");

// setInterval("draw('#421d21', '#4c2006', 100, 55, 0, 0)", 5000); // Milliseconds

function draw(c1, c2, s, rat, _x, _y){
	var x=0, y=0;
	var col = 0, split = rat/100;
	while (x<=w){
		while(y<=h){
		  col = Math.random();
        if(col<split) $.fillStyle = c1;
        else $.fillStyle = c2;
			geo(x,y,s);
			y+=(s*1.0)+(_y*1.0);
		}
		  x+=(s*1.0)+(_x*1.0); y=0;    
    } 
}
function geo(x, y, l){
	$.save();
	$.translate(x,y);
	$.rotate(Math.floor(Math.random()*4)*(Math.PI/2));
  $.shadowColor = 'black';
  $.shadowBlur = Math.random()*100;
  $.shadowOffsetX = 1;
  $.shadowOffsetY = 1;
	$.beginPath();
	$.lineTo(l,-l);
	$.lineTo(l,0);
	$.lineTo(0,l);
	$.lineTo(-l,0);
	$.lineTo(-l,-l);
	$.lineTo(0,0);
	$.closePath();
	$.fill();
	$.restore();
}
draw('#421d21', '#4c2006', 100, 55, 0, 0); 


// window.addEventListener('keydown',function(e){
//   e.preventDefault();
//   draw('#421d21', '#4c2006', 100, 55, 0, 0); 
// }, false);

window.addEventListener('resize',function(e){
	e.preventDefault();
	draw('#421d21', '#4c2006', 100, 55, 0, 0); 
  }, false);

/* cube scroll animation */
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

