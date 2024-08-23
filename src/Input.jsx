import './Calculate1.css'
export default function InputAbove({handleChange,initialVal,name}){
    return (
        <nav className='InputNav'>
           <p className='paraInput'>{name}</p>
          <input name={name} className="Input" type="number" value={initialVal} onChange={handleChange}/>
        </nav>
        
    );
}