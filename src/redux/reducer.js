const promptsDefault = {
    current: '',
    saved: []
}

const promptsReducer = (state = promptsDefault, action) => {
    switch(action.type){
        case 'SET_CURRENT_PROMPT':
            return {
                ...state,
                current: action.output
            }
        case 'SAVE_PROMPT':
            let temp = [[action.prompt, action.output], ...state.saved]
            return {
                ...state,
                saved: temp
            }
        case 'READ_LOCAL_STORE':
            return {
                ...state,
                saved: action.saved
            }
        default:
            return state
    }
}

export default promptsReducer