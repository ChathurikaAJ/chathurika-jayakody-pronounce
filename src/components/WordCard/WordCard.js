import PhonemesCard from "../PhonemesCard/PhonemesCard";
import "./WordCard.scss";
import { v4 as uuid } from "uuid";
import SyllableCard from "../SyllableCard/SyllableCard";

export default function WordCard({ word, pronScore, phonemes,syllabe }) {
  return (
    <div className="word-card">
        <div className="word-card__score">
            <p className="word-card__score-text">{word}</p>
            <p className="word-card__score-text">{pronScore.AccuracyScore}</p>
        </div>
      
      <div className="word-card__syllabes">
        {syllabe && syllabe .map((syllabe) => (
          <SyllableCard
            key={uuid()}
            syllabe={syllabe.Syllable}
            score={syllabe.PronunciationAssessment.AccuracyScore}
          />
        ))}
      </div>

      <div className="word-card__phonemes">
        {phonemes && phonemes.map((phoneme) => (
          <PhonemesCard
            key={uuid()}
            phoneme={phoneme.Phoneme}
            score={phoneme.PronunciationAssessment.AccuracyScore}
          />
        ))}
      </div>

    </div>
  );
}
