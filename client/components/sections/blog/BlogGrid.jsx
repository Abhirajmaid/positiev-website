import { Container } from '@/components/layout/Container';

const PLACEHOLDER_POSTS = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  title: 'The Rise of Electric Vehicles:',
  excerpt:
    'How EVs are reshaping transportation, reducing emissions, and changing the global auto industry',
  date: 'June 19, 2025',
  author: 'Anna Hathaway',
}));

function BlogCard({ title, excerpt, date, author }) {
  return (
    <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-[18px] border border-[#DDDDDD] bg-white shadow-sm">
      <div className="h-[220px] w-full shrink-0 bg-[#E8E8E8] sm:h-[240px] md:h-[280px] lg:h-[300px]" />
      <div className="flex flex-1 flex-col px-6 pb-6 pt-6 md:px-7 md:pb-7 md:pt-7 lg:px-8 lg:pb-8 lg:pt-8">
        <h2 className="text-left text-xl font-bold leading-snug tracking-tight text-black md:text-2xl md:leading-tight lg:text-[26px] lg:leading-snug">
          {title}
        </h2>
        <p className="mt-4 text-left text-base font-normal leading-relaxed text-[#666666] md:text-lg lg:text-[17px] lg:leading-relaxed">
          {excerpt}
        </p>
        <div className="mt-6 border-t border-[#DDDDDD] pt-5">
          <div className="flex items-center justify-between gap-4 text-sm font-bold text-black md:text-[15px]">
            <time dateTime="2025-06-19">{date}</time>
            <span className="text-right font-bold">{author}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

/** Ref 3–6: 2-column grid, 8 cards, placeholder image ~60% height, divider, date | author */
export function BlogGrid() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <Container className="max-w-[1200px]">
        <div className="grid grid-cols-1 gap-7 sm:gap-8 md:grid-cols-2 md:gap-9 lg:gap-10">
          {PLACEHOLDER_POSTS.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
