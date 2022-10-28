import './UserTextForm.scss'

export default function UserTextForm(){
    
    const handleSubmit = (event) => {
        event.preventDefault()
        // const textDetails

    }


    return(
        <form onSubmit={handleSubmit} className='language__form'>
            <textarea  name='text' className='language__form-text'></textarea>
            <button  className='language__form-start'>Start!</button>
        </form>
    )
}

