import './Recorder.scss'
import {useState, useRef, useEffect} from 'react'
import axios from 'axios'
import Result from '../Result/Result'
import mic from '../../assets/icons/mic.png'
import stop from '../../assets/icons/stop.png'
import play from '../../assets/icons/play.png'

const baseURL = 'http://localhost:8080/languages/'

export default function Recorder({setAudioRecorded, setIsLoading}){

    const [recordingClass,setRecordingClass] = useState('')

    // RECORDER
    const [stream, setStream] = useState({
        access:false,
        recorder:null,
        error:''
    })

    const [recording, setRecording] = useState({
        active:false,
        available:false,
        url:''
    })

    const chunks = useRef([])

    const getAccess = ()=> {
        navigator.mediaDevices
        .getUserMedia({audio:true})
        .then((mic) => {
            let mediaRecorder;

            try {
                mediaRecorder = new MediaRecorder(mic, {
                    mimeType: 'audio/webm'
                });
            } catch (error) {
                console.log(error);
            }

            const track = mediaRecorder.stream.getTracks()[0];
            track.onended = () => console.log('ended');

            mediaRecorder.onstart = (event)=> {
                console.log('recording');
                setRecording ({
                    active: true,
                    available:false,
                    url:''
                });
                setRecordingClass(', recorder__in-progress')
            };

            mediaRecorder.ondataavailable = (event) => {
                console.log(('Data Available'));
                chunks.current.push(event.data)
            };

            mediaRecorder.onstop = async()=>{
                console.log('Recorder Stopped');
                setIsLoading(true)

                const url = URL.createObjectURL(chunks.current[0]);
                postToServer(chunks.current[0])
                chunks.current = [];

                setRecording({
                    active:false,
                    available:true,
                    url
                });

                setRecordingClass('')
            };

            setStream({
                ...stream,
                access:true,
                recorder:mediaRecorder
            });

            
        })
        .catch((error) => {
            console.log(error);
            setStream({...stream,error})
        });
    }

    //Function to POST audio to server
    const postToServer = (audio) => {
        
        const formData = new FormData();
        formData.append('user-audio',audio,'user-audio.webm');
        axios.post(`${baseURL}audio`,formData,{
            'Content-type':'multipart/form-data'
        })
        .then((response) =>{
            if(response.status === 200){
                setTimeout(()=>{
                    setAudioRecorded(true)
                    setIsLoading(false)
                }, 5000)
              
            }
        })
    }

    useEffect (()=>{
        getAccess()
        setStream({
            ...stream,
            access:true,
        })
    },[])

    const hadlePlay = (event)=> {
        event.preventDefault()
        var audio = new Audio(recording.url);
        audio.play()
    }

    return (
        <div className='recorder'>
            { stream.access &&
        
                    <div className='recorder__container'>
                        <div className={`recorder__box${recordingClass}`}>
                            <img onClick={()=> stream.recorder.start()} src={mic} className='recorder__mic-icon' ></img>
                            
                        </div>

                        
                        <img onClick={()=> stream.recorder.stop()}  src={stop} className='recorder__stop-icon' ></img>
                        {/* {recording.available && <img src={play} onClick={hadlePlay} className='recorder__play-icon'/>} */}
                        <img src={play} onClick={hadlePlay} className='recorder__play-icon'/>
                    </div>
            }
        </div>
    );
}