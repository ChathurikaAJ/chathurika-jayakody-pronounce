import Recorder from '../../components/Recorder/Recorder'
import UserTextForm from '../../components/UserTextForm/UserTextForm'
import Result from '../../components/Result/Result'
import Submit from '../../components/Submit/Submit'
import { useParams } from 'react-router-dom'
import {  useEffect, useState } from 'react'
import './LanguagePage.scss'
import english from '../../assets/images/english.jpeg'
import french from '../../assets/images/french.jpeg'



export default function LanguagePage(){
    const [result,setResult] = useState(null)
    const {languageId} = useParams()
    const [heroImage, setHeroImage] = useState('')
    
    useEffect(()=>{
        if(languageId==='english'){
            setHeroImage(english)
        }
        if(languageId==='french'){
            setHeroImage(french)
        }
    })


    return(
        <div className='language-page'>
            <div className='language-page__hero'>
                <img className='language-page__hero-image' src={heroImage}/>
            </div>
            
            <div className='language-page__main'>
                <h1>{languageId.charAt(0).toUpperCase()+languageId.slice(1)}</h1>
                <UserTextForm />
                <Recorder setResult={setResult}/>
                {result && <Result result={result}/>}
                <Submit setResult={setResult}/>
            </div>
            
        </div>

    )
}