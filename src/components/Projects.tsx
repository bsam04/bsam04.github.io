import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import {
  getAllProjectSlugs,
  getProjectData,
  projectDataType,
} from "@/utils/projects";
import Link from "next/link";

function ProjectCard({ projectData }: { projectData: projectDataType }) {
  const projectLinkHref = `/projects/${projectData.slug}`;

  return (
    <Card>
      <CardHeader>
        <div className="w-full">
          <Link
            href={projectLinkHref}
            className="no-underline hover:text-inherit"
          >
            <h3 className="text-2xl font-semibold mb-1">{projectData.title}</h3>
          </Link>
          <div className="flex gap-4">
            <Link href={projectData.github} className="text-lg underline">
              Github
            </Link>
            {projectData.demo ? (
              <Link href={projectData.demo} className="text-lg underline">
                Demo
              </Link>
            ) : null}
          </div>
        </div>
      </CardHeader>
      <Divider />
      <Link href={projectLinkHref} className="no-underline hover:text-inherit">
        <CardBody>
          <div>
            <Image
              className="w-full object-cover max-h-[320px]"
              width="100%"
              radius="sm"
              src={projectData.image}
              alt={projectData.title}
            />
          </div>
          <Divider className="my-3" />
          <div
            className="project-html line-clamp-6"
            dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
          />
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="flex gap-3 flex-wrap">
            {projectData.keywords.map((keyword, index) => {
              return (
                <Chip
                  key={index}
                  className={`chip-skill-${keyword.toLowerCase()}`}
                >
                  {keyword}
                </Chip>
              );
            })}
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}

const divideArray = <T,>(array: T[], n: number): T[][] => {
  const arrayCopy = [...array];
  const result = [];
  for (let i = n; i > 0; i--) {
    result.push(arrayCopy.splice(0, Math.ceil(arrayCopy.length / i)));
  }
  return result;
};

export default async function Projects() {
  const projectSlugs = getAllProjectSlugs();
  const projectData = await Promise.all(
    projectSlugs.map(async (project) => await getProjectData(project.slug))
  );

  const dividedProjectData = divideArray(projectData, 3);

  return (
    <section>
      <h3 className="text-4xl font-bold mb-8">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {dividedProjectData.map((projectDataArray, index) => {
          return (
            <div key={index} className="flex flex-col gap-6">
              {projectDataArray.map((data, index) => {
                return <ProjectCard key={index} projectData={data} />;
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
