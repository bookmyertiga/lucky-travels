# Adding new blog posts

The blog is data-driven. You do not need to create a new page file for every article.

## 1. Add the article image

Place a compressed JPG or WebP image inside:

```text
public/images/blog/
```

Example:

```text
public/images/blog/bengaluru-airport-guide.webp
```

## 2. Add one object to `data/blog.ts`

Copy this template and place it inside the `blogPosts` array:

```ts
{
  slug: "bengaluru-airport-travel-guide",
  title: "Bengaluru Airport Travel Guide",
  excerpt: "A useful guide for planning your journey to or from Kempegowda International Airport.",
  date: "2026-08-01",
  image: "/images/blog/bengaluru-airport-guide.webp",
  content: [
    "First paragraph of the article.",
    "Second paragraph of the article.",
    "Third paragraph of the article."
  ]
},
```

## 3. Save and rebuild

The website automatically creates:

- a card on `/blog`
- a full article page at `/blog/your-slug`
- an entry in `/sitemap.xml`
- article title, description, canonical URL and Open Graph metadata

## Writing guidance

- Write for real customers, not search engines.
- Keep each article useful and original.
- Use one clear topic per article.
- Mention Bengaluru, Premium Ertiga or the relevant service naturally.
- Do not copy content from other websites.
- Avoid repeating the same keywords unnaturally.
