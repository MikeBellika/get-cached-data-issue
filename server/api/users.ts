interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const users: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 2 === 0 ? 'Admin' : 'User'
}));

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  const paginatedUsers = users.slice(startIndex, endIndex);
  
  return {
    users: paginatedUsers,
    total: users.length,
    page,
    totalPages: Math.ceil(users.length / limit)
  };
});