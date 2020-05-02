let volumetext= document.getElementById("volumetext");
let volume = document.getElementById("volume");
let playsound = document.getElementById("playsound");
let stopsound = document.getElementById("stopsound");
let sinewave;
let frequencytext = document.getElementById("frequencytext");
let frequency = document.getElementById("frequency");
let attacktext = document.getElementById("attacktext");
let attack = document.getElementById("attack");
let releasetext = document.getElementById("releasetext");
let release = document.getElementById("release");
let distortiontext = document.getElementById("distortiontext");
let distortion = document.getElementById("distortion");







function draw() {
volumetext.innerHTML = "Volume: " + volume.value;
frequencytext.innerHTML = "Frequency: " + frequency.value;
attacktext.innerHTML = "Attack: " + attack.value;
releasetext.innerHTML = "Release: " + release.value;
distortiontext.innerHTML = "Distortion: " + distortion.value;

playsound.onclick = function() {
  sineWave = new Pizzicato.Sound({
      source: 'wave'


  });
  let distortioneffect = new Pizzicato.Effects.Distortion({
gain: distortion.value/10




  })





  sineWave.frequency = frequency.value;
  sineWave.volume = volume.value/10;
  sineWave.attack = attack.value;
  sineWave.release = release.value;
  sineWave.addEffect(distortioneffect)

    sineWave.play();



}
stopsound.onclick = function() {
  sineWave.pause();



}




}



setInterval(draw, 60)
