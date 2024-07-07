import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marcosgray.png',
      name: 'Marcos Gray',
      role: 'Tech Lead'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCa'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date ('2024-06-29 23:03:00'),
    hasTag: [
      { type: 'tag', content: '#novoprojeto' },
      { type: 'tag', content: '#nlw' },
      { type: 'tag', content: '#rocketseat' }
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/CristianoDevGAVB.png',
      name: 'Cristiano Muroni',
      role: 'Chatbot Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCa'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date ('2024-07-02 15:03:00'),
    hasTag: [
      { type: 'tag', content: '#novoprojeto' },
      { type: 'tag', content: '#nlw' },
      { type: 'tag', content: '#rocketseat' }
    ]
  }
]

 export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper} >
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}


