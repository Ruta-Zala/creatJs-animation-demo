import React from 'react';
import loadScript from 'load-script';

export default class ClassAnimationLoader extends React.Component {
  constructor (props) {
    super(props);
    this.loader = null;
    this.stage = null;
    this.canvas = React.createRef();
    this.animationContainer = React.createRef();
    this.domOverLayContainer = React.createRef();
  }

  componentDidMount () {
    loadScript('/assets/js/Testfile.js', (error, script) => {
      if (error) {
        console.log(error)
      } else {
        console.log(script.src)
        // eslint-disable-next-line no-undef
        const composition = AdobeAn.getComposition('5FAC3C4D49FFAB4A92C82020BAF07A5B')

        // eslint-disable-next-line no-undef
        this.loader = new createjs.LoadQueue(false);
        this.loader.addEventListener('fileload', (event) => this.handleFileLoad(event, composition))
        this.loader.addEventListener('complete', (event) => this.handleComplete(event, composition))
        const library = composition.getLibrary()
        this.loader.loadManifest(library.properties.manifest);
      }
    })
  }

  handleFileLoad = (evt, composition) => {
    let images = composition.getImages()
    if (evt && (evt.item.type == 'image')) { images[evt.item.id] = evt.result }
  }

  handleComplete = (event, composition) => {
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

    const exportRoot = new library['Testfile']();
    this.stage = new library.Stage(this.canvas);

    // eslint-disable-next-line no-undef
    AdobeAn.makeResponsive(false,'both',false,1,[this.canvas, this.animationContainer, this.domOverLayContainer]);
    // eslint-disable-next-line no-undef
    AdobeAn.compositionLoaded(library.properties.id);

    this.stage.addChild(exportRoot);
    /* eslint-disable */
    createjs.Ticker.framerate = library.properties.fps;
    createjs.Ticker.addEventListener("tick", this.tickHandler);
    /* eslint-enable */
  }

  tickHandler = () => {
    stage.update();
  }

  render () {
    return (
      <div id="animation_container" ref={this.animationContainer}
           style={{ backgroundColor: 'rgba(255, 255, 255, 1.00)', width: '1152px', height: '700px' }}>
        <canvas
          id="canvas"
          width="1152"
          height="700"
          ref={this.canvas}
          style={{ position: 'absolute', display: 'block', backgroundColor: 'rgba(255, 255, 255, 1.00)' }}
        />
        <div
          id="dom_overlay_container"
          ref={this.domOverLayContainer}
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
}
