'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [level, setLevel] = useState(1);
  const player = useRef();

  const handlePlay = () => {
    setPlaying(true);
    player.current.play();
  }

  useEffect(()=> {
    setTimeout(()=> setLoaded(true), 3000)
  }, [])

  return (
      <div className="relative w-full h-full bg-black ">
        <div className={`${level === 1 ? 'flex' : 'hidden' } overlay absolute flex flex-col gap-2 items-center justify-center w-screen h-screen bg-black`}>
        {
        !playing &&
          
            loaded
            ?
              <button className='p-4 px-6 rounded-lg bg-red-500 text-white font-bold'
              onClick={handlePlay}
              >Enter</button>
            :<>
            <img src='/logo-desktop.png' className='hidden max-w-2xl sm:block'/>
            <img src='/logo-mobile.png' className='sm:hidden w-3/4 block'/>
            <img src="/roll.png" alt="" className={`${styles.spinner} w-20`} />
            </>
          
        }
        <video 
        ref={player}
        src='/MeowFlix_Intro.mov'
        playsInline 
        onEnded={()=> setLevel(2)}
        className={`${playing ? 'block' : 'hidden'} ${styles.video} absolute w-screen h-screen`} />
        </div>

        {/* profiles */}
        <div className={`${level === 2 ? 'flex' : 'hidden' } overlay absolute flex flex-col gap-2 items-center justify-center w-screen h-screen bg-black`}>
          <div className="container">
            <h2>Who's Watching</h2>
            <div className="flex justify-center gap-8 sm:justify-between flex-wrap">
              {/* item */}
              <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={()=> setLevel(3)}>
                <img src="/page2/pfp1.jpg" className={styles.profileImg} alt="" srcset="" />
                <p className='text-white font-medium'>Whiskers</p>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={()=> setLevel(3)}>
                <img src="/page2/pfp2.jpg" className={styles.profileImg} alt="" srcset="" />
                <p className='text-white font-medium'>Kittycat</p>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={()=> setLevel(3)}>
                <img src="/page2/pfp3.jpg" className={styles.profileImg} alt="" srcset="" />
                <p className='text-white fon-medium'>Meowers</p>
              </div>
            </div>
          </div>
        </div>

        {/* catalogue */}
        <div className={`${level === 3 ? 'flex' : 'hidden' } overlay absolute flex flex-col gap-2 bg-black`}>
          <div className={`${styles.hero}`}>
            <img src='/Banner_3.png' className='w-full'/>
          </div>
            <h2 className='text-white font-lg my-4 ml-4 font-bold'>Trending Now</h2>
            <div className={`${styles.moviesWrap}`}>
              <img src='/movies/blackcat.jpg' className={`pl-15 rounded-md ${styles.movieImg}`}/>
              <img src='/movies/cat of steel.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/cat_mar.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/catbox.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/catrix.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/fright.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/karatecat.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/kittynic.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/meauleficent.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/meowserables.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/Nastyfurious.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/planet of cats.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/robocat.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/silence.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/the_clat.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/theboring.jpg' className={`rounded-md ${styles.movieImg}`}/>
              <img src='/movies/the-lord-of-the-string-photo-u1.jpg' className={`rounded-md ${styles.movieImg}`}/>
            </div>
        </div>

        <div className={`${level === 3 ? 'flex' : 'hidden' } sm:ml-4 links absolute h-screen left-0 flex justify-center items-center`}>
          <div className="flex flex-col justify-center items-center gap-4 bg-black p-4 rounded-lg">
            <a href="">
              <img src="/twitter.png" className='w-6 mb-8' alt="" srcset="" />
            </a>
            <a href="">
              <img src="/telegram.png" className='w-6' alt="" srcset="" />
            </a>
          </div>
        </div>

      </div>
  )
}

export default Home