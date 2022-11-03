import WordCard from "../WordCard/WordCard";
import PercentageCircle from '../PercentageCircle/PercentageCircle'
import "./Result.scss";
import { v4 as uuid } from "uuid";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function Result({ result,closeModal,setAudioRecorded }) {
  const {languageId} = useParams()
 
  const words = result.NBest[0].Words;

  const navigate = useNavigate();
  
  const handleTryAgain = ()=>{
    setAudioRecorded(false)
    closeModal()
  }

  const handleNewText = ()=>{
    window.location.reload();
    closeModal()
  }

  return (
    <div className="result">
      <h2  className="result__title">Pronounciation Assessment</h2>
      <div className="result__container">
        <p className="result__name">Accuracy</p>
        <div className="result__score">
          {<PercentageCircle amount={result.NBest[0].PronunciationAssessment.AccuracyScore}/>}
        </div>
      </div>
      <div className="result__container">
        <p className="result__name">Fluency</p>
        <div className="result__score">
          {<PercentageCircle amount={result.NBest[0].PronunciationAssessment.FluencyScore}/>}
        </div>
      </div>
      <div className="result__container">
        <p className="result__name">Completeness</p>
        <div className="result__score">
          {<PercentageCircle amount={result.NBest[0].PronunciationAssessment.CompletenessScore}/>}
        </div>
      </div>
      <div className="result__container">
        <p className="result__name">Pronounciation</p>
        <div className="result__score">
          {<PercentageCircle amount={result.NBest[0].PronunciationAssessment.PronScore}/>}
        </div>
      </div>
      {words.map((word) => (
        <WordCard
          key={uuid()}
          word={word.Word}
          pronScore={word.PronunciationAssessment}
          syllables={word.Syllables}
          phonemes={word.Phonemes}
        />
      ))}
      <div className="result__buttons">
        <button onClick={handleTryAgain}className="result__buttons-item">Try Again</button>
        <button onClick={handleNewText} className="result__buttons-item">New Text</button>
        
      </div>
      
    </div>
  );
}
