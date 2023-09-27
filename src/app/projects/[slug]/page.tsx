import { getAllProjectSlugs, getProjectData } from "@/utils/projects";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import type { Metadata } from "next";
import Link from "next/link";

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
    <main className="container mx-auto px-6 max-w-4xl">
      <div className="flex flex-row gap-3">
        <div className="hidden sm:block h-screen sticky top-0 pt-5">
          <Link href={"/"} className="no-underline blue-link text-4xl">
            ←
          </Link>
        </div>
        <div className="hidden sm:block h-screen sticky top-0">
          <Divider orientation="vertical" />
        </div>
        <div className="flex flex-col gap-4">
          <section>
            <h3 className="text-4xl font-bold mb-6">{projectData.title}</h3>
            <div className="flex gap-4">
              <Link
                href={projectData.github}
                className="text-lg blue-link underline"
              >
                Github
              </Link>
              {projectData.demo ? (
                <Link
                  href={projectData.demo}
                  className="text-lg blue-link underline"
                >
                  Demo
                </Link>
              ) : null}
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
          <Divider />
          <section>
            <div
              className="project-html"
              dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
