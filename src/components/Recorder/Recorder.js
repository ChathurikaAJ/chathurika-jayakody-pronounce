import './Recorder.scss'
import {useState, useRef} from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:8080/languages/'

export default function Recorder(){
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

            mediaRecorder.onstart = ()=> {
                console.log('recording');
                setRecording ({
                    active: true,
                    available:false,
                    url:''
                });
            };

            mediaRecorder.ondataavailable = (event) => {
                console.log(('Data Available'));
                chunks.current.push(event.data)
            };

            mediaRecorder.onstop = async()=>{
                console.log('Recorder Stopped');

                const url = URL.createObjectURL(chunks.current[0]);
                postToServer(chunks.current[0])
                chunks.current = [];

                setRecording({
                    active:false,
                    available:true,
                    url
                });
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
    }



    return (
        <div>
            {
                stream.access ? (
                    <div>
                        <button onClick={()=> !recording.active && stream.recorder.start()}> Start Recording</button>
                        <button onClick={()=> stream.recorder.stop()}>Stop Recording</button>
                        {recording.available && <audio controls src={recording.url}/>}
                    </div>
                ) : (
                    <button onClick={getAccess}>Click to Record</button>
                )
            }
        </div>
    );
}