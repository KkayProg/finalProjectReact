
import RandomMovie from "../randomMovie"
import TopMovies from "../top10Movies"

const MainPage: React.FC = () => {
    return (
        <div>
            <RandomMovie buttons={true}/>
            <TopMovies />
        </div>
    )
}

export default MainPage;