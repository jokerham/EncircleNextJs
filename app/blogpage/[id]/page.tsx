'use client'

export default function BlogPage({ params }: { params: { id: string } }) {
    return (
      <article>
        {params.id.toUpperCase()} Blog Page
      </article>
    )
  }
  