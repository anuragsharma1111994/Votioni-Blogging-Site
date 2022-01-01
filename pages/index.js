import Head from "next/head";
import { PostCard, Categories, PostWidgit } from "../components";

const posts = [
  {
    title: " React Test",
    excerpt: "Learn Js",
  },
  {
    title: " Django Test",
    excerpt: "Learn Django",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Votioni Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
          <div className="lg:col=span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidgit />
              <Categories />
            </div>
          </div>
      </div>
    </div>
  );
}
