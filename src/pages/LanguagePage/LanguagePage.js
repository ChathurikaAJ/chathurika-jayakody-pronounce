import Recorder from '../../components/Recorder/Recorder'
import UserTextForm from '../../components/UserTextForm/UserTextForm'
import Result from '../../components/Result/Result'
import Submit from '../../components/Submit/Submit'
import { useParams } from 'react-router-dom'
import {  useState } from 'react'
import './LanguagePage.scss'



export default function LanguagePage(){
    const [result,setResult] = useState(null)
    const {languageId} = useParams()


    return(
        <div className='main'>
            <p>{languageId.toUpperCase()}</p>
            <UserTextForm />
            <Recorder setResult={setResult}/>
            {result && <Result result={result}/>}
            <Submit setResult={setResult}/>
          

        </div>

    )
}