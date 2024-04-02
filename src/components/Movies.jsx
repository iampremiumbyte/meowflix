import React from 'react'
import styles from './styles.module.css'

const Movies = () => {
  return (
    <>
    <div className={`flex flex-col ${styles.mwrap} m-auto p-auto`}>
        <div
            className={`flex overflow-x-scroll pb-10 hide-scroll-bar `}
        >
            <div
            className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
            >
            <div className="inline-block px-3">
                <img
                    src='/movies/blackcat.jpg'
                    className="w-32 h-32 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                </img>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Movies