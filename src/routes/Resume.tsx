import { motion, useScroll, useSpring } from "framer-motion";
// import HighlightedParagraph from "../highlightparagraph";
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
      <main>
        <img
          src="https://avatars.githubusercontent.com/u/84109220?v=4"
          alt="profile picture"
          className="profile"
        />
        <h2>Ivan Jovanovic</h2>
        <p className="subtext">
          Software engineer and generative AI enthusiast
        </p>
        <div className="links">
          <a href="#">
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
              Print this Resume
            </button>
          </a>
        </div>
      </main>
      <article className="about resume">
        <section className="resume__education">
        <h3 style={{ position: "sticky", top: 24, zIndex: 4 }}>Education</h3>
        <p>
          My name is Ivan. I am 24 years old and was born and raised in Munich,
          Germany. I have been writing code ever since I was 8 years old.
        </p>
        <div className="resume__grid__items">
          <div className="resume__item">
            <small>2025</small>
            <h5>Some school</h5>
            <small className="location">Munich, Germany</small>
          </div>
          <div className="resume__item">
            <small>2025</small>
            <h5>Some school</h5>
            <small className="location">Munich, Germany</small>
          </div>
          <div className="resume__item">
            <small>2025</small>
            <h5>Some school</h5>
            <small className="location">Munich, Germany</small>
          </div>
          <div className="resume__item">
            <small>2025</small>
            <h5>Some school</h5>
            <small className="location">Munich, Germany</small>
          </div>
          <div className="resume__item">
            <small>2025</small>
            <h5>Some school</h5>
            <small className="location">Munich, Germany</small>
          </div>
          <div className="resume__item">
            <small>2025</small>
            <h5>Some school</h5>
            <small className="location">Munich, Germany</small>
          </div>
        </div>
        </section>
      </article>
      <footer>Made in 2024. - Syntaxbullet</footer>
    </>
  );
};
