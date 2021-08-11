import Card from 'View/card'
import Content from 'View/content'
import Desc from 'View/content/desc'
import Home from 'View/Home'
import Test from 'View/Test'

export interface RouterType {
  path: string
  component: (props: any) => JSX.Element
  exact?: boolean
  children?: RouterType[]
}

export const routes: RouterType[] = [
  {
    path: '/',
    component: Test
  },
  {
    path: '/card',
    exact: true,
    component: Card
  },
  {
    path: '/content/:id',
    component: Content,
    children: [
      {
        path: '/content/:id/desc',
        component: Desc
      }
    ]
  },
  {
    path: '/home',
    component: Home
  }
]
