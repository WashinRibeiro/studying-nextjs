import { Suspense } from "react";
import { PostInfo } from "./_components/post";

export default async function DetailPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-4">Detalhe do post {id} </h1>
      <Suspense fallback={<h2>Carregando detalhes...</h2>}>
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
}
