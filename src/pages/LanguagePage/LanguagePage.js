import Recorder from '../../components/Recorder/Recorder'
import UserTextForm from '../../components/UserTextForm/UserTextForm'
import Submit from '../../components/Submit/Submit'
import english from '../../assets/images/english.jpeg'
import french from '../../assets/images/french.jpeg'
import { useParams } from 'react-router-dom'
import {  useEffect, useState } from 'react'
import './LanguagePage.scss'
import Loading from '../../components/Loading/Loading'


export default function LanguagePage(){
    const {languageId} = useParams()
    const [heroImage, setHeroImage] = useState('')
    const [textSubmitted, setTextSubmitted] = useState(false)
    const [audioRecorded, setAudioRecorded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(()=>{
        if(languageId==='english'){
            setHeroImage(english)
        }
        if(languageId==='french'){
            setHeroImage(french)
        }
    },[languageId])


    return(
        <div className='language-page'>
            <div className='language-page__hero'>
                <img className='language-page__hero-image' src={heroImage}/>
            </div>
            
            <div className='language-page__main'>
                <h1>{languageId.charAt(0).toUpperCase()+languageId.slice(1)}</h1>
                <UserTextForm setTextSubmitted={setTextSubmitted}/>
                {textSubmitted && <Recorder setAudioRecorded={setAudioRecorded} setIsLoading={setIsLoading}/>}
                {isLoading && <Loading />}
                {audioRecorded &&<Submit setAudioRecorded={setAudioRecorded}/>}
            </div>
            
            
        </div>

    )
}