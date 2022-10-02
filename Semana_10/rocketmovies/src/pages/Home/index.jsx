import { Container, Content } from './styles';
import { FiPlus, FiStar, FiX } from 'react-icons/fi';
import { Header } from '../../components/Header/index.jsx';

import { Section } from '../../components/Section/index.jsx';
import { Tag } from '../../components/Tags/index.jsx';
import { Note } from '../../components/Note/index.jsx';
import { Input } from '../../components/Input/index.jsx';

import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api.js';

import { useState, useEffect } from 'react';

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  function handleNoteMovie(id) {
    navigate(`/previewmovie/${id}`);
    // navigate('/previewmovie');
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie_notes?title=${search}`);
      console.log(response);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header />
      <div className="page">
        <div className="my-movies">
          <h2>Meus filmes</h2>
          <Input
            placeholder="Pesquisar pelo título"
            size={100}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="buttonAdd">
            <FiPlus />

            <Link to="/createMovie">Adiconar filmes</Link>
          </div>
        </div>

        <Content>
          <Section>
            {notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
                // onClick={handleNoteMovie}
                onClick={() => handleNoteMovie(note.id)}
              />
            ))}
          </Section>
        </Content>
      </div>
    </Container>
  );
}
