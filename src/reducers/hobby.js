const initialState = {
    list : [],
    activeId : null

}
console.log(initialState.activeId)
const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY' : {
            const newList = [...state.list]
            newList.push(action.payload)
            return {
                ...state,
                list : newList
            };
        }
        case 'SET_ACTIVE_HOBBY' : {
            const newActiveid = action.payload.id;
           return {
               ...state,
               activeId : newActiveid
           };
        }
        default : 
        return state;
}
}
export default hobbyReducer;