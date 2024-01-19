export const Page = () => {
  return (
    <>
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
        <h3>About me</h3>
        <p>
          My name is Ivan. I am 24 years old and was born and raised in Munich,
          Germany. I have been writing code ever since I was 8 years old.
        </p>
        <p>
          Computers have always been a major part of my life. I was born with
          cerebral palsy which primarily made it difficult for me to walk.
          Because other children around me spent a bunch of time running around
          outside and engaging in sports, my parents have bought me a computer
          at a very young age in order to help me keep myself entertained.
        </p>
        <p>
          I had spent a significant time trying to learn everything there is
          about this new computer that I had just got and after playing some
          games on it I eventually wanted to make my own. Not sure where to
          start, a quick Google search led me to{" "}
          <strong>Visual Basic 2008</strong> and with it and the help of some
          programming tutorials on early YouTube I built my first little
          calculator application at the age of 8.
        </p>
        <p>
          A while later I had switched to <strong>Visual C#</strong> which
          turned out to be a good choice as I taught myself the fundamentals of
          object-oriented programming, whilst building other small{" "}
          <em>Windows Forms</em> applications.
        </p>
        <p>
          When I turned 10 years old I found out about web development when I
          watched a senior in high-school write some <strong>PHP 5.6</strong>{" "}
          code. I bought a book on HTML, CSS and Javascript and got started.
        </p>
        <p>
          Today it's been over 13 years since I have started working on web
          pages and applications, the landscape has significantly changed. My
          beginnings using <strong>CSS sprites</strong> and images with baked-in
          shadows are now long over, replaced by a flourishing ecosystem of
          continuously evolving frameworks and libraries like{" "}
          <strong>React, Svelte, and Vue</strong>. <strong>Node.js</strong> has
          made server-side Javascript mainstream and Typescript has entered the
          scene and changed it forever.{" "}
        </p>
        <p>
          As the web was evolving so did my skills and now I am capable of
          deploying full-stack, performant and scalable applications on
          bare-metal using <strong>Docker</strong> and{" "}
          <strong>Kubernetes</strong>, or in a serverless environment on{" "}
          <strong>Google Cloud Platform</strong> or{" "}
          <strong>Amazon Web Services</strong>
        </p>
      </article>
      <section className="projects">
        <h3>My Projects</h3>
        <div className="project">
          <h6>Citrine CLI</h6>
          <p>Citrine is a command line interface that makes it simple and straightforward to manage your tasks.</p>

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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
              View on GitHub
            </button>
          </a>
          <div className="badge">
            <span className="rust">
            </span>
            Rust
          </div>
        </div>
      </section>
    </>
  );
};
