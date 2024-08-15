export default function Button({initial,handleChange}){
return(
<div className="slidecontainer">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={initial} 
              className="slider" 
              id="myRange" 
              onChange={handleChange}
            />
            <div className="slider-value" id="rangeValue">{initial}</div>
          </div>

);
}