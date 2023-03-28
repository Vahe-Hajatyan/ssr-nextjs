import { NextPageContext } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MainLayout } from "../components/MainLayout";
import { MyPost } from "../interfaces/post";

interface PostPageProps {
  post: MyPost[];
}

export default function Posts({ post: serverPost }: PostPageProps) {
  const [post, setPost] = useState(serverPost);
  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`);
      const data = await response.json();
      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading ...</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <h1>Post Pages</h1>
      <ul>
        {post.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`} legacyBehavior>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) return { post: null };
  const response = await fetch(`${process.env.API_URL}/posts`);
  const post: MyPost[] = await response.json();
  return {
    post,
  };
};
