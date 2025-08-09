import { TriangleAlert } from "lucide-react"
import { Link, useNavigate, useSearchParams } from "react-router"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet" // You may need to install this package

const NotFoundPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  
  const [errorDetails, setErrorDetails] = useState({
    code: "404",
    title: "Page Not Found",
    message: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
  })
  
  useEffect(() => {
    // Get error details from URL parameters if available
    const code = searchParams.get('code')
    const title = searchParams.get('title')
    const message = searchParams.get('message')
    
    setErrorDetails({
      code: code || "404",
      title: title || "Page Not Found",
      message: message || "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
    })
  }, [searchParams])
  
  const goBack = () => {
    navigate(-1)
  }

  const pageTitle = `${errorDetails.code} - ${errorDetails.title}`

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={errorDetails.message} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={errorDetails.message} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={errorDetails.message} />
      </Helmet>

      <main className="bg-gray-100 font-sans text-gray-800 min-h-screen flex items-center justify-center p-4">
        <article className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <header>
            <div className="text-red-500 text-7xl mb-4" aria-hidden="true">
              <TriangleAlert size={84} className="mx-auto" />
            </div>
            <div 
              className="text-red-500 text-6xl font-bold mb-2" 
              aria-label={`Error code ${errorDetails.code}`}
            >
              {errorDetails.code}
            </div>
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
              {errorDetails.title}
            </h1>
          </header>
          <section className="text-gray-500 mb-8">
            <p>{errorDetails.message}</p>
          </section>
          <nav className="flex flex-col sm:flex-row justify-center gap-4" aria-label="Error page navigation">
            <button 
              onClick={goBack}
              className="px-6 py-3 border border-blue-500 text-blue-500 rounded-md font-medium hover:bg-blue-50 transition-colors"
              aria-label="Go back to previous page"
            >
              Go Back
            </button>
            <Link 
              to="/" 
              className="px-6 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
              aria-label="Go to homepage"
            >
              Go Home
            </Link>
          </nav>
        </article>
      </main>
    </>
  )
}

export default NotFoundPage