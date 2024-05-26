import blogImg from "../../../image/blogImg/blogImg.png";
import "./BlogContainer.css";
const BlogContainer = () => {
  return (
    <div className="blog-img w-full text-white p-4 pb-36 md:p-0">
      <div className="md:w-[70%] md:h-72 mx-auto mt-4 md:mt-28 mb-11 md:flex justify-center items-center gap-11">
        <div className="md:mt-52">
          <h2 className="card-title text-3xl mb-6">
            Pikstack-free stock images, photos, vectors and videos
          </h2>
          <p>
            Discover the best royalty-free stock images, photos, vectors,
            sequences, videos and music files for your designs and projects,
            made by talented artists and collaborators from around the world,
            here at Pikstack. Everything you need is just a search away.
          </p>
        </div>
        <div className="md:mt-52">
          <img src={blogImg} alt="Album" />
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
