import './UserTextForm.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import speakerIcon from '../../assets/icons/speaker.png'

const baseURL = 'http://localhost:8080/languages/'

export default function UserTextForm({setTextSubmitted}){
    const [displaySpeaker,setDisplaySpeaker] = useState(false)
    const [disableSubmit,setDisableSubmit] = useState(false)
    const {languageId} = useParams()
    
    const handleSubmit = (event) => {
        event.preventDefault()

        const userText = event.target.text.value

        if(!userText){
            event.target.text.classList.add('language__form-text-empty')
        } else{   
            event.target.text.classList.remove('language__form-text-empty') 
            const textDetails = {
                language: languageId,
                text: userText
            }
            axios.post(`${baseURL}text`,textDetails)
                .then(()=>{
                    setDisableSubmit(true)
                    setDisplaySpeaker(true)
                    setTextSubmitted(true)
                    
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
    }


    const handleSpeakerClick = (event)=> {
        event.preventDefault()

        var audio = new Audio("http://localhost:8080/audio/text-to-speech.wav");
        if(audio){
            audio.play()
        }
    }



    return(
        <div className='language__container'>
            <form onSubmit={handleSubmit} className='language__form'>
                <textarea  name='text' className='language__form-text' placeholder='Enter your text here and click start'></textarea>
                <div  className='language__form-container'>
                    <button disabled={disableSubmit} className='language__form-start'>Start</button>
                    {displaySpeaker && <img className='language__speaker' onClick={handleSpeakerClick} src={speakerIcon}/>}
                </div>
                
            </form>
           
        </div>
    )
}

