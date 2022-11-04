import Recorder from '../../components/Recorder/Recorder'
import UserTextForm from '../../components/UserTextForm/UserTextForm'
import Submit from '../../components/Submit/Submit'
import { useParams } from 'react-router-dom'
import {  useEffect, useState } from 'react'
import './LanguagePage.scss'
import Loading from '../../components/Loading/Loading'
import Footer from '../../components/Footer/Footer'


export default function LanguagePage(){
    const {languageId} = useParams()
    const [heroImage, setHeroImage] = useState('')
    const [textSubmitted, setTextSubmitted] = useState(false)
    const [audioRecorded, setAudioRecorded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [noAudio, setNoAudio] = useState (false)
    



    return(
        <div className='language-page'>
            
            
            <div className='language-page__main'>
                <h1>{languageId.charAt(0).toUpperCase()+languageId.slice(1)}</h1>
                <UserTextForm setTextSubmitted={setTextSubmitted}/>
                {textSubmitted && <Recorder setAudioRecorded={setAudioRecorded} setIsLoading={setIsLoading} setNoAudio={setNoAudio}/>}
                {isLoading && <Loading />}
                {audioRecorded &&<Submit  setAudioRecorded={setAudioRecorded} setNoAudio={setNoAudio}/>}
                {noAudio && <p className='language-page__no-audio'>Audio not recognized. Please record again.</p>}
            </div>

            <Footer />
            
            
        </div>

    )
}