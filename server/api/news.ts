interface Article {
  id: number;
  title: string;
  summary: string;
  date: string;
}

const articles: Article[] = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  title: `Article ${i + 1}`,
  summary: `This is a summary for article ${i + 1}. It contains some sample text to demonstrate the content.`,
  date: new Date(2024, 0, i + 1).toISOString().split('T')[0]
}));

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  const paginatedArticles = articles.slice(startIndex, endIndex);
  
  return {
    articles: paginatedArticles,
    total: articles.length,
    page,
    totalPages: Math.ceil(articles.length / limit)
  };
});