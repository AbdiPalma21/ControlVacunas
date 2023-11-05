import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { EemployeeStoreModel } from "./EemployeeStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  eemployeeStore: types.optional(EemployeeStoreModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
