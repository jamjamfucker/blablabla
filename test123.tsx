import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => (
  <div className="h-screen w-screen bg-black text-purple-600 font-mono flex flex-col justify-between items-center p-4">
    <pre className="text-xs sm:text-sm md:text-base">
      {`
                                 .....
                         .■■■■■■■■■■■■■■■■■.     .■■■■.
                    .■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
                 .■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
               .■■"  '■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
              .■     .■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
             .■     .■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
            .■     .■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
           .■     .■■"        "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
          .■     .■"            "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
         .■     .■                "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
        .■     .■                   "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
       .■     .■                      "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
      .■     .■                         "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
     .■     .■                            "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
    .■     .■                               "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
   .■     .■                                  "■■■■■■■■■■■■■■■■■■■■■■■■■■■■.
  .■     .■                                     "■■■■■■■■■■■■■■■■■■■■■■■■■■■.
 .■     .■                                        "■■■■■■■■■■■■■■■■■■■■■■■■■■.
.■     .■                                           "■■■■■■■■■■■■■■■■■■■■■■■■■.
■"    .■"                                              "■■■■■■■■■■■■■■■■■■■■■■■■
     .■"                                                 "■■■■■■■■■■■■■■■■■■■■■■
    .■"                                                    "■■■■■■■■■■■■■■■■■■■■
      `}
    </pre>
    <div className="w-64 h-2 bg-purple-900 relative">
      <motion.div
        className="h-full bg-purple-600"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 3 }}
      />
    </div>
    <div>Loading ...</div>
  </div>
)

const MainPage = () => (
  <div className="h-screen w-screen bg-black text-purple-600 font-mono flex flex-col justify-center items-center">
    <h1 className="text-6xl sm:text-7xl md:text-8xl mb-8 font-bold" style={{ fontFamily: 'Press Start 2P, cursive' }}>SANZU</h1>
    <div className="flex flex-col items-center">
      <p className="mb-4">Follow me on:</p>
      <div className="space-y-2">
        <a href="#" className="block hover:text-purple-400 transition-colors">Discord</a>
        <a href="#" className="block hover:text-purple-400 transition-colors">GitHub</a>
        <a href="#" className="block hover:text-purple-400 transition-colors">Instagram</a>
        <a href="#" className="block hover:text-purple-400 transition-colors">TryHackMe</a>
      </div>
    </div>
    <p className="mt-8 italic">"Cogito, ergo sum."</p>
  </div>
)

export default function Component() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-screen w-screen overflow-hidden">
      {loading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MainPage />
        </motion.div>
      )}
    </div>
  )
}