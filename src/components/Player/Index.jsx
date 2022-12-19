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
    console.log('Play prev')
  }

  return (
    <>
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
    </>
  )
}

export default Player;
