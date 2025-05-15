import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </LanguageProvider>
    </Router>
  );
}

export default App;