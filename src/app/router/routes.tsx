import { LayoutPage, NotFoundPage, PokemonsPage } from "@/pages"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LayoutPage,
    children: [
      {
        index: true,
        Component: PokemonsPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
])
