import Link from "next/link";
import React from "react";

const articles = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) => {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>News article id</h1>
      <p>Reading in language</p>
      <div>
        <Link href={`/article/${articleId}/lang=en`}>English</Link>
        <Link href={`/article/${articleId}/lang=es`}>Spanish</Link>
        <Link href={`/article/${articleId}/lang=fr`}>French</Link>
      </div>
    </div>
  );
};

export default articles;
