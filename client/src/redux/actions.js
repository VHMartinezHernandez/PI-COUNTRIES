import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRIES_ID = "GET_COUNTRIES_ID";
export const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME";
export const FILTER_CONTINENTS = "FILTER_CONTINENTS";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const RESET_COUNTRIES = "RESET_COUNTRIES";
export const RESET_ACTIVITIES = "RESET_ACTIVITIES";

export const getCountries = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/countries");
    const countries = apiData.data;
    dispatch({
      type: GET_COUNTRIES,
      payload: countries,
    });
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const activData = await axios.get("http://localhost:3001/activities");
    const activities = activData.data;
    dispatch({
      type: GET_ACTIVITIES,
      payload: activities,
    });
  };
};

export const getCountriesId = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_COUNTRIES_ID, payload: data }));
  };
};

export function getCountriesName(name) {
  return async (dispatch) => {
    const res = await axios.get(
      `http://localhost:3001/countries/?name=${name}`
    );
    dispatch({ type: GET_COUNTRIES_NAME, payload: res.data });
  };
}

export function filterContinents(continents) {
  return {
    type: FILTER_CONTINENTS,
    payload: continents,
  };
}

export function filterActivities(activities) {
  return {
    type: FILTER_ACTIVITIES,
    payload: activities,
  };
}

export function orderName(order) {
  return {
    type: ORDER_NAME,
    payload: order,
  };
}

export function orderPopulation(population) {
  return {
    type: ORDER_POPULATION,
    payload: population,
  };
}

export function prevPage() {
  return {
    type: PREV_PAGE,
  };
}

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}

export function resetCountries() {
  return {
    type: RESET_COUNTRIES,
  };
}

export function resetActivities() {
  return {
    type: RESET_ACTIVITIES,
  };
}

