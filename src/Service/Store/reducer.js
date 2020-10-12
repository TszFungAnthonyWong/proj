const initialState = {
    apiData: null,
    schedule: null,
    member: null,
    cost: null,
    project: null
    // user: data,
    // searchList: null,
    // curDate: 0,
    // selectedItem: null,
    // showAddForm: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "STORE_API":
            return {
                ...state,
                apiData: action.data
            };

        case "STORE_SCHEDULE":
            return {
                ...state,
                schedule: action.data
            };
        case "STORE_MEMBER":
            return {
                ...state,
                member: action.data
            };
        case "STORE_COST":
            return {
                ...state,
                cost: action.data
            };

        case "STORE_PROJECT":
            return{
                ...state,
                project: action.data
            }



        // case "STORE_SEARCH_LIST":
        //     console.log(action.list)
        //     return {
        //         ...state,
        //         searchList: action.list
        //     };

        // case "BACK":
        //     return {
        //         ...state,
        //         curDate: state.curDate - 1
        //     }

        // case "NEXT":
        //     return {
        //         ...state,
        //         curDate: state.curDate + 1
        //     }

        // case "SELECTED":
        //     return {
        //         ...state,
        //         selectedItem: action.item,
        //         showAddForm: true
        //     }

        // case "CLOSE_ADD_FORM":
        //     return {
        //         ...state,
        //         showAddForm: false
        //     }

        // case "ADD_ITEM":
        //     let newData = {...state.user};
        //     newData.data_points[0].intake_list.push(action.data);
        //     console.log(newData);
        //     return {
        //         ...state,
        //         user: newData,
        //         curDate: 0
        //     }
        default:
            return state;
    }
}
export default reducer