let text=document.querySelector('.text');
const ops=document.querySelector('.choice');
let utter= new SpeechSynthesisUtterance();
let synth=speechSynthesis;
let voices=[];
synth.onvoiceschanged=()=>{
    voices=synth.getVoices();
    utter.voice=voices[0];
    voices.forEach((voice,i)=>{ops.options[i]=new Option(voice.name,i);});
}
utter.onend=()=>{synth.cancel();}

function play()
{
    utter.voice=voices[ops.value];
    utter.text=text.value;
   synth.speak(utter);
}


function pause()
{
    
    synth.pause();
}

function resume()
{
 
    synth.resume();
}