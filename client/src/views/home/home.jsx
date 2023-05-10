import "./home.css";
import Cards from "../../components/cards/cards";
import Filter from "../../components/Filter/Filter";

export default function Home() {
  return (
    <div className="home">
      <Filter />
      <div className="cards">
        <Cards />
      </div>
    </div>
  );
}
