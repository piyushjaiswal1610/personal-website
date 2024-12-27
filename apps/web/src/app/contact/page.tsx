import React from "react";

function ContactPage(): React.ReactNode {
  return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold italic mb-8">Contact</h1>

        <p className="text-gray-600 dark:text-gray-300 mb-12">
          I&apos;m always interested in hearing about new opportunities,
          collaborations, or just having a conversation about technology and
          development.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <span className="font-medium">Email:</span>
                <a
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  href="mailto:your.email@example.com"
                >
                  your.email@example.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-medium">LinkedIn:</span>
                <a
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  href="https://linkedin.com/in/piyushjaiswal1610"
                >
                  linkedin.com/in/yourprofile
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="font-medium">Twitter:</span>
                <a
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  href="https://x.com/piyushjaiswal1610"
                >
                  @yourhandle
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ContactPage;
