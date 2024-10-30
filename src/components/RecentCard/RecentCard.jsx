import './RecentCard.css'
export default function RecentCard({title,des,photo}) {
    return (
        <div className='RecentCard'>
            <div className='imgBorder'>
                <img src={photo} alt="photo" />
            </div>
            <h3>{title}</h3>
            <p>{des}</p>
        </div>
    )
}