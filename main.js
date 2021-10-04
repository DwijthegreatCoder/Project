/* https://teachablemachine.withgoogle.com/models/Edr7RRFrS/ */

Webcam.set({
    width: 350,
    height: 350,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innnerHTML = '<img id="captured_image" src="'+data_uri+'"';
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Edr7RRFrS/model.json',modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded!!!!!!!!!!!")
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "The prediction is" + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function check() {
    document.getElementById('captured image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_face_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak();
        if(results[0].label == "Me")
            {
                document.getElementById("update_face").innerHTMl = "Dwij";
            }

            if(results[0].label == "Father")
            {
                document.getElementById("update_face").innerHTMl = "Manthan";
            }

            if(results[0].label == "Mother")
            {
                document.getElementById("update_face").innerHTMl = "Madhavi";
            }
    }
}