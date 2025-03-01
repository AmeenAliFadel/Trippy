import './Hero.css'
export default function Hero({title ,True,background}){
    return(
        <section className={True ? 'Hero ' : 'Hero2 '}> 
        <img className='background' src={background} alt="" />
        <div className='Title'>
            <h2>{title}</h2>
            {True &&<p>Choose Your Favourite Destination</p> }
            {True && <button>Travel Now</button>}
        </div>
        </section> 
    )
}