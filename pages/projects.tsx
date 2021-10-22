import styles from "../styles/Home.module.css";
import Link from "next/link";
import NextFallbackImage from "../components/NextFallbackImage";
import { getProjects } from "../lib/projectLoader";

function ProjectItem({ slug, title, desc, image, git, complexity, langs }) {
  return (
    <Link href={git}>
      <div className="project">
        <h2>{title}</h2>
        <div className="project-desc">
          <NextFallbackImage
            src={image}
            fallbackSrc={"/fallback.gif"}
            alt={"an image relating to " + title}
            layout="fill"
            objectFit="contain"
          />
          <span>
            {desc}
            <div>
              {langs.map((lang) => (
                <i
                  key={lang}
                  className={`devicon-${lang.toLowerCase()}-plain`}
                ></i>
              ))}
            </div>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Projects({ projects }) {
  return (
    <main className="main">
      <h1 className="title">Projects</h1>
      <div className="projectsContainer">
        {projects.map((item) => (
          <ProjectItem key={item.slug} {...item} />
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: getProjects(),
    },
  };
}
