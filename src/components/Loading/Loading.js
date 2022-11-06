import { ThreeCircles } from  'react-loader-spinner'
import './Loading.scss'

export default function Loading (){
    return(
        <div className='language-page__loading'>
            <div  className='loading__container'>
                <ThreeCircles
                    height="30"
                    width="100"
                    color="#F5622C"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />
            </div>
        </div>
    )
}