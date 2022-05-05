import "../styles.css";

export default function Card({ title, rating }) {
  return (
    <div className="card-container">
      <div className="title">{title}</div>
      <div className="rating">{rating}</div>
    </div>
  );
}
