import { Route, Routes } from 'react-router-dom';
import CardList from './components/CardList';
import './App.css';
import EditPage from './components/EditPage';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <header className='heading'>Admin Dashboard</header>
      <div className="App">
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path='/edit/:id' element={<EditPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
