import ContainerCards from "../../components/ContainerCards";
import Footer from "../../components/Footer";
import GameCard from "../../components/GameCards";
import Header from "../../components/Header";
import Title from "../../components/Title";

const HomeScreen = () => {
  return (
    <>
      <Header/>
      <Title/>
      <ContainerCards />
      <Footer/>
    </>
  );
};

export default HomeScreen;
