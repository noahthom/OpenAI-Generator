import axios from "axios";

const generateCompletion = (prompt, temp, engine = 'text-curie-001') => {
    const body = {
       prompt,
       temperature: temp,
       max_tokens: 64,
       frequency_penalty: 0,
       presence_penalty: 0
    }
    
    
    const config = {
        headers : {
            "Authorization": 'Bearer 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',
            "Content-Type": "application/json"
        }
    }

    const url = `https://api.openai.com/v1/engines/${engine}/completions`

    axios.post(url, body, config).then((response) => {
        console.log(response.data.choices[0].text)
    }).catch(error => console.log(error))
    


}

export default generateCompletion