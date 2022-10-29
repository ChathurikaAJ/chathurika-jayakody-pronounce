import './Submit.scss'
import axios from 'axios'

const baseURL = 'http://localhost:8080/languages/result'

export default function (){

    const handleSubmit = () => {
        axios.get(baseURL)
        .then((response)=>{
            console.log(response.data);
        })
    }




    return(
        <button onClick={handleSubmit}>SUBMIT</button>
    )
}