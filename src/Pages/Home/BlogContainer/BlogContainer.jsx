import blogImg from "../../../image/blogImg/blogImg.png";
import "./BlogContainer.css";
const BlogContainer = () => {
  return (
    <div className="blog-img w-full bg-fixed text-white">
      <div className="w-[70%] mx-auto shadow-xl ps-28 pe-28 mt-11 mb-11 p-10 flex justify-center items-center gap-32">
        <div className="">
          <h2 className="card-title text-3xl mb-6">
            Royalty-free stock images, photos, vectors and videos
          </h2>
          <p>
            Discover the best royalty-free stock images, photos, vectors,
            sequences, videos and music files for your designs and projects,
            made by talented artists and collaborators from around the world,
            here at 123RF. Everything you need is just a search away.
          </p>
        </div>
        <div className="">
          <img src={blogImg} alt="Album" />
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
