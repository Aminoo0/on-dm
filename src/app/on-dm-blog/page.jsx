import { blogs } from "@/data/blog";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";

export default function BentoGridDemo() {
  return (
    (<BentoGrid className="max-w-4xl mx-auto pt-10">
      {blogs.map((blog, index) => (
        <Link
          key={index}
          href={`/on-dm-blog/${blog?.id}/${blog?.title} `}>
          <BentoGridItem
            key={index}
            img={blog.img}
            title={blog.title}
            description={blog?.disc?.split(' ').slice(0, 10).join(' ')}
            className={index % 2 ? "" : "hover:bg-transparent duration-300"}
          />
        </Link>
      ))}
    </BentoGrid>)
  );
}
