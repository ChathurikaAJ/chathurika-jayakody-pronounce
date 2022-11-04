import './UserTextForm.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import speakerIcon from '../../assets/icons/speaker.png'
import Loading from '../Loading/Loading'


const baseURL = 'http://localhost:8080/languages/'

export default function UserTextForm({setTextSubmitted}){
    const [displaySpeaker,setDisplaySpeaker] = useState(false)
    // const [disableSubmit,setDisableSubmit] = useState(false)
    const [displayLoading,setDisplayLoading] = useState(false)
    const {languageId} = useParams()


    
    const handleSubmit = (event) => {
        event.preventDefault()
        setDisplaySpeaker(false)

        const userText = event.target.text.value.replace(/[\r\n\v]+/g, " ");

        if(!userText){
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
                    // setDisableSubmit(true)

                    
                    if(response.data==='User text has been successfully received'){
                        
                        setTimeout(()=>{
                            setDisplayLoading(false)
                            setDisplaySpeaker(true)
                            setTextSubmitted(true)
                        },5000)
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
        <div className='language__container'>
            <form onSubmit={handleSubmit} className='language__form'>
                <textarea  name='text' className='language__form-text' placeholder='Enter your text here and click start'></textarea>
                <div  className='language__form-container'>
                    <button className='language__form-start'>Start</button>
                    {displayLoading && <div className='language__loading'><Loading/> </div>}
                    {displaySpeaker && <img className='language__speaker' onClick={handleSpeakerClick} src={speakerIcon}/>}
                </div> 
            </form>
        </div>
    )
}

