import './PopularCard.css'

export default function PopularCard({ dir,title,des,photo1,photo2 }) {
    return (
        <div className={dir ? 'singleCard' : 'singleCardReverse'}>
            <div className='Side-1'>
                <h2>{title}</h2>
                <p>{des}</p>
            </div>
            <div className='Side-2'>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
            </div>
        </div>
    )
}