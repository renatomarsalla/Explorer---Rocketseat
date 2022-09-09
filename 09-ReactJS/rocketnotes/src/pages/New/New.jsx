import { Container, Form } from './styles.js';
import { Header } from '../../components/Header/index.jsx';
import { Input } from '../../components/Input/index.jsx';
import { Textarea } from '../../components/TextArea/index.jsx';
import { NoteItem } from '../../components/Noteitem/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Button } from '../../components/Button/index.jsx';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { api } from '../../services/api.js';

import { useNavigate } from 'react-router-dom';

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  function handleNewLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink('');
  }

  function handleRemoveLink(linkDeleted) {
    setLinks(prevState => prevState.filter(link => link != linkDeleted));
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(TagDeleted) {
    setTags(prevState => prevState.filter(tag => tag != TagDeleted));
  }

  async function handleNewNote() {
    if (!title || !description) {
      return alert('título e/ou descição não podem estar vazios');
    }

    if (newLink) {
      return alert('nenhum link para adicionar');
    }
    if (newTag) {
      return alert('nenhuma tag para adicionar');
    }

    await api.post('/notes', {
      title,
      descriptions: description,
      tags,
      links
    });

    alert('nota criada com sucesso');
    navigate('/');
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Ciar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input
            placeholder="titulo"
            onChange={e => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => {
                  handleRemoveLink(link);
                }}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleNewLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                  key={String(index)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
                value={newTag}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
