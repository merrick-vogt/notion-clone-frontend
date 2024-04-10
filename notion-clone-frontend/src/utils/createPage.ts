import { nanoid } from "nanoid"
import { Page } from "./types"

export const createPage = () => {
    const slug = nanoid()
    const id = nanoid()
  
  
    const page: Page = {
      id,
      slug,
      title: 'Default Title',
      cover: 'ztm-notes.png',
      nodes: []
    }
  
      return page
  }