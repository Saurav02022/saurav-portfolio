
import { Layout } from "@/components/layout/Layout";

const Posts = () => {
  const posts = [
    {
      title: "Setting Up WireGuard VPN to Access Your Home Network",
      description: "Setup a WireGuard VPN to host a backend server (FastAPI with uvicorn) that can be accessed from remote locations",
      date: "Jan 19, 2025",
      year: "2025"
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Knowledge Exchange</h1>
        
        <p className="text-gray-600 mb-8">
          In these blog posts, I'm documenting what I'm learning from the internet, particularly those concepts I find useful for the projects I'm 
          working on. I hope these insights can be helpful for others as well. I would greatly appreciate it if you could kindly review them and let 
          me know of any factual inaccuracies. Please feel free to send me a message with any updates or corrections.
        </p>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-medium text-gray-500">{post.year}</span>
                    <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                      {post.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
                <span className="text-sm text-gray-500 ml-4">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Posts;
