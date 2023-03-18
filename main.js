status="";
objects=[];

function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(380,380);
    video.hide();
}

function start()
{
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects ";
    document.getElementById("object_input").innerHTML = object_input;
    
    if(objects[i].label==object_name)
    {
        document.getElementById("object_status").innerHTML=object_name+"found";
        video.stop();
        function speak()
        {
            var synth=window.speechSynthesis;
            speak=object_input;
            var utterThis = new SpeechSynthesisUtterance (object_input + "found");
            synth.speak(utterThis);
        }
            document.getElementById("object_status").innerHTML=object_name+"not found";
        
    }

}

function modelLoaded()
{
    console.log("Model Loaded!");
    status=true;
}

function draw()
{
    image(video,0 , 0,380,380);
    if(status!="")
    {
        for(i = 0; i < objects.length; i++)
            {
                document.getElementById("status").innerHTML = "Status : Objects Detected";
                document.getElementById("number_of_objects").innerHTML = "Number of Objects Detcted are: " + objects.length; 
                
                fill('#FF0000');
                percent = floor(objects[i].confidence * 100);

               text(objects[i].label + "" + '&nbsp' + percent + "%", objects[i].x + 15, objects[i].y + 15);
             
               noFill();
               stroke('#FF0000');
               rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
    }
}

function gotResult()
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
