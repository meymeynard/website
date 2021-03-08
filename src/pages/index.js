import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
          <img className="h-auto" src="src/images/profile.png" />
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
          <div>ReactJS</div>
          <div>TypeScript</div>
          <div>Ruby on Rails</div>
          <div>HTML and CSS</div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
