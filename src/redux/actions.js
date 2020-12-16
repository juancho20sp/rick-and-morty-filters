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
  NEXT_PAGE,
  FILTERED_CHARACTERS
} from "./types";

// Acciones para el menú
export const toggleMenu = (payload) => ({
  type: TOGGLE_MENU,
  payload
});

// Acciones para los filtros
export const setStatusOptions = (payload) => ({
  type: STATUS_OPTIONS,
  payload
});

export const setSpeciesOptions = (payload) => ({
  type: SPECIES_OPTIONS,
  payload
});

export const setLocationOptions = (payload) => ({
  type: LOCATION_OPTIONS,
  payload
});

export const setStatus = (payload) => ({
  type: STATUS,
  payload
});

export const setSpecies = (payload) => ({
  type: SPECIES,
  payload
});

export const setLocation = (payload) => ({
  type: LOCATION,
  payload
});

export const setName = (payload) => ({
  type: NAME,
  payload
});

export const setCharacterList = (payload) => ({
  type: CHARACTER_LIST,
  payload
});

export const setNextPage = (payload) => ({
  type: NEXT_PAGE,
  payload
});

export const setFilteredCharacters = (payload) => ({
  type: FILTERED_CHARACTERS,
  payload
});
