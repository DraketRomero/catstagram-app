import { GET_BREEDS, SET_SELECTED_BREED, SET_SELECTED_CAT, TOGGLE_MODAL } from "../../types/types";

/* eslint-disable no-unreachable */
export const CatsReducer = (state, action) => {
  switch (action.type) {
    case GET_BREEDS:
      return {
        ...state,
        breeds: action.payload,
      };

    case SET_SELECTED_BREED:
      return {
        ...state,
        selectedBreed: action.payload,
      };

    case SET_SELECTED_CAT:
      return {
        ...state,
        selectedCat: action.payload,
      };

     case TOGGLE_MODAL:
      return {
        ...state,
        isOpenModal: action.payload,
      };

    default:
      return state;
  }
};
