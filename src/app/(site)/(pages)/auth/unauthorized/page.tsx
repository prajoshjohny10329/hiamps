export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-semibold mb-4">Access Denied</h1>
        <p className="text-gray-600">
          You are not authorized to access this page.
        </p>
      </div>
    </div>
  );
}
