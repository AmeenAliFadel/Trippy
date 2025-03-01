import Hero from "../../components/Hero/Hero";
import background4 from "../../assets/Images/section2-f4.jpg";
import Form from "../../components/Form/Form";
export default function Contact() {
    return (
        <>
            <Hero background={background4} title={'Contact'} True={false} />
            <Form FormTitle={'Send a message to us!'}  x={true} />
        </>
    )
}