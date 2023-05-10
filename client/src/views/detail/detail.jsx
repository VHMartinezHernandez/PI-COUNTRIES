import { getCountriesId } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const countriesId = useSelector((state) => state.countriesId);

  useEffect(() => {
    dispatch(getCountriesId(id));
  }, [dispatch, id]);

  return (
    <div className="detail">
      <h1>{countriesId.name}</h1>
      <img src={countriesId.flagImage} alt="" />
      <h2>Código del pais: {countriesId.id}</h2>
      <h4>Pertenece al continente de {countriesId.continents}</h4>
      <h4>La capital es {countriesId.capital}</h4>
      <h4>Pertenece a la subregión de {countriesId.subregion}</h4>
      <h4>Posee un área de {countriesId.area} mt2</h4>
      <h4>
        Tiene una población de{" "}
        {countriesId.population} habitantes
      </h4>
    </div>
  );
}
