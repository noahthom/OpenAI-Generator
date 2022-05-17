import axios from "axios";
import store from "..";
import { savePrompt, setCurrentPrompt } from "../redux/actions";

const generateCompletion = (prompt, temp, engine = 'text-curie-001') => {
    
    store.dispatch(setCurrentPrompt('Generating...'))
    const body = {
       prompt,
       temperature: temp,
       max_tokens: 200,
       frequency_penalty: 0,
       presence_penalty: 0
    }
    
    
    const config = {
        headers : {
            "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
            "Content-Type": "application/json"
        }
    }

    const url = `https://api.openai.com/v1/engines/${engine}/completions`

    axios.post(url, body, config).then((response) => {
        store.dispatch(savePrompt(prompt,response.data.choices[0].text))
        store.dispatch(setCurrentPrompt(response.data.choices[0].text))
        localStorage.setItem("saved", JSON.stringify(store.getState().saved))
        
    }).catch(error => {
        store.dispatch(setCurrentPrompt('Error, please try again later!')) 
    })


    


}

export default generateCompletion