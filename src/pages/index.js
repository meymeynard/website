import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJs, faReact, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ruby from '../images/ruby.svg'
import typescript from '../images/typescript.svg'
import Layout from "../components/layout";

function IndexPage() {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
          name
        }
      }
    }
  `);

  return (
    <Layout>
      <section className="pt-20">
        <h2 className="text-3xl">
          {data.site.siteMetadata.title} {"I'm "}
          <span className="text-blue-800 font-bold">
            {data.site.siteMetadata.name}
          </span>
        </h2>
        <p className="text-xl pt-4">
          {
            "I'm a web developer based in Manila with over 5 years of experience."
          }
          <br />
          {
            "I've worked with different startups as: frontend developer, backend developer, android developer and a little bit of UX research."
          }
        </p>
      </section>
      <section className="text-xl pt-8">
        <p>{"Some of the technologies that I've used:"}</p>
        <div className="grid grid-cols-2 pt-4">
          <div>
            <FontAwesomeIcon icon={faReact} className="mr-1" />
            ReactJS
          </div>
          <div className="flex items-center">
            <img src={typescript} className="h-6 w-6 -ml-1 mr-1" />
              TypeScript
          </div>
          <div className="flex items-center">
            <img src={ruby} className="h-6 w-6 -ml-1 mr-1" />
            Ruby on Rails
          </div>
          <div>
            <FontAwesomeIcon icon={faHtml5} className="mr-2" />
            HTML and CSS
          </div>
          <div>
            <FontAwesomeIcon icon={faJs} className="mr-2" />
              Javascript (ES6+)
          </div>
        </div>
      </section>
      <section className="text-xl pt-8">
        <p>
          {
            "You can reach me through here:"
          }
        </p>
        <div className="grid grid-cols-3 gap-1 pt-4">
          <div>
            <a href="mailto:meymeynard@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/meymeynard/">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              LinkedIn
            </a>
          </div>
          <div>
            <a href="https://github.com/meymeynard">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Github
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
