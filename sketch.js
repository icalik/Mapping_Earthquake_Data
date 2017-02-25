var mapimg;


var clat = 0;
var clon = 0;

var zoom = 1;

var lat = 38.67431;
var lon = 39.22321;


function preload() {
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiaXNjYWxpayIsImEiOiJjaXpsZjBsb3AwMDBzMndtZm1ucWJmdWE4In0.imQhhgVvyQ2lf6i6xu0EOQ');
}

function mercX(lon) {
  lon = radians(lon);
  var a = (256/PI) * pow(2,zoom);
  var b = lon + PI;
  return a*b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256/PI) * pow(2,zoom);
  var b = tan(PI/4 + lat/2);
  var c = PI - log(b); //This log is ln, natural logarithm.
  return a*c;
}

function setup() {
  createCanvas(1024,512);
  translate(width/2,height/2);
  imageMode(CENTER);
  image(mapimg,0,0);

  var cx = mercX(clon);
  var cy = mercY(clat);

  var x = mercX(lon) - cx;
  var y = mercY(lat) - cy;

  fill(255,0,255,200);
  ellipse(x,y,8,8);

}
