import './Result.scss'

export default function Result({result}){
    const score = result.Id ?? 'hello'
    console.log(result.Id);
    return(
        <div>
            <p>AccuracyScore:</p>
            <p>{result.NBest[0].PronunciationAssessment.AccuracyScore}</p>
            <p>Completeness: </p>
            <p>{result.NBest[0].PronunciationAssessment.CompletenessScore}</p>
            <p>Fluency: </p>
            <p>{result.NBest[0].PronunciationAssessment.FluencyScore}</p>
            <p>Pronounciation:</p>
            <p>{result.NBest[0].PronunciationAssessment.PronScore}</p>
        </div>
        
    )
}