import './Card.css';
export default function Card({ title }) {
  return (
    <div className="card">
      <div className="card-image" style={{backgroundColor: '#ddd', height: '150px'}}></div>
      <h3>{title}</h3>
      <p>Eco-friendly accommodation.</p>
    </div>
  );
}