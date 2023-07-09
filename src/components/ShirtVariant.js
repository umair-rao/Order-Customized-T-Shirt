import React, { useState } from 'react'
import black from '../images/black.png'
import gray from '../images/gray.png'
import green from '../images/green.png'
import yellow from '../images/yellow.png'
import purple from '../images/purple.png'
import '../styles/ShirtVariant.css'

const ShirtVariant = () => {
    const [color, setcolor] = useState(black);
    const [text, settext] = useState('');

    const changeColor = (item) =>{
        setcolor(item)
    }

    const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [alignment, setAlignment] = useState('center');
  const [font, setFont] = useState('15px')

  const handleAlignmentChange = (newAlignment) => {
      setAlignment(newAlignment);
  };

  const textStyle = {
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalic ? 'italic' : 'normal',
    textAlign: alignment,
    transform: alignment === 'left' ? 'translate(-80%, -50%)' :
            alignment === 'right' ? 'translate(-30%, -50%)' : 'translate(-50%, -50%)',
    fontSize: font,
  };
 

  const increaseFont = () => {
    setFont((prevFont) => {
      const currentFontSize = parseInt(prevFont);
      const newFontSize = currentFontSize + 1;
      return `${newFontSize}px`;
    });
  };
  
  const decreaseFont = () => {
    setFont((prevFont) => {
      const currentFontSize = parseInt(prevFont);
      const newFontSize = currentFontSize - 1;
      return `${newFontSize}px`;
    });
  };
  


  return (
    <div className='container'>
    <div className='shirtVariant'>
        <img className='image' src={color} alt="" />
        <div className="text">
        <p style={textStyle}>{text}</p>
        </div>
    </div>
    <div className="textStyle">
    <div className="image-btn">
        <h2 className='heading'>Shirt Variant</h2>
    <button className='btn' onClick={() => changeColor(black)}>Black</button>
      <button className='btn' onClick={() => changeColor(gray)}>Gray</button>
      <button className='btn' onClick={() => changeColor(green)}>Green</button>
      <button className='btn' onClick={() => changeColor(purple)}>Purple</button>
      <button className='btn' onClick={() => changeColor(yellow)}>Yellow</button>
    </div>
    <div className="textArea">
        <p>Text Styles</p>
        <input
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
         />
    </div>
    </div>
    <div className="image-btn">
    <button className='btn' onClick={() => setIsBold(!isBold)}>Bold</button>
      <button className='btn' onClick={() => setIsItalic(!isItalic)}>Italic</button>
      <button className='btn' onClick={() => handleAlignmentChange('left')}>Left</button>
      <button className='btn' onClick={() => handleAlignmentChange('center')}>Center</button>
      <button className='btn' onClick={() => handleAlignmentChange('rigth')}>Rigth</button>
    </div>
    <div className="fontSize">
    <button className='btn' onClick={() => increaseFont()}>+</button>
    <p></p>
      <button className='btn' onClick={() => decreaseFont()}>-</button>
    </div>
    </div> 
  )
}

export default ShirtVariant
