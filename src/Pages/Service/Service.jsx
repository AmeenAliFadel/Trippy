import background3 from "../../assets/Images/serviceHero.jpg";
import Hero from "../../components/Hero/Hero";
import Recent from "../../components/Recent/Recent";
export default function Service() {
    return (
        <>
            <Hero background ={background3} title={'Services'} True={false} />
            <Recent/>
        </>
    )
}