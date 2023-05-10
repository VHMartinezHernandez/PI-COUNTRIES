import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterContinents,
  orderName,
  orderPopulation,
  getCountriesName,
  getActivities,
  filterActivities,
  resetCountries,
} from "../../redux/actions";

import "../Filter/Filter.css";

export default function Filter() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const [isActivitiesDisabled, setIsActivitiesDisabled] = useState(true);

  function handlerChange(event) {
    dispatch(getCountriesName(event.target.value));
  }

  function handleFilter(event) {
    dispatch(filterContinents(event.target.value));
    event.target.value = "DEFAULT";
  }

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleFilterActivities(event) {
    dispatch(filterActivities(event.target.value));
    setIsActivitiesDisabled(true);
  } 

  function handleOrder(event) {
    switch (event.target.value) {
      case "Ascendente":
        dispatch(orderName(event.target.value));
        break;
      case "Descendente":
        dispatch(orderName(event.target.value));
        break;
      case "min":
        dispatch(orderPopulation(event.target.value));
        break;
      case "max":
        dispatch(orderPopulation(event.target.value));
        break;
      default:
        break;
    }
  }

  function handleReset() {
    dispatch(resetCountries());
    setIsActivitiesDisabled(false);
  }

  return (
    <div className="filter">
      <button className="button-filter" onClick={handleReset}>Search activity</button>
      <select
        className="select-filter"
        key={activities.id}
        name="activities"
        disabled={isActivitiesDisabled}
        onChange={handleFilterActivities}
      >
        <option value="DISABLE">Activities</option>
        {activities.map((activity) => (
          <option key={activity.id} value={activity.name}>
            {activity.name}
          </option>
        ))}
      </select>

      <select className="select-filter" onChange={handleFilter}>
        <option value="DEFAULT">Continents</option>
        <option value="South America"> South America</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="North America">North America</option>
        <option value="Europe">Europe</option>
      </select>

      <select className="select-filter" onChange={handleOrder}>
        <option value="DEFAULT" disable="true">
          Order by
        </option>
        <option value="Ascendente">A-Z</option>
        <option value="Descendente">Z-A</option>
        <option value="min">Population: Min to Max</option>
        <option value="max">Population: Max to Min</option>
      </select>

      <form onChange={handlerChange}>
        <input className="input-filter" type="search" placeholder="Search Country" />
      </form>
      
    </div>
  );
}
