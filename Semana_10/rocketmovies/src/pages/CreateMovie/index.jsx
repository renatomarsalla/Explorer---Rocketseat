import { Container, Content } from './styles';
import { Header } from '../../components/Header/index.jsx';
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input/index.jsx';
import { TextArea } from '../../components/TextArea/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { NewMarker } from '../../components/NewMarker/index.jsx';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { api } from '../../services/api';

import { useNavigate } from 'react-router-dom';

export function CreateMovies() {
  const [tag, setTag] = useState([]);
  const [newTag, setNewTag] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');

  const navigate = useNavigate();

  function handleAddTag() {
    setTag(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTag(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Adicione um título para sua nota');
    }
    if (rating > 5) {
      alert('A nota deve estar entre 1 e 5');
      return;
    }
    if (newTag) {
      return alert('Você esqueceu de clicar no botão para adicionar a Tag');
    }
    await api.post('/movie_notes', {
      title,
      description,
      tags: tag,
      result: rating
    });

    alert('nota criada com sucesso');
    navigate('/');
  }

  return (
    <Container>
      <Header />
      <Content>
        <div className="page">
          <div className="back">
            <FiArrowLeft />
            {/* <a href="#">Voltar</a> */}
            <Link to="/">Voltar</Link>
          </div>
          <div className="newMovie">
            <h2>Novo filme</h2>
          </div>
          <div className="titleAndNote">
            <Input
              placeholder="Título"
              size={73}
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota de 0 a 5"
              size={73}
              onChange={e => setRating(e.target.value)}
            />
          </div>
          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />
          <div className="mark">
            <h2>Marcadores</h2>
            <div className="section">
              {tag.map((tag, index) => {
                return (
                  <NewMarker
                    value={tag}
                    size={6}
                    key={String(index)}
                    onClick={() => {
                      handleRemoveTag(tag);
                    }}
                  />
                );
              })}

              <NewMarker
                isNew
                value={newTag}
                size={15}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
                placeholder="Nova tag"
              />
            </div>
          </div>
          <div className="btns">
            {/* <div className="btnBlack">
              <button>Excluir filme</button>
            </div> */}
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </div>
        </div>
      </Content>
    </Container>
  );
}
