import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600">
        {data || "Loading..."}
      </h1>
    </div>
  );
}

export default App;