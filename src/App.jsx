import { createContext, useState } from 'react';

import { ImageList } from './components/ImageList/ImageList';
import { Form } from './components/Form/Form';
import { Section } from './styles';

export const PhotoContext = createContext();

const Context = (props) => {
  console.log(props.children);

  const [cards, setCards] = useState([]);

  const addCards = (value) => {
    setCards([...cards, value]);
  };

  const newCards = {
    addCards,
    cards,
  };

  return (
    <PhotoContext.Provider value={newCards}>
      {props.children}
    </PhotoContext.Provider>
  );
};

function App() {
  return (
    <>
      <header>
        <h1>Тестовое задание</h1>
      </header>
      <main>
        <Context>
          <Section>
            <Form />
            <ImageList />
          </Section>
        </Context>
      </main>
    </>
  );
}

export default App;
