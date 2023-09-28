import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "src", "projects");

type projectMetadataType = {
  title: string;
  image: string;
  priority: number;
  github: string;
  demo?: string;
  keywords: string[];
};
type matterResultType = {
  content: string;
  data: projectMetadataType;
};
export type projectDataType = projectMetadataType & {
  slug: string;
  contentHtml: string;
};

export function getAllProjectSlugs() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ""),
    };
  });
}

export async function getProjectData(slug: string): Promise<projectDataType> {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // @ts-ignore
  const matterResult: matterResultType = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
