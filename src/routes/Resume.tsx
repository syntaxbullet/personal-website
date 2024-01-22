import { motion, useScroll, useSpring } from "framer-motion";
import HighlightedParagraph from "../highlightparagraph";
export const Resume = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div style={{ scaleX: scaleX }} className="progress-bar" />
      <div
        className="links"
        style={{
          position: "fixed",
          top: "24px",
          right: "50%",
          transform: "translateX(50%)",
          zIndex: 4,
        }}
      >
        <a href="https://github.com/syntaxbullet">
          <button className="socials-button" style={{ zIndex: 4 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{fill: "currentcolor"}}
            >
              <path d="M19 7h-1V2H6v5H5a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h2v3h12v-3h2a2 2 0 0 0 2-2v-7a3 3 0 0 0-3-3zM8 4h8v3H8V4zm0 16v-4h8v4H8zm11-8h-4v-2h4v2z"></path>
            </svg>
            Print this Resume
          </button>
        </a>
      </div>
      <article className="about">
        <h3
          style={{
            position: "sticky",
            top: 24,
            zIndex: 4,
            width: "fit-content",
          }}
        >
          About me
        </h3>
        <p>
          My name is Ivan. I am 24 years old and was born and raised in Munich,
          Germany. I have been writing code ever since I was 8 years old.
        </p>
        <p>
          When I was 8, my world changed with the gift of a computer. It was my
          escape, my playground, where I started to learn how to make my own
          games and programs. As a kid who had to face the challenges of
          cerebral palsy, this computer was my way of connecting with a world
          much more interesting than the one I in which I had to fight against
          the physical handicap I was born with.
        </p>
        <p>
          One year later. I was already getting the hang of coding. I had moved
          on to Visual C#, learning about how to make software by crafting
          simple applications. It wasn't just a hobby; it felt like I was
          learning a superpower.
        </p>
        <p>
          High school brought new friends and a deeper dive into technology. I
          was fascinated by the way websites were built, working with things
          like CSS sprites and table layouts that we'd piece together to create
          these digital experiences. Back then, we didn't have flexbox,
          grid-layout and box-shadow like we do now, instead we had to deal with
          floats and clearfixes which was painful, but figuring it out was part
          of the fun.
        </p>
        <p>
          By the time I turned 11, I was writing little bits of server-side code
          using Node.js. I taught myself more about how websites work behind the
          scenes, how to structure data within a database efficiently, how to
          make things look good with SCSS, and how to deploy simple full-stack
          applications on a linux-based server.
        </p>
        <p>
          When I was 16, my adventure took another turn when I discovered
          React.js and Webpack. I went from creating simple websites to building
          complex, interactive applications all by myself. At this point in time
          the Javascript ecosystem started developing extremely quickly and so I
          started picking up on new tools on a monthly basis...
        </p>
        <p>
          Life got really interesting at 17 with an internship at Siemens. I was
          part of a team that was figuring out how to make better intranet sites
          for the company. It was my first taste of the professional world, and
          it was extremely successful, they even offered me an IT-Management
          scholarship in Berlin. But due to my goals of becoming a software
          engineer and my health, I decided to decline and stay in Munich,
          closer to family and home.
        </p>
        <p>
          At 19, I was freelancing, making websites and apps for private
          individuals and small restaurants in my area. Then came a short
          internship at a Y-Combinator funded startup called Demodesk, where I
          learned even more about building software in a fast-paced environment.
        </p>
        <p>
          After only one month though in which I felt like I wasn't really
          resonating with the company and a desire for educating myself further,
          I left and enrolled in a full-time Bachelors program at the Munich
          University of Applied Science, and after 2022 transferred into the
          newly opened Munich Center for Digital Science and AI. Where I am
          still enrolled to this day.
        </p>
        <p>
          Today I can look back at this journey with pride. Every line of code
          I've written tells a story of overcoming challenges and learning new
          things. It's not just about being a software engineer. It's a journey
          about finding a way to express myself through technology and proving
          that with passion and perseverance, you can go anywhere, no matter
          what stands in your way.
        </p>
      </article>
      <footer>Made in 2024. - Syntaxbullet</footer>
    </>
  );
};
