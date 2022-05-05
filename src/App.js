import "./styles.css";

import Card from "./Components/Card";

export default function App() {
  const cardData = [
    { title: "ABC", rating: "4.5" },
    { title: "ABC", rating: "4.5" },
    { title: "ABC", rating: "4.5" },
    { title: "ABC", rating: "4.5" },
    { title: "ABC", rating: "4.5" },
    { title: "ABC", rating: "4.5" },
    { title: "ABC", rating: "4.5" },
    { title: "ABC", rating: "4.5" }
  ];
  const cardList = cardData.map(({ title, rating }) => {
    return <Card title={title} rating={rating} />;
  });
  return (
    <div className="App">
      <div className="cardList">{cardList}</div>
    </div>
  );
}
