import React from 'react'
import { render } from '@testing-library/react'
import Card from '../Card'
import '@testing-library/jest-dom/extend-expect'

test('Test Card', () => {
  // Comprobar el render
  // render(
  //   <Card href="https://nextjs.org/docs">
  //     <h3>Documentation &rarr;</h3>
  //     <p>Find in-depth information about Next.js features and API.</p>
  //   </Card>
  // )

  // testing-library/react nos provee un debug, vamos a obtenerlo e imprimir el componente en la consola
  const { container } = render(
    <Card href="https://nextjs.org/docs">
      <h3>Documentation &rarr;</h3>
      <p>Find in-depth information about Next.js features and API.</p>
    </Card>
  )
  // debug()
  //console.log(container.innerHTML)
  // vamos a hacer uso del inline snapshot para hacer match del componente de Card
  expect(container.firstChild).toMatchInlineSnapshot(`
    <a
      class="jsx-2179036115 card"
      href="https://nextjs.org/docs"
    >
      <h3>
        Documentation →
      </h3>
      <p>
        Find in-depth information about Next.js features and API.
      </p>
    </a>
  `)
})
