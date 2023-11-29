import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Icons from "../Icons/Icons";
import Footer from "../Footer/Footer";
import Offers from "../Offers/Offers";

function Home() {
  const images = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png",
    "/images/banner4.png",
  ];

  return (
    <>
      <Navbar />
      <Banner images={images} />
      <Offers />
      <Icons />
      <Footer />
    </>
  );
}

export default Home;
