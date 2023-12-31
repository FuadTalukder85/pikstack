import Banner from "../Banner/Banner";
import BlogContainer from "../BlogContainer/BlogContainer";
import Category from "../Category/Category";
import ImageGallery from "../ImageGallery/ImageGallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BlogContainer></BlogContainer>
      <ImageGallery></ImageGallery>
    </div>
  );
};

export default Home;
