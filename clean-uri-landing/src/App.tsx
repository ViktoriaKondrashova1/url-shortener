import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { LinksProvider } from './context/LinksProvider';

function App() {
  return (
    <LinksProvider>
      <RouterProvider router={router} />
    </LinksProvider>
  );
}

export default App;
