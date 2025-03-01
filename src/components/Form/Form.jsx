import './Form.css'
export default function Form({FormTitle ,x}){
    return(
        <>
        <div className='form-container'>
        <h1>{FormTitle}</h1>
        <form>
            {x &&<input type="text" placeholder="Name" />}
            {x && <input type="email" placeholder="Email" />}
            {x && <input type="text" placeholder="Subject" />}
            {x && <textarea  placeholder="Message" rows="4" ></textarea>}
            {x && <button>Send Message</button>}

            {!x &&<input type="text" placeholder="Your Name" />}
            {!x && <input type="email" placeholder=" Your Email" />}
            {!x && <input type="password" placeholder=" Password" />}
            {!x && <input type="password" placeholder=" Repeat Your Password" />}
            {!x && <button>Register</button>}
        </form>
        </div>
        </>
    )
}
