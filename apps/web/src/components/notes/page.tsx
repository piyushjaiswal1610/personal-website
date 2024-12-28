import React from "react";

function PaperShelfPage(): React.ReactNode {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold italic mb-8">Notes</h1>

      {/* Notice Box */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-12">
        <p className="text-gray-600 dark:text-gray-300">
          I want to be a curious person. And in pursuit of that I like to read
          and learn about various things in general on daily basis. And in this
          section, I simply do a dump of my learnings on daily basis. I hope it
          might help you in one way or other.
        </p>
      </div>
    </div>
  );
}

export default PaperShelfPage;
