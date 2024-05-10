import Banner from "../Banner/Banner";
import BlogContainer from "../BlogContainer/BlogContainer";
import Category from "../Category/Category";
import Popular from "../Popular/Popular";
// import ImageGallery from "../ImageGallery/ImageGallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BlogContainer></BlogContainer>
      <Popular></Popular>
      {/* <ImageGallery></ImageGallery> */}
    </div>
  );
};

export default Home;
