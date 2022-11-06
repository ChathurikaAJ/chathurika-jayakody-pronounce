import WordCard from "../WordCard/WordCard";
import PercentageCircle from '../PercentageCircle/PercentageCircle'
import "./Result.scss";
import { v4 as uuid } from "uuid";


export default function Result({ result,closeModal,setAudioRecorded }) {
 
  const words = result.NBest[0].Words;

  const handleTryAgain = ()=>{
    setAudioRecorded(false)
    closeModal()
  }

  const handleNewText = ()=>{
    window.location.reload();
    closeModal()
  }

  return (
    <div className="language-page__result">
      <h2  className="language-page__result-title">Pronounciation Assessment</h2>
      <div className="language-page__result-container">
        <p className="language-page__result-name">Accuracy</p>
        <div className="language-page__result-score">
          {<PercentageCircle amount={result.NBest[0].PronunciationAssessment.AccuracyScore}/>}
        </div>
      </div>
      <div className="language-page__result-container">
        <p className="language-page__result-name">Fluency</p>
        <div className="language-page__result-score">
          {<PercentageCircle amount={result.NBest[0].PronunciationAssessment.FluencyScore}/>}
        </div>
      </div>
      <div className="language-page__result-container">
        <p className="language-page__result-name">Completeness</p>
        <div className="language-page__result-score">
          {<PercentageCircle amount={result.NBest[0].PronunciationAssessment.CompletenessScore}/>}
        </div>
      </div>
      <div className="language-page__result-container">
        <p className="language-page__result-name">Pronounciation</p>
        <div className="language-page__result-score">
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
      <div className="language-page__result-buttons">
        <button onClick={handleTryAgain}className="language-page__result-buttons-item">Try Again</button>
        <button onClick={handleNewText} className="language-page__result-buttons-item">New Text</button>
        
      </div>
      
    </div>
  );
}
