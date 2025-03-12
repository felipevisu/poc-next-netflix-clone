import { FeaturedContent } from "@/components/FeaturedContent";
import { Session } from "@/components/Session";

export default function Home() {
  return (
    <div>
      <FeaturedContent />
      <Session title="Novos conteúdos" />
      <Session title="Recomendado para você" />
    </div>
  );
}
