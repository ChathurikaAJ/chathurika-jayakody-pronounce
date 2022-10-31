import './Submit.scss'
import axios from 'axios'

const baseURL = 'http://localhost:8080/languages/result'

export default function ({setResult}){

    const handleSubmit = () => {
        axios.get(baseURL)
        .then((response)=>{
            console.log(response.data);
            setResult(response.data)
        })
    }




    return(
        <div className='submit'>
            <button  className='submit__button' onClick={handleSubmit}>Submit</button>
        </div>
        
    )
}