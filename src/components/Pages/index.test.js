import React from 'react'
import { render } from '@testing-library/react'
import IndexPage from './index'

test('Test Card', () => {
  const { container } = render(<IndexPage />)
  expect(container.firstChild).toMatchInlineSnapshot(`
<div
  class="jsx-3621100902 container"
>
  <main
    class="jsx-3621100902"
  >
    <h1
      class="jsx-3621100902 title"
    >
      Bienvenidos a Estratek.
    </h1>
    <p
      class="jsx-3621100902 description"
    >
      Get started by editing 
      <code
        class="jsx-3621100902"
      >
        pages/index.js
      </code>
    </p>
    <div
      class="jsx-3621100902 grid"
    >
      <a
        class="jsx-2179036115 card"
        href="https://nextjs.org/docs"
      >
        <h3
          class="jsx-3621100902"
        >
          Documentation →
        </h3>
        <p
          class="jsx-3621100902"
        >
          Find in-depth information about Next.js features and API.
        </p>
      </a>
      <a
        class="jsx-2179036115 card"
        href="https://nextjs.org/learn"
      >
        <h3
          class="jsx-3621100902"
        >
          Learn →
        </h3>
        <p
          class="jsx-3621100902"
        >
          Learn about Next.js in an interactive course with quizzes!
        </p>
      </a>
      <a
        class="jsx-2179036115 card"
        href="https://github.com/vercel/next.js/tree/master/examples"
      >
        <h3
          class="jsx-3621100902"
        >
          Examples →
        </h3>
        <p
          class="jsx-3621100902"
        >
          Discover and deploy boilerplate example Next.js projects.
        </p>
      </a>
      <a
        class="jsx-2179036115 card"
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      >
        <h3
          class="jsx-3621100902"
        >
          Deploy →
        </h3>
        <p
          class="jsx-3621100902"
        >
          Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </a>
    </div>
  </main>
  <footer
    class="jsx-3621100902"
  >
    <a
      class="jsx-3621100902"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      rel="noopener noreferrer"
      target="_blank"
    >
      Powered by
       
      <img
        alt="Vercel Logo"
        class="jsx-3621100902 logo"
        src="/vercel.svg"
      />
    </a>
  </footer>
</div>
`)
})
