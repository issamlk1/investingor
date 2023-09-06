import LatestCourses from "./home/latestCourses";
import Contact from "./home/contact";
import Slider from "./home/slider";
import Steps from "./home/steps";
import About from "./home/about";
import Partners from "./home/partners";
import Blogs from "./home/blogs";
import Cookies from "./home/cookies";
export default function Home() {
  return (
    <main>
      {/* cookies */}
      <Cookies />
      {/* slider */}
      <Slider />
       {/* latest courses */}
       <LatestCourses />
      {/* about */}
      <About />
      {/* contact */}
      <Contact />
      {/* video */}
      <Blogs />
      {/* partners */}
      <Partners />
      <hr />

    </main>
  );
}
