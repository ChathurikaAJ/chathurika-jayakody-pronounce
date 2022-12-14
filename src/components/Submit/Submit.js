import "./Submit.scss";
import axios from "axios";
import Modal from 'react-modal'
import Result from '../Result/Result'
import {  useState } from 'react'

const baseURL = "http://localhost:8080/languages/result";

export default function Submit ({setAudioRecorded, setNoAudio}) {
    const [result,setResult] = useState(null)
    const [modalIsOpen, setIsOpen] = useState(false);


    function openModal() {
        setIsOpen(true);
      }

    function closeModal() {
        setIsOpen(false);
    }

    Modal.setAppElement(".App");

    const handleSubmit = () => {
        axios.get(baseURL)
        .then((response) => {
            if(response.data==='Speech could not be recognized'){
                console.log('error');
                setAudioRecorded(false)
                setNoAudio(true)
            } else {
                setResult(response.data);
                openModal()
                setNoAudio(false)
            }
        
        });
    };

  return (
    <div>
        <div className="language-page__submit">
                <button className="language-page__submit-button" onClick={handleSubmit}>
                    Results
                </button>            
        </div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="modal-overlay"
            shouldCloseOnOverlayClick={false}
        >
            <Result closeModal={closeModal} result={result} setAudioRecorded={setAudioRecorded}/>
        </Modal>
    </div>
  );
}
