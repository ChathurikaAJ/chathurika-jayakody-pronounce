import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './PercentageCircle.scss'

export default function PercentageCircle({amount}){
    const percentage = amount;

    return(
      <div className='percentage-circle'>
        <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={13} 
        styles={buildStyles({
          textColor: "black",
          pathColor: "#2EAEB7",
          trailColor: "#F5622C",
          strokeLinecap: "butt",
          textSize: "22px"
        })}/>
      </div>
    )
}