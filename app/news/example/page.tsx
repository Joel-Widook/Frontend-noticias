import Image from "next/image";
import { notFound } from "next/navigation";

import { fetchArticles } from "@/app/hooks/useFetchArticles";
import { Article } from "@/app/types";

const Noticia = async () => {
  let articles: Article[] = [];

  try {
    // Obtener los artículos dentro del componente
    articles = await fetchArticles();
    console.log("Articles loaded:", articles.length);
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    notFound(); // Redirigir a la página 404 si hay un error
  }

  // Si no hay artículos, mostrar un mensaje
  if (articles.length === 0) {
    return (
      <div className="bg-white p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          No hay noticias disponibles
        </h1>
        <p className="text-gray-600 mt-4">
          Intenta más tarde o contacta al administrador.
        </p>
      </div>
    );
  }

  // Obtener un artículo para mostrar en detalle
  const featuredArticle = articles[1];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen">
          {/* Sidebar con otras noticias */}
          <div className="w-full md:w-1/3 p-4 border-r border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Otras Noticias
            </h1>
            <div className="space-y-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                >
                  <h3 className="font-semibold text-lg text-gray-800">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600">{article.subtitle}</p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{article.category.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contenido principal */}
          <div className="w-full md:w-2/3">
            {/* Etiquetas */}
            <div className="flex flex-wrap gap-2 w-full bg-gray-200 p-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {featuredArticle.category.name}
              </span>
              {featuredArticle.tag && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  {featuredArticle.tag.name}
                </span>
              )}
              {featuredArticle.celebrity && (
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  {featuredArticle.celebrity.name}
                </span>
              )}
            </div>

            {/* Artículo principal */}
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-2">
                {featuredArticle.title}
              </h1>
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                {featuredArticle.subtitle}
              </h2>

              {/* Imagen de portada */}
              {featuredArticle.cover && (
                <div className="my-6 relative w-full h-[400px]">
                  <Image
                    src={featuredArticle.cover.url}
                    alt={featuredArticle.cover.alternativeText || "Portada"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Contenido del artículo */}
              <div className="my-6 prose max-w-none">
                {featuredArticle.content &&
                  featuredArticle.content.map((contentItem) => (
                    <div
                      key={contentItem.id}
                      dangerouslySetInnerHTML={{ __html: contentItem.body }}
                    />
                  ))}
              </div>

              {/* Información del autor y fecha */}
              <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-600">
                <div>
                  <span>Por: </span>
                  <span className="font-medium">
                    {featuredArticle.author?.name || "Autor desconocido"}
                  </span>
                </div>
                <div>
                  <span>Publicado: </span>
                  <span>
                    {new Date(featuredArticle.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
