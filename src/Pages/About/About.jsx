import Hero from "../../components/Hero/Hero";
import background1 from "../../assets/Images/aboutBack.jpg";
import './About.css'
import AboutContainer from "../../components/AboutContainer/AboutContainer";
export default function About() {
    return (
        <>
            <Hero background ={background1} title={'About'} True={false} />
            <AboutContainer/>
        </>
    )
}