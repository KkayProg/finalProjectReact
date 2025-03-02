import InfoAboutMovie from "../aboutMovie";
import RandomMovie from "../randomMovie";

const AboutMovie: React.FC = () => {
    return (<div>
        <RandomMovie buttons={false}/>
        <InfoAboutMovie />
    </div>)
}

export default AboutMovie;
