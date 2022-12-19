import './Player.scss'
import {useEffect, useState} from 'react'
import iconPlay from '../../images/icon-play.svg'
import iconStop from '../../images/icon-stop.svg'

const Player = () => {
  const tracks = [
    {
      name: "Mekanın Sahibi",
      artist: "Norm Ender",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
      url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
      favorited: false
    },
    {
      name: "Everybody Knows",
      artist: "Leonard Cohen",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
      url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
      favorited: true
    },
    {
      name: "Extreme Ways",
      artist: "Moby",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
      url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
      favorited: false
    },
    {
      name: "Butterflies",
      artist: "Sia",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
      url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
      favorited: false
    },
    {
      name: "The Final Victory",
      artist: "Haggard",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
      url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
      favorited: true
    },
    {
      name: "Genius ft. Sia, Diplo, Labrinth",
      artist: "LSD",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
      url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
      favorited: false
    },
    {
      name: "The Comeback Kid",
      artist: "Lindi Ortega",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
      url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
      favorited: true
    },
    {
      name: "Overdose",
      artist: "Grandson",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
      url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
      favorited: false
    },
    {
      name: "Rag'n'Bone Man",
      artist: "Human",
      cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
      source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
      url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
      favorited: false
    }
  ]

  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState(null)
  const [currentSongIndex, setcurrentSongIndex] = useState(0)

  useEffect(() => {
    const audio = new Audio(tracks[currentSongIndex].source);
    setAudio(audio)

    return () => {
      audio.pause()
    }
  }, [])

  const play = () => {
    setIsPlaying(true);
    audio.play();
  }

  const pause = () => {
    setIsPlaying(false);
    audio.pause();
  }


  const playNext = () => {
    audio.pause()
    setIsPlaying(true)

    if (currentSongIndex < tracks.length - 1) {
      setcurrentSongIndex(currentSongIndex + 1)
      const nextAudio = new Audio(tracks[currentSongIndex].source);
      setAudio(nextAudio)
      nextAudio.play()
    }  else {
      setcurrentSongIndex(0)
      const nextAudio = new Audio(tracks[currentSongIndex].source);
      setAudio(nextAudio)
      nextAudio.play()
    }
  }

  const playPrev = () => {
    audio.pause()
    setIsPlaying(true)

    if (currentSongIndex >= 0) {
      setcurrentSongIndex(currentSongIndex - 1)
      const prevAudio = new Audio(tracks[currentSongIndex].source);
      setAudio(prevAudio)
      prevAudio.play()
    } else {
      setcurrentSongIndex(0)
      const prevAudio = Audio(tracks[currentSongIndex].source)
      setAudio(prevAudio)
      prevAudio.play()
    }
  }

  return (
    <div className='player'>
      <div className='album-cover'>
        { tracks[currentSongIndex].cover ? (
          <img src={tracks[currentSongIndex].cover} alt="album cover" />
        ) : (
          <img src={tracks[0].cover} alt="album cover" />
        )}
      </div>
      <div className='controllers'>
        <button onClick={playPrev}>Prev</button>
        {
          !isPlaying? (
            <button className='button-xl' onClick={play}>
              <img src={iconPlay} alt="play music" />
            </button>
          ) : (
            <button className='button-xl' onClick={pause}>
              <img src={iconStop} alt="play music" />
            </button>
          )
        }
        <button onClick={playNext}>Next</button>
      </div>
    </div>
  )
}

export default Player;
