export interface Format {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}

export interface Cover {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: Format;
        medium: Format;
        small: Format;
        large: Format;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    // Definimos un tipo más específico para provider_metadata
    provider_metadata: Record<string, unknown> | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface NewsParams {
    slug: string;
}

//definimos PageProps para el context de NextJs
export interface PageProps {
  params: NewsParams;
}

export interface Author {
    id: number;
    documentId: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Category {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface ContentItem {
    __component: string;
    id: number;
    body: string;
}

export interface Tag {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Celebrity {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Article {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    subtitle: string;
    date: string;
    cover: Cover;
    author: Author;
    category: Category;
    content: ContentItem[];
    tag: Tag;
    celebrity: Celebrity;
};

// Otras interfaces de tipos