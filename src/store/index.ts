import { init, Models, RematchDispatch, RematchRootState } from '@rematch/core'
import app from 'Src/models/app'
import sys from 'Src/models/sys'

export interface RootModel extends Models<RootModel> {
  app: typeof app
  sys: typeof sys
}

const rootModel: RootModel = { app, sys }
const store = init({
  models: rootModel
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>

export default store
