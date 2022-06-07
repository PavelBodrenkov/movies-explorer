import AboutProject from "../../components/Main/AboutProject/AboutProject";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainTitle from "../../components/Main/MainTitle/MainTitle";
import Portfolio from "../../components/Main/Portfolio/Portfolio";
import Student from "../../components/Main/Student/Student";
import Tech from "../../components/Main/Tech/Tech";


const Main = () => {
    return (
        <>
            <Header />
            <MainTitle />
            <AboutProject/>
            <Tech/>
            <Student/>
            <Portfolio />
            <Footer />
        </>
    );
};

export default Main;