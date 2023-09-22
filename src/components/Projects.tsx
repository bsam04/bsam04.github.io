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
  return (
    <Link href={`/projects/${projectData.slug}`}>
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold">{projectData.title}</h3>
        </CardHeader>
        <Divider />
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
          <div className="flex gap-3">
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
      </Card>
    </Link>
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
      <div className="grid grid-cols-3 gap-6">
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
