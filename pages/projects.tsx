import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { getProjects } from "../lib/projectLoader";

function ProjectItem({ slug, title, desc, image, git, complexity, lang }) {
    return (
        <Link href={slug}>
            <div className="project">
                <h2>{title}</h2>
                <div>
                    <Image src={image} alt={"an image relating to " + title} height={300} width={300} />
                    <span>{desc}</span>
                </div>
            </div>
        </Link>
    )
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
            projects: getProjects()
        }
    }
}