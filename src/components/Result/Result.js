import WordCard from "../WordCard/WordCard";
import "./Result.scss";
import { v4 as uuid } from "uuid";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function Result({ result,closeModal }) {
  const {languageId} = useParams()
 
  const words = result.NBest[0].Words;

  const navigate = useNavigate();
  
  const handleTryAgain = ()=>{
    closeModal()
  }

  const handleNewText = ()=>{
    window.location.reload();
    closeModal()
  }

  return (
    <div className="result">
      <div className="result__container">
        <p className="result__name">Accuracy</p>
        <p className="result__score">
          {result.NBest[0].PronunciationAssessment.AccuracyScore}
        </p>
      </div>
      <div className="result__container">
        <p className="result__name">Fluency</p>
        <p className="result__score">
          {result.NBest[0].PronunciationAssessment.FluencyScore}
        </p>
      </div>
      <div className="result__container">
        <p className="result__name">Completeness</p>
        <p className="result__score">
          {result.NBest[0].PronunciationAssessment.CompletenessScore}
        </p>
      </div>
      <div className="result__container">
        <p className="result__name">Pronounciation</p>
        <p className="result__score">
          {result.NBest[0].PronunciationAssessment.PronScore}
        </p>
      </div>
      {words.map((word) => (
        <WordCard
          key={uuid()}
          word={word.Word}
          pronScore={word.PronunciationAssessment}
          syllabe={word.Syllables}
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
