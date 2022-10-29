import {  useState } from 'react'
import Recorder from '../../components/Recorder/Recorder'
import UserTextForm from '../../components/UserTextForm/UserTextForm'
import Result from '../../components/Result/Result'



export default function LanguagePage(){
    const [result,setResult] = useState(null)


    return(
        <div className='language'>
            <p>Language Page</p>
            <UserTextForm />
            <Recorder setResult={setResult}/>
            {result && <Result result={result}/>}
          

        </div>

    )
}