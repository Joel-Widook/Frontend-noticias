import { Article } from "../types";

// Eliminamos la barra final para evitar dobles barras en la URL
export const STRAPI_URL = "http://18.119.139.94:1337";

export const fetchArticles = async (): Promise<Article[]> => {
    try {
        console.log('Fetching articles from:', `${STRAPI_URL}/api/articles?populate=*`);
        
        const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eef1fbe1a70429bc1c09cb07557a55056e5ddcde903b0068df80032804c4a188e34bdc915a38f680b0ede7b3c0386e2631232a675b03ab1d392c684b085074525902a2a3b406fbc945700ec9b73ebae8b0fdca909fdc1171bf68365d77ec4653b338f8971cd25c0446835a4ab4631c9e36fd6b6ba80e6d94f712306b1026bab4"
            },
            next: { revalidate: 0 } // Desactivar caché para desarrollo
        });
        
        if(!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', response.status, errorText);
            throw new Error(`Failed to fetch articles: ${response.status} ${errorText}`);
        }
        
        const data = await response.json();
        console.log('Data received successfully');
        
        // Verificar la estructura de los datos
        if (!data.data || !Array.isArray(data.data)) {
            console.error('Unexpected data structure:', JSON.stringify(data).substring(0, 200));
            throw new Error('Unexpected data structure from API');
        }
        
        // Definimos un tipo para los datos sin procesar que recibimos de la API
        type StrapiArticleResponse = {
            data: Article[];
            meta: {
                pagination: {
                    page: number;
                    pageSize: number;
                    pageCount: number;
                    total: number;
                }
            }
        };

        // Procesar los datos para asegurarnos que las URLs de las imágenes sean absolutas
        const processedData = (data as StrapiArticleResponse).data.map((article: Article) => {
            // Asegurarse de que las URLs de las imágenes sean absolutas
            if (article.cover && article.cover.url && article.cover.url.startsWith('/')) {
                article.cover.url = `${STRAPI_URL}${article.cover.url}`;
                
                // También actualizar las URLs en los formatos si existen
                if (article.cover.formats) {
                    // Actualizar cada formato de manera segura
                    if (article.cover.formats.thumbnail && article.cover.formats.thumbnail.url.startsWith('/')) {
                        article.cover.formats.thumbnail.url = `${STRAPI_URL}${article.cover.formats.thumbnail.url}`;
                    }
                    if (article.cover.formats.small && article.cover.formats.small.url.startsWith('/')) {
                        article.cover.formats.small.url = `${STRAPI_URL}${article.cover.formats.small.url}`;
                    }
                    if (article.cover.formats.medium && article.cover.formats.medium.url.startsWith('/')) {
                        article.cover.formats.medium.url = `${STRAPI_URL}${article.cover.formats.medium.url}`;
                    }
                    if (article.cover.formats.large && article.cover.formats.large.url.startsWith('/')) {
                        article.cover.formats.large.url = `${STRAPI_URL}${article.cover.formats.large.url}`;
                    }
                }
            }
            return article;
        });
        
        return processedData;
    } catch (error) {
        console.error('Error in fetchArticles:', error);
        throw error;
    }
};