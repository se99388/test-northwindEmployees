export enum ActionType {
    GetAllEmployees,
    AddEmployee,
    UpdateEmployee,
    DeleteEmployee
}

export interface Action {
    type: ActionType,
    payload?: any
}