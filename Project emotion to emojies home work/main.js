Webcam.set({
    height:300,
    width=350,
    image_format='png',
    image_quality=90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

        
    });