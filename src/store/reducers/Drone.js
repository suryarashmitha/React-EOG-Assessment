import * as actions from '../actions';

const initialState = {
    drone_Data: []
};

const updateDroneData = (state, action) => {
    return { drone_Data: action.data, }
};

const processors = {
    [actions.UPDATE_DRONE]: updateDroneData
}

export default (state = initialState, action) => {
    const processor = processors[action.type];
    if (typeof processor === "undefined") return state;
    return processor(state, action);
}