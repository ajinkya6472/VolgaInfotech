import './App.css';
import Table from './components/Table';
import Details from './components/Details';
import CreateEntry from './components/CreateEntry';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './tableStroe/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Table />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/create' element={<CreateEntry />} />
      </Routes>
    </Provider>
  );
}

export default App;
