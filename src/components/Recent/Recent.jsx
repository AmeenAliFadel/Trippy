import RecentCard from '../RecentCard/RecentCard'
import './Recent.css'
import photo1 from './../../assets/Images/section2-f1.jpg'
import photo2 from './../../assets/Images/section2-f2.jpg'
import photo3 from './../../assets/Images/section2-f5.jpg'

export default function Recent() {
    return (
        <section className='Popular'>
            <h2 className='Title'>Recent Trips</h2>
            <p className='Description'>You can discover unique destination using Google Maps</p>
            <div className='cards-area'>
                <RecentCard
                title={"Trip in Indonesia"} 
                des={"Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea "} 
                photo={photo1}
                />
                <RecentCard 
                title={"Trip in Malaysia"} 
                des={" Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"} 
                photo={photo2}
                />
                <RecentCard 
                title={"Trip in France"} 
                des={"France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans. "} 
                photo={photo3}
                />
            </div>
        </section>
    )
}
