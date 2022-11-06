import axios from "axios";
import speakerIcon from '../../assets/icons/speaker.png'
import Loading from '../Loading/Loading'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './UserTextForm.scss'


const baseURL = 'http://localhost:8080/languages/'

export default function UserTextForm({setTextSubmitted}){
    const [displaySpeaker,setDisplaySpeaker] = useState(false)
    const [displayLoading,setDisplayLoading] = useState(false)
    const {languageId} = useParams()


    
    const handleSubmit = (event) => {
        event.preventDefault()
        setDisplaySpeaker(false)

        // Remove any line breaks
        const userText = event.target.text.value.replace(/[\r\n\v]+/g, " ");

        if(!userText){
            // Alert if text field is empty
            event.target.text.classList.add('language__form-text-empty')
        } else{   
            event.target.text.classList.remove('language__form-text-empty') 
            setDisplayLoading(true)
            const textDetails = {
                language: languageId,
                text: userText
            }
            axios.post(`${baseURL}text`,textDetails)
                .then((response)=>{
                    
                    if(response.data==='User text has been successfully received'){
                        
                        setTimeout(()=>{
                            setDisplayLoading(false)
                            setDisplaySpeaker(true)
                            setTextSubmitted(true)
                        },3000)
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
            .catch ((error)=> {console.log(error)})
        })
        .catch((error) => {
            console.log(error);
        });
    }



    return(
        <div className='language-page__container'>
            <form onSubmit={handleSubmit} className='language-page__form'>
                <textarea  name='text' className='language-page__form-text' placeholder='Enter your text here and click start'></textarea>
                <div  className='language-page__form-container'>
                    <button className='language-page__form-start'>Start</button>
                    {displayLoading && <div className='language-page__loading'><Loading/> </div>}
                    {displaySpeaker && <img className='language-page__speaker' onClick={handleSpeakerClick} src={speakerIcon}/>}
                </div> 
            </form>
        </div>
    )
}

