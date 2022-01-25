

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'">';
    });
}
console.log('ml5 version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/O9Q3-4jfn/model.json',modelready);
function modelready(){
    console.log(' Model Ready');

}