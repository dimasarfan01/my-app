import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import InboxPage from './pages/InboxPage';
import ProfilePage from './pages/ProfilePage';
import BottomNavigation from './components/organism/BottomNavigation';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<NewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore/:name" element={<ExplorePage />} />
        <Route path="/inbox" element={<InboxPage />} />
      </Routes>
      <BottomNavigation />
    </BrowserRouter>
  );
}

export default App;
