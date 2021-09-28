import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), '_projects');

export function getProjects() {

    const allPosts = fs.readdirSync(contentDir);

    return allPosts.map((file) => {
        const slug = file.replace(".json", "");
        const { title, desc, image, git, complexity, lang } = JSON.parse(fs.readFileSync(
            path.join(contentDir, file), 'utf8'
        ));

        return { slug, title, desc, image, git, complexity, lang };
    });
}
