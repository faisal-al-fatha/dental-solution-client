import Services from "../../Shared/Services/Services";
import Advertise from "./HomeComponents/Advertise";
import Banner from "./HomeComponents/Banner";
import Stats from "./HomeComponents/Stats";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <Advertise></Advertise>
            <Services></Services>
            
        </div>
    );
};

export default Home;