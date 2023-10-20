import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Icons from "../Icons/Icons";
import QuienesSomos from "../QuienesSomos/QuienesSomos";
import Footer from "../Footer/Footer";

function Home() {
  const images = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png",
    "/images/banner4.png",
    "/images/banner5.png",
    "/images/banner6.png",
    "/images/banner7.png",
    "/images/banner8.png",
  ];

  return (
    <>
      <Navbar />
      <Banner images={images} />
      <Icons />
      <QuienesSomos />
      <Footer />
    </>
  );
}

export default Home;
