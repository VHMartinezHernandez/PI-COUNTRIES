import React from "react";
import "./form.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getCountries } from "../../redux/actions";
import { useHistory } from "react-router-dom";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: "Required",
    difficulty: "Required",
    duration: "",
    season: "Required",
    countries: "Required",
  });

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries); 
  const history = useHistory();

  const showModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  };

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    history.push('/home');
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const validate = (form) => {
    let errors = {};
    if (!form.name) {
      errors.name = "Nombre de actividad sin información";
    } else if (!/^[a-zA-Z0-9\s]{1,30}$/.test(form.name)) {
      errors.name = "Hay un error en el nombre";
    }
    if (!form.difficulty) {
      errors.difficulty = "La dificultad es requerida";
    }
    if (!form.season) {
      errors.season = "La temporada es requerida";
    }
    if (form.countries[0] === undefined) {
      errors.countries = "Debe seleccionar al menos un país";
    }
    setErrors(errors);
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    validate({ ...form, [property]: value }); 
    setForm({ ...form, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("/activities", form)
      .then((res) => showModal())
      .catch((errors) =>
        alert(
          "Oops! Parece que ya existe una actividad con el mismo nombre. Por favor, introduce un nombre diferente."
        )
      );
  };

  const selectHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    const res = form.countries.includes(value);

    if(!res && form.countries.length < 10) {
      setForm ({...form, countries: [...form.countries, value]})
     } else{
      return null
     } 
    validate({ ...form, [property]: value });     
  };

  return (
    <div >
      <form onSubmit={submitHandler} className="form-box">
      <h3>Add Activity</h3>
       
        <div>
          <label>Activity:</label>
          <input
            className="input-form"
            name="name"
            type="text"
            value={form.name}
            onChange={changeHandler}
          />         
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label>Difficulty:</label>
          <select
            className="select-form"
            name="difficulty"
            onChange={changeHandler}
            value={form.value}
          >
            <option value="DISABLE">Select difficulty</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.difficulty && (
            <span className="error">{errors.difficulty}</span>
          )}
        </div>

        <div>
          <label>Duration:</label>
          <select
            className="select-form"
            name="duration"
            onChange={changeHandler}
            value={form.value}
          >
            <option value="DISABLE">Select duration</option>
            <option value="1:00">1:00 hrs</option>
            <option value="1:30">1:30 hrs</option>
            <option value="2:00">2:00 hrs</option>
            <option value="2:30">2:30 hrs</option>
            <option value="3:00">3:00 hrs</option>
            <option value="3:30">3:30 hrs</option>
            <option value="4:00">4:00 hrs</option>
          </select>
        </div>

        <div>
          <label>Season:</label>
          <select
            className="select-form"
            name="season"
            onChange={changeHandler}
            value={form.value}
          >
            <option value="DISABLE">Select season</option>
            <option value="Primavera">Primavera</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
          </select>
          {errors.season && <span className="error">{errors.season}</span>}
        </div>

        <div>
          <label>Country:</label>
          <select
            className="select-form"
             key={countries.id}
             name="countries"             
             value={form.countries} 
            onChange={selectHandler}            
          >
            <option value="DISABLE">Select countries</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.countries && (
            <span className="error">{errors.countries}</span>
          )}

          <div className="selected-countries">
            {form.countries.map((countryId) => (
              <span key={countryId} className="selected-country">
                {countries.find((country) => country.id === countryId).id}
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => {
                    const newCountries = form.countries.filter((id) => id !== countryId);
                    setForm({...form, countries: newCountries});
                  }}
                >
                  x
                </button>
              </span>
            ))}
          </div>
        </div>

        <div >
          <button  type="submit" disabled={errors.name || errors.difficulty || errors.season || errors.countries}>Enviar</button>
        </div>
        <div id="myModal" className="modal-form">
        <div className="modal-content-form">
          <h2>Activity created successfully</h2>
          <button className="button-close-form" onClick={closeModal}>OK</button>
        </div>
      </div>
      </form>
    </div>
  );
}
