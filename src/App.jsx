import { createContext, useState } from 'react';

import { ImageList } from './components/ImageList/ImageList';
import { Form } from './components/Form/Form';
import { Section } from './styles';
import useAxios from './hooks/useAxios';

export const PhotoContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(
    'search/photos?page=1&&per_page=5&query=office&client_id=bnaNhON20Sbnx8PG2rRcrMhTNTURZdzW2_PEgU86Un4',
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <PhotoContext.Provider value={value}>
      <Section>
        <Form />
        <ImageList />
      </Section>
    </PhotoContext.Provider>
  );
}

export default App;
