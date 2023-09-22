import { getAllProjectSlugs, getProjectData } from "@/utils/projects";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const projectData = await getProjectData(params.slug);
  return {
    title: `${projectData.title} - Benjamin Sam`,
    description: `Benjamin Sam's ${projectData.title} project.`,
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const projectData = await getProjectData(params.slug);

  return (
    <main className="container mx-auto px-64">
      <div className="flex flex-col gap-4">
        <section>
          <h3 className="text-4xl font-bold mb-6">{projectData.title}</h3>
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
        </section>
        <Divider />
        <section className="flex flex-col items-center my-5">
          <Image
            className="max-h-[32rem]"
            radius="sm"
            src={projectData.image}
            alt={projectData.title}
          />
        </section>
        <Divider />
        <section>
          <div
            className="project-html"
            dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
          />
        </section>
      </div>
    </main>
  );
}
