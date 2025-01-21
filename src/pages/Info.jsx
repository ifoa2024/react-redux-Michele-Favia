import React, { useEffect, useState } from 'react';

function Info() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Usare fetch per fare la richiesta HTTP
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nella risposta dell’API');
        }
        return response.json(); // Convertire la risposta in JSON
      })
      .then((data) => {
        setPosts(data); // Salvare i dati nell'array posts
        setLoading(false); // Terminare il caricamento
      })
      .catch((err) => {
        setError('Errore durante il caricamento dei dati.'); // Gestire l'errore
        setLoading(false); // Terminare il caricamento
      });
  }, []); // L'array vuoto garantisce che useEffect venga eseguito solo una volta

  return (
    <div>
      <h1>Informazioni</h1>
      {loading && <p>Caricamento...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
