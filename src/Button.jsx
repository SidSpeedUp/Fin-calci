const values=[
  {type:"hello",min:"10",max:'50'},
  {type:"hello",min:"10",max:'100'},
  {type:"hello",min:"10",max:'100'},
]
export default function Button({initial,handleChange,type}){
  let min = '0';
  let max='100';
  for (const value of values) {
    if (value.type === type) {
      min = value.min;
      max = value.max;
      break; // Exit the loop early when we find the matching type
    }
  }
 
return(
<div className="slidecontainer">
            <input 
              type="range" 
              min={min} 
              max={max}
              value={initial} 
              className="slider" 
              id="myRange" 
              onChange={handleChange}
            />  
            <div className="slider-value" id="rangeValue">{initial}</div>
          </div>

);
}