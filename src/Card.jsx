import './Card.css';
export default function Card({children}){
    return (
        <div class="card">
          <p class="heading">
            Popular this month
          </p>
        {children}
        </div>
    );
}