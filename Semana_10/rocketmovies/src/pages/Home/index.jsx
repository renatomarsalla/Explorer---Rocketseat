import { Container, Content } from './styles';
import { FiPlus, FiStar } from 'react-icons/fi';
import { Header } from '../../components/Header/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Tag } from '../../components/Tags/index.jsx';
import { Note } from '../../components/Note/index.jsx';

import { Link } from 'react-router-dom';

import { api } from '../../services/api.js';

import { useState, useEffect } from 'react';

export function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get('/movie_notes');
      console.log(response);
      setNotes(response.data);
    }

    fetchNotes();
  }, []);

  return (
    <Container>
      <Header />
      <div className="page">
        <div className="my-movies">
          <h2>Meus filmes</h2>
          <div className="buttonAdd">
            <FiPlus />

            <Link to="/createMovie">Adiconar filmes</Link>
          </div>
        </div>

        <Content>
          <Section>
            {notes.map(note => (
              <Note key={String(note.id)} data={note} />
            ))}
          </Section>
        </Content>
      </div>
    </Container>
  );
}
