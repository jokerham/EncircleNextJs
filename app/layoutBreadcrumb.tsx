import { FaSitemap } from 'react-icons/fa'

export default function LayoutBreadcrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb encircle-breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          <FaSitemap className="me-2"/>
          Home
        </li>
      </ol>
    </nav>
  )
}

// Breadcrumb implementation using NEXTJS
// https://dev.to/dan_starner/building-dynamic-breadcrumbs-in-nextjs-17oa