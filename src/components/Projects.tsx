import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const projects = [
  {
    title: "Project Name 0",
    image: "/images/fruit-1.jpeg",
    description: `Project description 0. ${lorem}`,
    keywords: ["React", "Typescript", "TailwindCSS"],
  },
  {
    title: "Project Name 1",
    image: "/images/fruit-2.jpeg",
    description: `Project description 1. ${lorem}`,
    keywords: ["React", "Typescript", "TailwindCSS"],
  },
  {
    title: "Project Name 3",
    image: "/images/fruit-4.jpeg",
    description: `Project description 3. ${lorem}`,
    keywords: ["React", "Typescript", "TailwindCSS"],
  },
  {
    title: "Project Name 2",
    image: "/images/fruit-3.jpeg",
    description: `Project description 2. ${lorem}`,
    keywords: ["React", "Typescript", "TailwindCSS"],
  },
];

export default function Projects() {
  return (
    <section>
      <h3 className="text-4xl font-bold mb-6">Projects</h3>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project, index) => {
          return (
            <>
              <Card key={index}>
                <CardHeader>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </CardHeader>
                <Divider />
                <CardBody>
                  <div>
                    <Image
                      className="w-full object-cover max-h-[320px]"
                      width="100%"
                      radius="sm"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <Divider className="my-3" />
                  {project.description}
                </CardBody>
                <Divider />
                <CardFooter>
                  <div className="flex gap-3">
                    {project.keywords.map((keyword, index) => {
                      return <Chip key={index}>{keyword}</Chip>;
                    })}
                  </div>
                </CardFooter>
              </Card>
            </>
          );
        })}
      </div>
    </section>
  );
}
