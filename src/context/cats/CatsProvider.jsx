/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { CatsContext } from "./CatsContext";
import { CatsReducer } from "./CatsReducer";
import { fetchCatData } from "../../helpers/fetchCatData";
import { GET_BREEDS, SET_SELECTED_BREED, SET_SELECTED_CAT, TOGGLE_MODAL } from "../../types/types";


export const CatsProvider = ( { children } ) => {

    const INITIAL_STATE = {
        selectedBreed: '',
        selectedCat: {
            name: '',
            description: '',
            url: ''
        },
        breeds: [],
        isOpenModal: false
    }

    const [ { selectedBreed, breeds, isOpenModal, selectedCat }, dispatch] = useReducer(CatsReducer, INITIAL_STATE);

    const onSelectedBreed = (catId) => {
        dispatch({ type: SET_SELECTED_BREED, payload: catId });
    }

    const getBreeds = async () => {
        await fetchCatData(`/breeds`)
        .then(response => response.json())
        .then(response => dispatch({ type: GET_BREEDS, payload: response }));
    };

    const setSelectedCat = async (catInfo) => {
        dispatch({ type: SET_SELECTED_CAT, payload: catInfo });
    };

    const toggleModal = () => {
        dispatch({ type: TOGGLE_MODAL, payload: !isOpenModal });
    }

    return(
        <CatsContext.Provider value={{
            breeds,
            selectedBreed,
            selectedCat,
            isOpenModal,
            getBreeds,
            onSelectedBreed,
            setSelectedCat,
            toggleModal
        }}>
            { children }
        </CatsContext.Provider>
    );
}