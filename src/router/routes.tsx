import type { JSX } from 'react'
import type { RouteObject } from 'react-router-dom'
import DefaultLayout from '../layout/DefaultLayout'
import { siteConfig } from '../config/siteConfig'

import MainPage from '../pages/MainPage'
import UnderConstructionPage from '../pages/UnderConstructionPage'

const pageComponents: Record<string, JSX.Element> = {
  MainPage: <MainPage />,
  OurRoomsPage: <UnderConstructionPage />,
  AboutUsPage: <UnderConstructionPage />,
  DigitalNomadsPage: <UnderConstructionPage />,
  ContactUsPage: <UnderConstructionPage />,
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: siteConfig.navigation.map((route) => ({
      path: route.path === '/' ? undefined : route.path.replace('/', ''),
      index: route.path === '/',
      element: pageComponents[route.component],
    })),
  },
]
