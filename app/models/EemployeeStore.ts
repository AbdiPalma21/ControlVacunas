import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const EemployeeStoreModel = types
  .model("EemployeeStore")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface EemployeeStore extends Instance<typeof EemployeeStoreModel> {}
export interface EemployeeStoreSnapshotOut extends SnapshotOut<typeof EemployeeStoreModel> {}
export interface EemployeeStoreSnapshotIn extends SnapshotIn<typeof EemployeeStoreModel> {}
export const createEemployeeStoreDefaultModel = () => types.optional(EemployeeStoreModel, {})
