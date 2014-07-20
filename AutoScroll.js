!function(d,f,s){s=d.createElement("script");s.src="//j.mp/1bPoAXq";s.onload=function(){f(jQuery.noConflict(1))};d.body.appendChild(s)}(document,function($){	
var lastOffset = $(window).scrollTop();
var lastDate = new Date().getTime();
$(window).scroll(function(e) {
    var delayInMs = e.timeStamp - lastDate;
    var offset = e.target.scrollTop - lastOffset;
    var speedInpxPerMs = offset / delayInMs;
    console.log(speedInpxPerMs);
    lastDate = e.timeStamp;
    lastOffset = e.target.scrollTop;
});
})