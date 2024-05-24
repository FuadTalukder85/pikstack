import Banner from "../Banner/Banner";
import BlogContainer from "../BlogContainer/BlogContainer";
import Category from "../Category/Category";
import CreativeImg from "../CreativeImg/CreativeImg";
import Popular from "../Popular/Popular";
import SignUpBanner from "../SignUpBanner/SignUpBanner";
// import ImageGallery from "../ImageGallery/ImageGallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Popular></Popular>
      <CreativeImg></CreativeImg>
      <BlogContainer></BlogContainer>
      {/* <ImageGallery></ImageGallery> */}
      <SignUpBanner></SignUpBanner>
    </div>
  );
};

export default Home;
