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

## Premium Ertiga brand rule (all pages)

Every commercial service page, route page and blog article must naturally explain:

1. **Why Lucky Travels specialises only in the Premium Ertiga.**
2. **Why a Premium Ertiga can be a more practical and comfortable choice** than a typical compact hatchback or sedan for families, small groups, elderly travellers and customers carrying luggage.
3. **That focusing on one vehicle category helps Lucky Travels provide a more consistent experience** in vehicle preparation, cleanliness, seating guidance, luggage planning, customer communication and trip coordination.
4. **Use the exact approved slogan**: "Only Premium Ertiga—Because Comfort Should Never Be Optional."

### How to explain the specialisation

For pages where a complete section would be repetitive, include a short brand statement with a descriptive internal link to the founder story:

"Lucky Travels specialises only in the Premium Ertiga because comfort, practical space and consistent service should never be optional."

Link "why Lucky Travels specialises only in the Premium Ertiga" to: `/blog/why-lucky-travels-specialises-in-premium-ertiga`

For pages with more space, use this approved core explanation:

"Instead of offering every available vehicle category, Lucky Travels concentrates on the Premium Ertiga to provide a more consistent and dedicated customer experience. Compared with a typical compact hatchback or sedan, the Ertiga offers more flexible seating and cabin space for many family, small-group and longer journeys. Final passenger and luggage suitability is always confirmed before booking."

### Luggage and vehicle limitations

Always state honestly:

"Luggage capacity is not unlimited. Suitability depends on the passenger count, seats required, suitcase sizes and other travel requirements. Please share these details before confirmation."

Do not insult, disparage or make absolute claims about sedans, hatchbacks, SUVs, other taxi operators or manufacturers. Do not claim unlimited luggage capacity.
