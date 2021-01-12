import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [btnPlay, setBtnPlay] = useState(<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>)

  const [reproduciendo, setReproduciendo] = useState(false);


//   const radiosBA = [
//   {id:0, nombre: "Vorterix", url: "https://radiolatina.live:9300/;"},
//   {id:1, nombre: "Metro", url: "https://mp3.metroaudio1.stream.avstreaming.net:7200/metro"},
//   {id:2, nombre: "Los 40 principales", url: "https://17963.live.streamtheworld.com/LOS40_ARGENTINA_SC"},
//   {id:3, nombre: "Disney", url: "https://us-b4-p-e-az1-audio.cdn.mdstrm.com/live-audio/5b7dcf9b7f880d076b1ed74d/5db1aedcf0829139c07b1285/icecast.audio?pid=fWYzPi23WQm0Atijaglr72f5V8aRO76t&sid=C7yrX4TAmjJARUOmLGHdpQNJfrfvTJ7D&uid=1cmT9Lmy3Zq9poAacdA1y8P3G1DmoDc1&es=us-b4-p-e-az1-audio.cdn.mdstrm.com&ote=1596188134853&ot=nXU2riy2g6AH8uhpXdFAJw&proto=https&pz=us&cP=128000"},]

  const radiosParis = [
  {id:0, nombre: "Jazz Radio Blues", url: "https://jazzblues.ice.infomaniak.ch/jazzblues-high"},
  {id:1, nombre: "France Info", url: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3"},
  {id:2, nombre: "Hotmixradio 80", url: "https://streamingp.shoutcast.com/hotmixradio-80-128.mp3"},
  {id:3, nombre: "Fun Radio FR", url: "https://icecast.funradio.fr/fun-1-44-128?listen=wEbDAQODAkPCwwMAg8EBAIFCQ"},]

  const radiosLondres = [
  {id:0, nombre: "Heart London", url: "https://media-ice.musicradio.com/HeartLondonMP3"},
  {id:1, nombre: "Capital FM", url: "https://media-ssl.musicradio.com/Capital"},
  {id:2, nombre: "Virgin Radio UK", url: "https://radio.virginradio.co.uk/stream"},
  {id:3, nombre: "Absolute Radio", url: "https://ais.absoluteradio.co.uk/absoluteradiohigh.aac"},]

  const radiosLA = [
  {id:0, nombre: "Radio Rock On", url: "https://streaming.radiostreamlive.com/radiorockon_devices"},
  {id:1, nombre: "K-SURF", url: "https://17813.live.streamtheworld.com/KSURAM_SC"},
  {id:2, nombre: "KABC", url: "https://16693.live.streamtheworld.com/KABCAM.mp3"},
  {id:3, nombre: "KARL", url: "https://ais-edge07-live365-dal02.cdnstream.com/a81327"},]



//   const ciudades = [{id:0, radio: radiosBA, nombre: "Buenos Aires", video: "https://www.youtube.com/embed/75X9vSFCh14?autoplay=1&amp;controls=0&amp;start=40&amp;origin=https%3A%2F%2Fdriveandlisten.herokuapp.com&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1&amp;modestbranding=1"},
//           {id:1, radio: radiosParis, nombre: "Paris", video: "https://www.youtube.com/embed/FBjjYw-xcdg?autoplay=1&amp;controls=0&amp;start=40&amp;origin=https%3A%2F%2Fdriveandlisten.herokuapp.com&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1&amp;modestbranding=1"},
//           {id:2, radio: radiosLondres, nombre: "Londres", video: "https://www.youtube.com/embed/QI4_dGvZ5yE?autoplay=1&amp;controls=0&amp;start=40&amp;origin=https%3A%2F%2Fdriveandlisten.herokuapp.com&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1&amp;modestbranding=1"},
//           {id:3, radio: radiosLA, nombre: "Los Angeles", video: "https://www.youtube.com/embed/Cw0d-nqSNE8?autoplay=1&amp;controls=0&amp;start=40&amp;origin=https%3A%2F%2Fdriveandlisten.herokuapp.com&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1&amp;modestbranding=1"}]

  const ciudades = [{id:0, radio: radiosParis, nombre: "Paris", video: "https://www.youtube.com/embed/FBjjYw-xcdg?autoplay=1&amp;controls=0&amp;start=40&amp;origin=https%3A%2F%2Fdriveandlisten.herokuapp.com&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1&amp;modestbranding=1"},
          {id:1, radio: radiosLondres, nombre: "Londres", video: "https://www.youtube.com/embed/QI4_dGvZ5yE?autoplay=1&amp;controls=0&amp;start=40&amp;origin=https%3A%2F%2Fdriveandlisten.herokuapp.com&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1&amp;modestbranding=1"},
          {id:2, radio: radiosLA, nombre: "Los Angeles", video: "https://www.youtube.com/embed/Cw0d-nqSNE8?autoplay=1&amp;controls=0&amp;start=40&amp;origin=https%3A%2F%2Fdriveandlisten.herokuapp.com&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1&amp;modestbranding=1"}]

  
  const [ciudad, setCiudad] = useState(ciudades[0]);

  const [radio, setRadio] = useState(ciudad.radio[0]);



  useEffect(() => {
  
  }, []);


  function cargarAudio(){

    let audio = document.getElementById("myAudio")

    audio.pause()

    audio.load()

    audio.play()

  }


  function handleSelect(event){

    setCiudad(ciudades[event.target.value])

    setRadio(ciudades[event.target.value].radio[0])

    cargarAudio()

  }


  function handleAtras(e){

    if(!(radio.id==0)){

      setRadio(ciudad.radio[(radio.id-1)])

      cargarAudio()

    }else{

      setRadio(ciudad.radio[3])

      cargarAudio()

    }

    
  }


  function handleAdelante(e){

    if(!(radio.id==3)){

      setRadio(ciudad.radio[(radio.id+1)])

      cargarAudio()

    }else{

      setRadio(ciudad.radio[0])

      cargarAudio()

    }

  }

  function handlePlay(e) {

    let audio = document.getElementById("myAudio")

    if(!reproduciendo){

      audio.play()

      setBtnPlay(<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-pause-fill" fill="currentColor" xmlns="https://www.w3.org/2000/svg"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>)

      setReproduciendo(true)

    }else{

      audio.pause()

      setBtnPlay(<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-play-fill" fill="currentColor" xmlns="https://www.w3.org/2000/svg"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>)

      setReproduciendo(false)

    }

  }


  return (

    <div className="App">


        <div className="contenedorVideo">


          <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" 
            src={ciudad.video}
          id="widget2"></iframe>
          

        </div>


        <div className="contenedor">

          <audio style={{display: 'none'}} id="myAudio" autoplay controls="controls">

            <source src={radio.url} type="audio/mpeg" /> 

          </audio> 

          <div className="menu">

            <h1 className="titulo">Maneja y escucha</h1>

            <br></br>

              <select value={ciudad.id} onChange={handleSelect} className="form-control">
               
               {ciudades.map((ciudad, index) =>

                 <option key={index} value={index}>

                  {ciudad.nombre}

                 </option>

                )}

              </select>

              <br></br>

            <div className="card radio">
              <div className="card-header">{radio.nombre}</div>
              <div className="card-body controles">

                <div onClick={handleAtras} className="atras">

                  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-skip-start-fill" fill="currentColor" xmlns="https://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"/>
                    <path d="M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 0 0 0 1.393z"/>
                  </svg>

                </div>

                <div onClick={handlePlay} className="play">

                  {btnPlay}

                </div>

                <div onClick={handleAdelante} className="adelante">

                  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-skip-end-fill" fill="currentColor" xmlns="https://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                  </svg>

                </div>
                  
              </div>
            </div>
            
          </div>
          
        </div>

    </div>

  );
}

export default App;