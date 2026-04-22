import { HashRouter, Routes, Route } from 'react-router-dom';
import { GcdsHeader, GcdsFooter } from '@gcds-core/components-react';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <HashRouter>
      <GcdsHeader langHref="#" signatureVariant="colour" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <GcdsFooter display="full" />
    </HashRouter>
  );
}

export default App;