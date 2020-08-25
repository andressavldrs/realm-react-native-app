import { ADD_PLACE } from "./places-action";
import Place from "../models/place";

const initialState = {
    places: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
            console.log(action.placeData)
            console.log(action.placeData.title)
            const newPlace = new Place(new Date().toString(), action.placeData.title );
            console.log(newPlace)
            return {
                places: state.places.concat(newPlace)
            };
        default:
            return state;
    }
}