import './Recorder.scss'
import {useState, useRef, useEffect} from 'react'
import axios from 'axios'
import Result from '../Result/Result'
import mic from '../../assets/icons/mic.png'
import stop from '../../assets/icons/stop.png'
import play from '../../assets/icons/play.png'

const baseURL = 'http://localhost:8080/languages/'

export default function Recorder({setAudioRecorded, setIsLoading,setNoAudio}){

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
                setRecordingClass(', language-page__recorder-in-progress')
            };

            mediaRecorder.ondataavailable = (event) => {
                console.log(('Data Available'));
                chunks.current.push(event.data)
            };

            mediaRecorder.onstop = async()=>{
                console.log('Recorder Stopped');
                setIsLoading(true)
                setNoAudio(false)
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
                }, 3000)
              
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

    const handlePlay = (event)=> {
        event.preventDefault()
        var audio = new Audio(recording.url);
        audio.play()
    }

    return (
        <div className='language-page__recorder'>
            { stream.access &&
        
                    <div className='language-page__recorder-container'>
                        <div className={`language-page__recorder-box${recordingClass}`}>
                            <img onClick={()=> stream.recorder.start()} src={mic} className='language-page__recorder-mic-icon' ></img>
                        </div>

                        <img onClick={()=> stream.recorder.stop()}  src={stop} className='language-page__recorder-stop-icon' ></img>
                        <img src={play} onClick={handlePlay} className='language-page__recorder-play-icon'/>
                        
                    </div>
            }
        </div>
    );
}