import Link from "next/link";
import { ReactNode } from "react";

function Highlights(): ReactNode {
  return (
    <section className="px-4 pb-8">
      <div className="max-w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-start items-start">
          <span className="flex justify-center items-center">
            <h1 className="text-xl font-semibold">Recent articles</h1>{" "}
            <a className="underline text-sm text-sky-500 mx-2" href="/articles">
              All articles
            </a>
          </span>
          <p>A collection of well researched articles written by me</p>
          <span className="flex flex-col justify-start items-start my-2 px-4">
            <RecentArticleCard
              title="Asynchronous nature of javascript"
              date="28 Dec 2024"
              link="/articles"
            />
            <RecentArticleCard
              title="Asynchronous nature of javascript"
              date="28 Dec 2024"
              link="/articles"
            />
            <RecentArticleCard
              title="Asynchronous nature of javascript"
              date="28 Dec 2024"
              link="/articles"
            />
            <RecentArticleCard
              title="Asynchronous nature of javascript"
              date="28 Dec 2024"
              link="/articles"
            />
            <RecentArticleCard
              title="Asynchronous nature of javascript"
              date="28 Dec 2024"
              link="/articles"
            />
          </span>
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="flex justify-center items-center">
            <h1 className="text-xl font-semibold">Recent notes</h1>{" "}
            <a className="underline text-sm text-sky-500 mx-2" href="/notes">
              All notes
            </a>
          </span>
          <p>A dump of whatever I am learning on daily basis</p>
          <span className="flex flex-col justify-start items-start my-2 px-4">
            <RecentNoteCard title="Microservices" link="/articles" />
          </span>
        </div>
      </div>
    </section>
  );
}

interface RecentNoteCardProps {
  title: string;
  link: string;
}

type RecentArticleCardProps = RecentNoteCardProps & {
  date: string;
};

function RecentArticleCard({
  title,
  date,
  link,
}: RecentArticleCardProps): ReactNode {
  return (
    <li className="my-1">
      {date + " : "}
      <Link className=" text-sky-400" href={link}>
        {title}
      </Link>
    </li>
  );
}

function RecentNoteCard({ title, link }: RecentNoteCardProps): ReactNode {
  return (
    <li className="my-1">
      <Link className=" text-sky-400" href={link}>
        {title}
      </Link>
    </li>
  );
}

export default Highlights;
