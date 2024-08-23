import './Card.css';
export default function Card({children}){
    return (
        <div className="card">
          <p className="heading">
            Popular this month
          </p>
        {children}
        </div>
    );
}