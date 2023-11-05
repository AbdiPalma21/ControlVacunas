import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const EmployeeModel = types
  .model("Employee")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Employee extends Instance<typeof EmployeeModel> {}
export interface EmployeeSnapshotOut extends SnapshotOut<typeof EmployeeModel> {}
export interface EmployeeSnapshotIn extends SnapshotIn<typeof EmployeeModel> {}
export const createEmployeeDefaultModel = () => types.optional(EmployeeModel, {})
