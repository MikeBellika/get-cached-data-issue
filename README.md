# Repro to show when reactivity on `key` on `useFetch` would be useful

1. Goto /users
2. Goto another page
3. Use navigation to goto /news
4. Navigate to users again
5. See that the cached data is displayed, despite page now being reset

Excuse the kind of sloppy code, made with bolt
