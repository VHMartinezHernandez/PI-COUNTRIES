import {
  GET_COUNTRIES,
  GET_ACTIVITIES,
  GET_COUNTRIES_ID,
  GET_COUNTRIES_NAME,
  FILTER_CONTINENTS,
  FILTER_ACTIVITIES,
  ORDER_NAME,
  ORDER_POPULATION,
  NEXT_PAGE,
  PREV_PAGE,
  RESET_COUNTRIES,
  RESET_ACTIVITIES,
} from "./actions";

const initialState = {
  countries: [],
  countriesOrigin: [],
  countriesId: {},
  filterContinents: [],
  filterActivities: [],
  orderName: [],
  orderPopulation: [],
  numPage: 1,
  activities: [],
  allactivities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesOrigin: action.payload,
        filterContinents: action.payload,
        orderName: action.payload,
        orderPopulation: action.payload,
        filterActivities: action.payload,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        allactivities: action.payload,
      };

    case GET_COUNTRIES_ID:
      return {
        ...state,
        countriesId: action.payload,
      };

    case GET_COUNTRIES_NAME:
      return {
        ...state,
        countries: action.payload,
        numPage: 1,
      };

    case FILTER_ACTIVITIES:
      const stateActivities = state.filterActivities;
      const newFilteractivities = stateActivities.filter((char) =>
        char.Activities.find((element) => element.name === action.payload)
      );
      return {
        ...state,
        countries: newFilteractivities,
        filterContinents: newFilteractivities,
        numPage: 1,
      };

    case FILTER_CONTINENTS:
      const stateCountries = state.filterContinents;
      const newFilterContinents = stateCountries.filter(
        (char) => char.continents === action.payload
      );
      return {
        ...state,
        countries: newFilterContinents,
        filterActivities: newFilterContinents,
        numPage: 1,
      };

    case ORDER_NAME:
      const newOrderName = state.countries.sort((a, b) => {
        if (a.name > b.name) {
          return "Ascendente" === action.payload ? 1 : -1;
        }
        if (a.name < b.name) {
          return "Descendente" === action.payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        countries: [...newOrderName],
      };

    case ORDER_POPULATION:
      const newOrderPopulation = state.countries.sort((a, b) => {
        if (a.population > b.population) {
          return "min" === action.payload ? 1 : -1;
        }
        if (a.population < b.population) {
          return "max" === action.payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        countries: [...newOrderPopulation],
      };

    case PREV_PAGE:
      return {
        ...state,
        numPage: state.numPage - 1,
      };

    case NEXT_PAGE:
      return {
        ...state,
        numPage: state.numPage + 1,
      };

    case RESET_COUNTRIES:
      return {
        ...state,
        countries: [...state.countriesOrigin],
        filterActivities: [...state.countriesOrigin],
        filterContinents: [...state.countriesOrigin],
      };

    case RESET_ACTIVITIES:
      return {
        ...state,
        activities: [...state.allactivities],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
