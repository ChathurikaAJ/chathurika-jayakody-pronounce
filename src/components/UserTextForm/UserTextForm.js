import './UserTextForm.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import speakerIcon from '../../assets/icons/speaker.png'


const baseURL = 'http://localhost:8080/languages/'

export default function UserTextForm({setTextSubmitted}){
    const [displaySpeaker,setDisplaySpeaker] = useState(false)
    // const [disableSubmit,setDisableSubmit] = useState(false)
    const {languageId} = useParams()


    
    const handleSubmit = (event) => {
        event.preventDefault()

        const userText = event.target.text.value
        console.log(userText);

        if(!userText){
            event.target.text.classList.add('language__form-text-empty')
        } else{   
            event.target.text.classList.remove('language__form-text-empty') 
            const textDetails = {
                language: languageId,
                text: userText
            }
            axios.post(`${baseURL}text`,textDetails)
                .then((response)=>{
                    // setDisableSubmit(true)

                    setTextSubmitted(true)
                    if(response.data==='User text has been successfully received'){
                        setDisplaySpeaker(true)
                    }
                    
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
    }



    const handleSpeakerClick = (event)=> {
        event.preventDefault()
        axios({
            url: 'http://localhost:8080/languages/text-to-speech',
            method: "get",
            responseType: "blob",
        })
        .then((res) => {
            var audioLink = URL.createObjectURL(res.data);
            axios.get(audioLink)
            .then((response)=>{
                if(response.data !== ''){
                    var audio = new Audio(audioLink)
                    audio.play()
                }
            })
        })
        .catch((error) => {
            console.log("axios error:", error);
        });
    }



    return(
        <div className='language__container'>
            <form onSubmit={handleSubmit} className='language__form'>
                <textarea  name='text' className='language__form-text' placeholder='Enter your text here and click start'></textarea>
                <div  className='language__form-container'>
                    <button className='language__form-start'>Start</button>
                    {displaySpeaker && <img className='language__speaker' onClick={handleSpeakerClick} src={speakerIcon}/>}
                </div> 
            </form>
        </div>
    )
}

