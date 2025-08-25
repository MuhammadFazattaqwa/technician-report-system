"use client"

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-4">Tidak Ada Koneksi Internet</h1>
        <p className="text-muted-foreground mb-6">
          Aplikasi sedang offline. Silakan periksa koneksi internet Anda dan coba lagi.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  )
}
