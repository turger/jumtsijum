import React, { useState } from 'react';
import { addNewSong } from './services/firebase';
import './CreateSong.css';
import './Songs.css';
import Button from './Components/Button';

const CreateSong = ({ setCreateMode }) => {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [lyrics, setLyrics] = useState([]);

  const reset = () => {
    setSong('');
    setArtist('');
    setLyrics([]);
  };

  const addSong = (event) => {
    event.preventDefault();
    const newSong = {
      artist: artist,
      song: song,
      lyrics: lyrics,
    };
    addNewSong(newSong);
    reset();
  };

  return (
    <div className="create-song-form">
      <form onSubmit={addSong}>
        <p>Lisää uusi kappale</p>
        <div className="form-contents">
          <div>
            <p className="form-text">Artisti:</p>
            <input
              value={artist}
              onChange={(event) => setArtist(event.target.value)}
              className="input-artist"
            />
          </div>
          <div>
            <p className="form-text">Kappale:</p>
            <input
              value={song}
              onChange={(event) => setSong(event.target.value)}
              className="input-song"
            />
          </div>
        </div>
        <div className="form-actions">
          <div>
            Sanat: <LyricsTool lyrics={lyrics} setLyrics={setLyrics} />
          </div>
          <div>
            <Button
              onClick={() => setCreateMode(false)}
              title="Peruuta"
              variant="text"
            />
            <Button title="Tallenna" />
          </div>
        </div>
      </form>
    </div>
  );
};

const LyricsTool = ({ lyrics, setLyrics }) => {
  return (
    <div className="lyric-container">
      {lyrics?.map((lyric, index) => (
        <LyricTag key={lyric} index={index} lyric={lyric} />
      ))}
      <EditableLyricTag key="lyrictag" lyrics={lyrics} setLyrics={setLyrics} />
    </div>
  );
};

const LyricTag = ({ lyric, index }) => {
  //const [removeVisible, setRemoveVisible] = useState(false)

  return (
    <div
      //onMouseOver={()=>setRemoveVisible(true)}
      //onMouseOut={()=>setRemoveVisible(false)}
      className="lyric-tag"
    >
      <div>{lyric}</div>
      <RemoveMarker />
    </div>
  );
};

const EditableLyricTag = ({ lyrics, setLyrics }) => {
  const [inputValue, setInputValue] = useState('');

  const saveOnEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setLyrics([...lyrics, event.target.value]);
      setInputValue('');
    }
  };

  return (
    <div className="lyric-tag-editable">
      <input
        style={{ width: `${Math.max(inputValue.length, 5)}ch` }}
        onKeyDown={saveOnEnter}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="kirjoita"
      />
    </div>
  );
};

const RemoveMarker = () => {
  return <div className="remove-marker">X</div>;
};

export default CreateSong;
