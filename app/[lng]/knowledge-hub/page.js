import { KnowledgeHubExplorer } from "../../../components/knowledge-hub-explorer";
import { enContent } from "./page.content.en";
import { elContent } from "./page.content.el";

export default async function KnowledgeHubPage({ params }) {
  const { lng } = await params;
  const content = lng === "el" ? elContent : enContent;

  return <KnowledgeHubExplorer content={content} />;
}
