
import Hero from './../../components/Hero/Hero'
import Popular from './../../components/Popular/Popular'
import Recent from './../../components/Recent/Recent'
import background2 from "../../assets/Images/Heroimg.jpg";
export default function Home(){
    return(
        <>
            <Hero background ={background2} title={'Your Journey Your Story'} True={true} />
            <Popular />
            <Recent />
        </>
    )
}