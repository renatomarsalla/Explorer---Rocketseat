import { Container, Content } from './styles';
import { Header } from '../../components/Header/index.jsx';
import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi';
import { Tag } from '../../components/Tags/index.jsx';
import { Buttontext } from '../../components/ButtonText/index.jsx';

import { Link, useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth.jsx';

export function PreviewMovie() {
  const [data, setData] = useState(null);
  const params = useParams();

  const { user } = useAuth();

  const navigate = useNavigate();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  async function handleRemoveNote() {
    const confirm = window.confirm('Deseja mesmo excluir a nota?');
    if (confirm) {
      await api.delete(`/movie_notes/${params.id}`);
      // navigate('/');
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
      console.log(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <div className="page">
          <div className="back">
            <FiArrowLeft />
            <Link to="/">Voltar</Link>
          </div>
          <Content>
            <div className="title">
              <h2>{data.title}</h2>
              <div className="star">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>
            </div>
            <div className="by">
              <div className="author">
                <img src={avatarURL} alt="foto de perfil" />
                <h3>Por {user.name}</h3>
              </div>
              <div className="date">
                <FiClock />

                <h3>{data.created_at}</h3>
              </div>
            </div>
            {data.tag && (
              <div className="tags">
                {data.tag.map(tag => (
                  <Tag title={tag.name} />
                ))}
              </div>
            )}
            <div className="resume">
              <p>{data.description}</p>
            </div>

            <div className="deleteNote">
              <Buttontext title="excluir" onClick={handleRemoveNote} />
            </div>
          </Content>
        </div>
      )}
    </Container>
  );
}
