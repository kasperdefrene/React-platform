import './App.css'
import Artwork from './components/Artwork';
import Slider from './components/Slider';
import ColorPicker from './components/ColorPicker';
import Creator from './components/Creator';
import { useState } from 'react';

function App() {
  const [radius, setRadius] = useState(125);
  const handleSetRadius = (e) => {
    setRadius(e);
  }

  const [background, setBackground] = useState('azure');
  const handleSetBackground = (e) => {
    setBackground(e);
  }

  const [colorOne, setColorOne] = useState('yellow');
  const handleSetColorOne = (e) => {
    setColorOne(e);
  }

  const[offsetOne, setOffsetOne] = useState(0);
  const handleSetOffsetOne = (e) => {
    setOffsetOne(e);
  }

  const offsetOnePercentage = offsetOne + '%';

  const [colorTwo, setColorTwo] = useState('orange');
  const handleSetColorTwo = (e) => {
    setColorTwo(e);
  }

  const [offsetTwo, setOffsetTwo] = useState(100);
  const handleSetOffsetTwo = (e) => {
    setOffsetTwo(e);
  }

  const offsteTwoPercentage = offsetTwo + '%';

  const [rotation, setRotation] = useState(90);
  const handleSetRotation = (e) => {
    setRotation(e);
  }

  const rotationResult = 'rotate(' + rotation + ')';

  const [seaLevel, setSeaLevel] = useState(250);
  const handleSetSeaLevel = (e) => {
    setSeaLevel(e);
  }

  const [colorBoat, setColorBoat] = useState('#4B5320');
  const handleSetColorBoat = (e) => {
    setColorBoat(e);
  }

  const [boatLocation, setBoatLocation] = useState(250);
  const handleSetBoatLocation = (e) => {
    setBoatLocation(e);
  }

  const boatY = seaLevel -250;

  const [inputText, setInputText] = useState("you");
  const handleNameChange = (e) => {
    setInputText(e);
  }

  const backgroundStyle = {
    backgroundColor: background
  }

    return (
        <div className="App">
          <div className='controls'>
            <h1>Sunset generator</h1>
            <h2>change the parameters and start generating</h2>

            <h2>Your name</h2>
            <Creator onValueChange={handleNameChange}/>
  
            <h2>Gradient circle</h2>
            <Slider label="Size" min="0" max="250" onValueChange={handleSetRadius} />
            <div className='Gradient'>
              <p>Color One</p>
              <ColorPicker label="colorOne" onValueChange={handleSetColorOne}/>
              <p>Color Two</p>
              <ColorPicker label="colorTwo" onValueChange={handleSetColorTwo}/>
            </div>
            <div className='sliders'>
              <Slider label="offsetOne" min="0" max="100" onValueChange={handleSetOffsetOne}/>
              <Slider label="offsetTwo" min="0" max="100" onValueChange={handleSetOffsetTwo}/>
              <Slider label="Rotation" min="0" max="360" onValueChange={handleSetRotation}/>
            </div>
  
            <h2>Background</h2>
            <ColorPicker onValueChange={handleSetBackground}/>
  
            <h2>Sea</h2>
            <Slider label="Sealevel" min="250" max="500" onValueChange={handleSetSeaLevel} />
  
            <h2>Boat</h2>
            <ColorPicker label="BoatColor" onValueChange={handleSetColorBoat}/>
            <Slider label="BoatLocation" min="-150" max="400" onValueChange={handleSetBoatLocation}/>
          </div>


          <div className='canvas' style={backgroundStyle}>
              <Artwork radius={radius} colorOne={colorOne} colorTwo={colorTwo} rotation={rotationResult} offsetOne={offsetOnePercentage} offsetTwo={offsteTwoPercentage} seaLevel={seaLevel} colorBoat={colorBoat} boatLocation={boatLocation} boatY={boatY}/>
              <h3 className='maker'>Created by {inputText}</h3>
          </div>        
        </div>

        
      );
}

export default App
