export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-50 to-lime-50 text-gray-800">
      <h1 className="text-6xl font-bold text-lime-600">404</h1>
      <h2 className="text-3xl mt-2 font-medium">
        Oh no! This recipe is missing from our cookbook.
      </h2>
      <p className="mt-4 text-gray-600 text-xl">
        It looks like the page you're looking for doesn't exist. Maybe you're
        hungry for something else?
      </p>

      <div className="mt-6 flex space-x-4">
        <a
          href="/"
          className="px-5 py-3 font-medium bg-lime-500 text-white rounded-md shadow-md hover:bg-lime-600 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
