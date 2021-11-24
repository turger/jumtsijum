import React, { useState, useEffect } from 'react';
import { getSongsRef, uploadBaseSongs, removeSong } from './services/firebase';
import _ from 'lodash';
import CreateSong from './CreateSong';
import Button from './Components/Button';
import './Songs.css';

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [createMode, setCreateMode] = useState(false);

  useEffect(() => {
    const listener = getSongsRef().on('value', (snapshot) => {
      if (snapshot.val()) {
        setSongs(
          _.orderBy(Object.values(snapshot.val()), (song) => song.song, 'asc')
        );
      } else {
        setSongs([]);
      }
    });

    return () => getSongsRef().off('value', listener);
  }, []);

  const resetSongsInDB = () => {
    if (
      window.confirm(
        'Haluatko varmasti yliajaa nykyiset kappaleet oletuskappaleilla?'
      )
    ) {
      uploadBaseSongs();
    }
  };

  return (
    <>
      <div className="table-container">
        <>
          {createMode ? (
            <div className="create-mode">
              <CreateSong setCreateMode={setCreateMode} />
            </div>
          ) : (
            <div className="create-button">
              <Button
                onClick={() => setCreateMode(true)}
                title="Lisää uusi kappale"
              />
            </div>
          )}
        </>
        <table>
          {songs && songs.length > 0 && (
            <thead>
              <tr className="songrow">
                <td>Kappale</td>
                <td>Artisti</td>
                <td>Sanat</td>
                <td>🗑️</td>
              </tr>
            </thead>
          )}
          <tbody>
            {songs && songs.length > 0 ? (
              songs.map((song) => <Song key={song.id} song={song} />)
            ) : (
              <div className="no-songs">
                <p>Ei kappaleita</p>
              </div>
            )}
          </tbody>
        </table>
      </div>
      <div className="total-songs">
      <p>Yhteensä {songs.length} kappaletta</p>
      <button className="dangerzone" onClick={resetSongsInDB}>
        Nollaa &amp; palauta oletuskappaleet
      </button>
      </div>
    </>
  );
};

const Song = ({ song }) => {
  const remove = (id) => {
    if (window.confirm('Haluatko varmasti poistaa tämän kappaleen?')) {
      removeSong(id);
    }
  };

  return (
    <tr className="songrow">
      <td>{song.song}</td>
      <td>{song.artist}</td>
      <td className="lyric-container">
        {song.lyrics?.length > 0 &&
          song.lyrics.map((lyric, i) => (
            <Lyric key={`${song}-${lyric}-${i}`} word={lyric} />
          ))}
      </td>
      <td className="clickable-icon" onClick={() => remove(song.id)}>
        🗑️
      </td>
    </tr>
  );
};

const Lyric = ({ word }) => <div className="lyric-tag">{word}</div>;

export default Songs;
