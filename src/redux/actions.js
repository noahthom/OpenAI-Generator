export const savePrompt = (prompt, output) => {
    return {
        type: "SAVE_PROMPT",
        prompt,
        output
    }
}

export const setCurrentPrompt = (output) => {
    return {
        type: "SET_CURRENT_PROMPT",
        output
    }
}

export const readLocalStore = (saved) => {
    return {
        type: "READ_LOCAL_STORE",
        saved
    }
}