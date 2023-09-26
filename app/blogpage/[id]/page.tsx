'use client'

export default function BlogPage({ params }: { params: { id: string } }) {
    return (
      <article className="encircle-blog-article">
        {params.id.toUpperCase()} Blog Page
      </article>
    )
  }
  