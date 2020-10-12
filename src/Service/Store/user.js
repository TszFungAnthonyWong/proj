const initialState = {
    apiData: null,

}

const user = (state = initialState, action) => {
    switch (action.type) {

        case "STORE_API":
            return {
                ...state,
                apiData: action.data
            };

        default:
            return state;
    }
}
export default user