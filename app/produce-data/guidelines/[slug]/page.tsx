import { notFound } from "next/navigation";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { DocsPager } from "@/components/docs/DocsPager";
import { getGuidelineBySlug, getGuidelines } from "@/lib/content";
import { readMarkdownFile } from "@/lib/content/markdown";
import { MarkdownContent } from "@/lib/content/markdown-content";

interface GuidelinePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const guidelines = getGuidelines();
  return guidelines.map((guideline) => ({
    slug: guideline.slug,
  }));
}

export async function generateMetadata({ params }: GuidelinePageProps) {
  const { slug } = await params;
  const guideline = getGuidelineBySlug(slug);

  if (!guideline) {
    return {};
  }

  return {
    title: guideline.title,
    description: guideline.summary,
  };
}

export default async function GuidelinePage({ params }: GuidelinePageProps) {
  const { slug } = await params;
  const guideline = getGuidelineBySlug(slug);

  if (!guideline) {
    notFound();
  }

  const content = readMarkdownFile(guideline.content_path);

  return (
    <DocsLayout>
      <MarkdownContent content={content} />
      <DocsPager currentSlug={slug} />
    </DocsLayout>
  );
}
