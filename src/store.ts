import { create } from "zustand";




//date store

export interface dateStoreType {


  currentDay: number;
  month: number;
  year: number;

  setCurrentDay: (currentDay: number) => void;
  incrementMonth: () => void;
  decrementMonth: () => void;
}

const now = new Date();

export const dateStore = create<dateStoreType>((set) => ({

  currentDay: 1,
  month: now.getMonth() + 1,
  year: now.getFullYear(),

  setCurrentDay: (currentDay: number) => set(() => ({ currentDay })),


  incrementMonth: () => {
    set((state) => {
      if (state.month === 12) {
        return { month: 1, year: state.year + 1, };
      }

      else {
        return { month: state.month + 1, };
      }
    })
  },

  decrementMonth: () => {
    set((state) => {
      if (state.month === 1) {
        return { month: 12, year: state.year - 1, };
      }

      else {
        return { month: state.month - 1, };
      }
    })
  },




}));




//modal store

export interface modalStoreType {

  taskModal: boolean;
  loginModal: boolean;

  openCloseTaskModal: () => void;
  openCloseLoginModal: () => void;
}

export const modalStore = create<modalStoreType>((set) => ({

  taskModal: false,
  loginModal: false,


  openCloseTaskModal: () => {
    set((state) => ({
      taskModal: !state.taskModal,

    }))
  },
  openCloseLoginModal: () => {
    set((state) => ({
      loginModal: !state.loginModal,

    }))
  },

}));

//task class

class TaskClass {
  public readonly date: string;
  public readonly title: string;
  public readonly dueTime: string;
  public readonly description: string;
  public readonly color: string;
  public owner: string;
  public readonly signup: boolean;

  constructor(date: string, title: string, dueTime: string, description: string, color: string, owner: string, event: boolean) {
    this.date = date;
    this.title = title;
    this.dueTime = dueTime;
    this.description = description;
    this.color = color;
    this.owner = owner;
    this.signup = event;
  }
}


//task store

export interface taskStoreType {
  admin: boolean;

  date: string;
  title: string;
  hour: string;
  minute: string;
  meridiem: string;
  description: string;
  color: string;
  owner: string;
  signup: boolean;
  render: boolean;

  taskDatabase: Map<string, TaskClass[]>;



  setAdmin: () => void;

  setDate: (title: string) => void;
  setTitle: (setTime: string) => void;
  setHour: (hour: string) => void;
  setMinute: (minute: string) => void;
  setMeridiem: (meridiem: string) => void;
  setDescription: (description: string) => void;
  setColor: (dueTime: string) => void;
  setOwner: (description: string) => void;
  setSignup: () => void;
  setRender: () => void;

  resetTaskVariables: () => void;
  setTaskDatabase: (date: string, title: string, dueTime: string, description: string, color: string, owner: string, event: boolean) => void;
  removeTask: (key: string, taskIndex: number) => void;
}


export const taskStore = create<taskStoreType>((set) => ({
  admin: true,

  date: '',
  title: '',
  hour: '12',
  minute: '00',
  meridiem: 'AM',
  description: '',
  color: 'Red',
  owner: '',
  signup: false,
  render: true,

  taskDatabase: new Map(),



  setAdmin: () => set((state) => ({ admin: !state.admin })),

  setDate: (date: string) => set(() => ({ date })),
  setTitle: (title: string) => set(() => ({ title })),
  setHour: (hour: string) => set(() => ({ hour })),
  setMinute: (minute: string) => set(() => ({ minute })),
  setMeridiem: (meridiem: string) => set(() => ({ meridiem })),
  setDescription: (description: string) => set(() => ({ description })),
  setColor: (color: string) => set(() => ({ color })),
  setOwner: (owner: string) => set(() => ({ owner })),
  setSignup: () => set((state) => ({ signup: !state.signup })),
  setRender: () => set((state) => ({ render: !state.render })),

  resetTaskVariables: () =>
    set(() => {


      return { title: '', dueTime: '', description: '', color: 'Red', signup: false };
    }),

  setTaskDatabase: (date: string, title: string, dueTime: string, description: string, color: string, owner: string, event: boolean) =>
    set((state) => {
      if (title === '') {
        title = 'No Title'
      }
      // Create the new task entry
      const task = new TaskClass(date, title, dueTime, description, color, owner, event);

      // Create a new Map to ensure immutability
      const updatedDatabase = new Map(state.taskDatabase);

      // Get the existing tasks for the date or initialize with an empty array
      const existingTasks = updatedDatabase.get(date) || [];

      updatedDatabase.set(date, [...existingTasks, task]);

      return { taskDatabase: updatedDatabase };
    }),

  removeTask: (key: string, taskIndex: number) =>
    set((state) => {
      const updatedDatabase = new Map(state.taskDatabase);
      const tasks = updatedDatabase.get(key)!;

      updatedDatabase.set(
        key,
        tasks.filter((_, index) => index !== taskIndex)
      );

      return { taskDatabase: updatedDatabase };
    })

}));