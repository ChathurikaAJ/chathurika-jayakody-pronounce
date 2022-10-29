import Recorder from '../../components/Recorder/Recorder'
import UserTextForm from '../../components/UserTextForm/UserTextForm'


export default function LanguagePage(){
    return(
        <div className='language'>
            <p>Language Page</p>
            <UserTextForm />
            <Recorder />
        </div>

    )
}