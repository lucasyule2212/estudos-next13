import React from 'react'

export default function LayoutCatalogo({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <strong>Catálogo:</strong>
      {children}
    </div>

  )
}
