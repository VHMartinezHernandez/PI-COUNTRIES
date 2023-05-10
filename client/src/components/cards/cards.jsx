import "./cards.css";
import Card from "../card/card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries, getActivities } from "../../redux/actions";
import Paginate from "../paginate/Paginate";

export default function Cards() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const { numPage } = useSelector((state) => state);
  const desde = (numPage - 1) * 10;
  const hasta = numPage * 10;

  const cantPages = Math.floor(countries.length / 10);
  const viewCountries = countries.slice(desde, hasta);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <div className="cards-list">
        {viewCountries.map((country) => {
          return (
            <Card
              key={country.id}
              flagImage={country.flagImage}
              id={country.id}
              name={country.name}
              continents={country.continents}
              population={country.population}
              Actividad={country.Activities}
            />
          );
        })}
      </div>
      <Paginate cantPages={cantPages}></Paginate>
    </div>
  );
}
