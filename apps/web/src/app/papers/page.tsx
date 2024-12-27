import React from "react";
import Header from "../../components/layout/Header";

const PapershelfPage = () => {
  const recentPapers = [
    {
      date: "Sep 15, 2024",
      title: "On-demand Container Loading in AWS Lambda",
      link: "/papers/container-loading-aws",
    },
    {
      date: "Sep 03, 2024",
      title: "SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL",
      link: "/papers/sql-pipe-syntax",
    },
    {
      date: "Aug 28, 2024",
      title: "NanoLog: A Nanosecond Scale Logging System",
      link: "/papers/nanolog-system",
    },
  ];

  const categories = {
    "Information Retrieval": [
      "Near-duplicate Question Detection",
      "Striking the right chord: A comprehensive approach to Amazon Music search spell correction",
      "Query Attribute Recommendation at Amazon Search",
      "ROSE: Robust caches for Amazon product search",
    ],
    "Backend System Design": [
      "Stage: Query Execution Time Prediction in Amazon Redshift",
      "A flexible large-scale similar product identification system in e-commerce",
      "Amazon MemoryDB: A fast and durable memory-first cloud database",
    ],
  };

  return (
    <React.Fragment>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold italic mb-8">Papershelf</h1>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          I read a few papers every week around various topics that interests me
          and here are some of them that I found amusing categorized by topics.
          Here's the process I follow to{" "}
          <a href="#" className="text-blue-600 hover:underline">
            read
          </a>
          ,{" "}
          <a href="#" className="text-blue-600 hover:underline">
            understand
          </a>
          , and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            remember a paper
          </a>
          .
        </p>

        {/* Recent Papers */}
        <div className="space-y-4 mb-12">
          {recentPapers.map((paper) => (
            <div key={paper.title} className="flex items-baseline gap-6">
              <span className="text-gray-500 dark:text-gray-400 w-32 flex-shrink-0">
                {paper.date}
              </span>
              <a
                href={paper.link}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {paper.title}
              </a>
            </div>
          ))}
        </div>

        {/* Notice Box */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-12">
          <p className="text-gray-600 dark:text-gray-300">
            I have been reading papers for a very long time and the notes I took
            were not public. I am in the process of making the notes public and
            this might take some time. So, the papers you see below this
            notification are links and the ones you see above are my notes and
            explanations for each one of them. Slowly, I will be pushing notes
            for all the papers I've read.
          </p>
        </div>

        {/* Categorized Papers */}
        {Object.entries(categories).map(([category, papers]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{category}</h2>
            <ul className="space-y-3">
              {papers.map((paper) => (
                <li key={paper}>
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {paper}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default PapershelfPage