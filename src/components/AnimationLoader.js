import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
//import createjs from "createjs";
import loadScript from 'load-script';

let loader, exportRoot, stage;

export default function AnimationLoader () {
  const canvasRef = useRef(null);
  const animationContainer = useRef(null);
  const domOverLayContainer = useRef(null);

  useEffect(() => {
    global.createjs = window.createjs;
    window.AdobeAn = window.AdobeAn || {}

    loadScript('/assets/js/Testfile.js', (error, script) => {
      if (error) {
        console.log(error)
      } else {
        console.log(script.src)
        // eslint-disable-next-line no-undef
        const composition = AdobeAn.getComposition('5FAC3C4D49FFAB4A92C82020BAF07A5B')

        // eslint-disable-next-line no-undef
        loader = new createjs.LoadQueue(false);
        if (loader) {
          loader.addEventListener('fileload', (event) => handleFileLoad(event, composition))
          loader.addEventListener('complete', (event) => handleComplete(event, composition))
          const library = composition.getLibrary()
          loader.loadManifest(library.properties.manifest);
        }
      }
    })
  })

  const handleFileLoad = (evt, composition) => {
    let images = composition.getImages()
    if (evt && (evt.item.type == 'image')) { images[evt.item.id] = evt.result }
  }

  const handleComplete = (event, composition) => {
    const library = composition.getLibrary();
    const ss = composition.getSpriteSheet();

    const queue = event.target;
    const ssMetadata = event.ssMetadata;

    if (ssMetadata) {
      for(let i = 0; i < ssMetadata.length; i++) {
        // eslint-disable-next-line no-undef
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {images: [queue.getResult(ssMetadata[i].name)], frames: ssMetadata[i].frames} )
      }
    }

    exportRoot = new library['Testfile']();
    stage = new library.Stage(canvasRef);

    // eslint-disable-next-line no-undef
    AdobeAn.makeResponsive(false,'both',false,1,[canvas, animationContainer, domOverLayContainer]);
    // eslint-disable-next-line no-undef
    AdobeAn.compositionLoaded(library.properties.id);

    stage.addChild(exportRoot);
    /* eslint-disable */
    createjs.Ticker.framerate = library.properties.fps;
    createjs.Ticker.addEventListener("tick", tickHandler);
    /* eslint-enable */
  }

  const tickHandler = () => {
    stage.update();
  }

  return (
    <div id="animation_container" ref={animationContainer}
         style={{ backgroundColor: 'rgba(255, 255, 255, 1.00)', width: '1152px', height: '700px' }}>
      <canvas
        id="canvas"
        width="1152"
        height="700"
        ref={canvasRef}
        style={{ position: 'absolute', display: 'block', backgroundColor: 'rgba(255, 255, 255, 1.00)' }}
      />
      <div
        id="dom_overlay_container"
        ref={domOverLayContainer}
        style={{
          pointerEvents: 'none',
          overflow: 'hidden',
          width: '1152px',
          height: '700px',
          position: 'absolute',
          display: 'block',
          left: '0px',
          top: '0px'
        }}
      />
    </div>
  )
}
