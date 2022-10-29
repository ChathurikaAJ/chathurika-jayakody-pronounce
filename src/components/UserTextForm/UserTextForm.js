import './UserTextForm.scss'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import speakerIcon from '../../assets/icons/speaker.png'

const baseURL = 'http://localhost:8080/languages/'

export default function UserTextForm(){
    const [displaySpeaker,setDisplaySpeaker] = useState(false)
    const [disableSubmit,setDisableSubmit] = useState(false)
    const {languageId} = useParams()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const textDetails = {
            language: languageId,
            text: event.target.text.value
        }
        axios.post(`${baseURL}text`,textDetails)
            .then(()=>{
                setDisableSubmit(true)
                setDisplaySpeaker(true)
            })
            .catch((error)=>{
                console.log(error);
            })

        //axios post
        //check error
        //if no error
        //disable text submit button
        //get audio file from server
        //show speaker
        
    }

    const hadleSpeakerClick = (event)=> {
        event.preventDefault()
        var audio = new Audio("http://127.0.0.1:1337/");
        audio.play()
    }


    return(
        <div className='language__container'>
            <form onSubmit={handleSubmit} className='language__form'>
                <textarea  name='text' className='language__form-text'></textarea>
                <button disabled={disableSubmit} className='language__form-start'>Start!</button>
            </form>
            {displaySpeaker && <img className='language__speaker' onClick={hadleSpeakerClick} src={speakerIcon}/>}
        </div>
    )
}

