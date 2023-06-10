import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Popular from "../Popular/Popular";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Popular></Popular>
        </div>
    );
};

export default Home;