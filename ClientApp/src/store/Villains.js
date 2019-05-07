const requestVillainsType = 'REQUEST_VILLAINS';
const receiveVillainsType = 'RECEIVE_VILLAINS';
const addVillainType = 'ADD_VILLAIN';
const initialState = { villains: [], isLoading: false };

const allvillains = [
    {
        name: "Wei Wu",
        message: "Please leave a message here if you have any thinkings about me",
        email: "wuwei8372@gmail.com"
    }
]

export const actionCreators = {
    requestVillains: () => async (dispatch, getState) => {

        dispatch({ type: requestVillainsType });

        const url = `api/Villains`;
        const response = await fetch(url);
        const allvillains = await response.json();
        console.log(allvillains);

        dispatch({ type: receiveVillainsType, allvillains });
    },

    addVillain: (villain) => async (dispatch, getState) => {

        dispatch({ type: addVillainType, villain });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestVillainsType) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveVillainsType) {
        return {
            ...state,
            villains: action.allvillains,
            isLoading: false
        };
    }

    if (action.type === addVillainType) {
        var newvillains = allvillains;

        newvillains.push({ name: action.villain.name, message: action.villain.powers, email: action.villain.email })

        return {
            ...state,
            villains: newvillains,
            isLoading: false
        };
    }

    return state;
};