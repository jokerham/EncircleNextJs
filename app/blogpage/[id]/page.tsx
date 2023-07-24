'use client'

export default function BlogPage({ params }: { params: { id: string } }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {params.id.toUpperCase()} Blog Page
      </main>
    )
  }
  