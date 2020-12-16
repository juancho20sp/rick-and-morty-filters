import {
  TOGGLE_MENU,
  STATUS_OPTIONS,
  SPECIES_OPTIONS,
  LOCATION_OPTIONS,
  STATUS,
  SPECIES,
  LOCATION,
  NAME,
  CHARACTER_LIST,
  NEXT_PAGE
} from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    // Reducer del menú
    case TOGGLE_MENU:
      if (action.payload) {
        return {
          ...state,

          isMenuOpen: action.payload
        };
      }

      return {
        ...state,

        isMenuOpen: !state.isMenuOpen
      };

    // Reducer de los filtros
    case STATUS_OPTIONS:
      return {
        ...state,
        statusOptions: [...state.statusOptions, action.payload]
      };

    case SPECIES_OPTIONS:
      return {
        ...state,
        speciesOptions: [...state.speciesOptions, action.payload]
      };

    case LOCATION_OPTIONS:
      return {
        ...state,
        locationOptions: [...state.locationOptions, action.payload]
      };

    case STATUS:
      return {
        ...state,
        status: action.payload
      };

    case SPECIES:
      return {
        ...state,
        species: action.payload
      };

    case LOCATION:
      return {
        ...state,
        location: action.payload
      };

    case NAME:
      return {
        ...state,
        name: action.payload
      };

    case CHARACTER_LIST:
      return {
        ...state,
        characterList: action.payload
      };

    case NEXT_PAGE:
      return {
        ...state,
        nextPage: state.nextPage + 1
      };

    default:
      return state;
  }
};
