import { Store } from './store';
import { Action, ActionType } from './action';

export class reducer {
    public static reduce(oldStore: Store, action: Action): Store {
        const newStore = { ...oldStore };
        switch (action.type) {
            case ActionType.GetAllEmployees:
                newStore.employees = action.payload;
                break;

            case ActionType.AddEmployee:
                newStore.employees.push(action.payload);
                break;

            case ActionType.UpdateEmployee:
                for (let i = 0; i < newStore.employees.length; i++) {
                    if (newStore.employees[i].id === action.payload.id) {
                        newStore.employees[i] = action.payload;
                        break;
                    }
                }
                break;

            case ActionType.DeleteEmployee:
                for (let i = 0; i < newStore.employees.length; i++) {
                    if (newStore.employees[i].id === action.payload.id) {
                        newStore.employees.splice(i, 1);
                        break;
                    }
                }
                break;
        }
        return newStore;
    }
}