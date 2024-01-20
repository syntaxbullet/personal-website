import { motion, useScroll, useSpring } from "framer-motion";
import HighlightedParagraph from "./highlightparagraph";
export const Page = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div style={{ scaleX: scaleX }} className="progress-bar" />
      <main>
        <img
          src="https://avatars.githubusercontent.com/u/84109220?v=4"
          alt="profile picture"
          className="profile"
        />
        <h2>Syntaxbullet</h2>
        <p className="subtext">
          Software engineer and generative AI enthusiast
        </p>
        <div className="links">
          <a href="https://github.com/syntaxbullet">
            <button className="socials-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "currentcolor" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
              Code
            </button>
          </a>
          <a href="mailto:syntaxbullet@protonmail.com">
            <button className="socials-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "currentColor" }}
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
              </svg>
              Mail
            </button>
          </a>
          <a href="#">
            <button className="socials-button resume-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "currentcolor" }}
              >
                <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"></path>
              </svg>
              Work
            </button>
          </a>
        </div>
      </main>
      <article className="about">
        <h3 style={{ position: "sticky", top: 24, zIndex: 4 }}>About me</h3>
        <HighlightedParagraph>
          My name is Ivan. I am 24 years old and was born and raised in Munich,
          Germany. I have been writing code ever since I was 8 years old.
        </HighlightedParagraph>
        <HighlightedParagraph>
          When I was 8, my world changed with the gift of a computer. It was my
          escape, my playground, where I started to learn how to make my own
          games and programs. As a kid who had to face the challenges of
          cerebral palsy, this computer was my way of connecting with a world
          much more interesting than the one I in which I had to fight against
          the physical handicap I was born with.
        </HighlightedParagraph>
        <HighlightedParagraph>
          One year later. I was already getting the hang of coding. I had moved
          on to Visual C#, learning about how to make software by crafting
          simple applications. It wasn't just a hobby; it felt like I was
          learning a superpower.
        </HighlightedParagraph>
        <HighlightedParagraph>
          High school brought new friends and a deeper dive into technology. I
          was fascinated by the way websites were built, working with things
          like CSS sprites and table layouts that we'd piece together to create
          these digital experiences. Back then, we didn't have flexbox,
          grid-layout and box-shadow like we do now, instead we had to deal with
          floats and clearfixes which was painful, but figuring it out was part
          of the fun.
        </HighlightedParagraph>
        <HighlightedParagraph>
          By the time I turned 11, I was writing little bits of server-side code
          using Node.js. I taught myself more about how websites work behind the
          scenes, how to structure data within a database efficiently, how to
          make things look good with SCSS, and how to deploy simple full-stack
          applications on a linux-based server.
        </HighlightedParagraph>
        <HighlightedParagraph>
          When I was 16, my adventure took another turn when I discovered
          React.js and Webpack. I went from creating simple websites to building
          complex, interactive applications all by myself. At this point in time
          the Javascript ecosystem started developing extremely quickly and so I
          started picking up on new tools on a monthly basis...
        </HighlightedParagraph>
        <HighlightedParagraph>
          Life got really interesting at 17 with an internship at Siemens. I was
          part of a team that was figuring out how to make better intranet sites
          for the company. It was my first taste of the professional world, and
          it was extremely successful, they even offered me an IT-Management
          scholarship in Berlin. But due to my goals of becoming a software
          engineer and my health, I decided to decline and stay in Munich,
          closer to family and home.
        </HighlightedParagraph>
        <HighlightedParagraph>
          At 19, I was freelancing, making websites and apps for private
          individuals and small restaurants in my area. Then came a short
          internship at a Y-Combinator funded startup called Demodesk, where I
          learned even more about building software in a fast-paced environment.
        </HighlightedParagraph>
        <HighlightedParagraph>
          After only one month though in which I felt like I wasn't really
          resonating with the company and a desire for educating myself further,
          I left and enrolled in a full-time Bachelors program at the Munich
          University of Applied Science, and after 2022 transferred into the
          newly opened Munich Center for Digital Science and AI. Where I am
          still enrolled to this day.
        </HighlightedParagraph>
        <HighlightedParagraph>
          Today I can look back at this journey with pride. Every line of code
          I've written tells a story of overcoming challenges and learning new
          things. It's not just about being a software engineer. It's a journey
          about finding a way to express myself through technology and proving
          that with passion and perseverance, you can go anywhere, no matter
          what stands in your way.
        </HighlightedParagraph>
      </article>
      <section className="projects">
        <h3>My Projects</h3>
        <div className="project">
          <h6>Citrine CLI</h6>
          <p>
            Citrine is a command line interface that makes it simple and
            straightforward to manage your tasks.
          </p>

          <a href="https://github.com/syntaxbullet/citrinecli">
            <button className="socials-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "currentcolor" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
              View on GitHub
            </button>
          </a>
          <div className="badge">
            <span className="rust"></span>
            Rust
          </div>
        </div>
      </section>
      <footer>Made in 2024. - Syntaxbullet</footer>
    </>
  );
};
