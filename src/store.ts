import { create } from "zustand";




//date store

export interface dateStoreType{
 
  
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
  
  setCurrentDay : (currentDay: number) => set(() => ({currentDay})),
  

  incrementMonth: () => {set((state) => {
    if (state.month === 12) {
      return { month: 1, year: state.year + 1,};
    } 

    else {
      return { month: state.month + 1,};
    }
    })},

  decrementMonth: () => {set((state) => {
    if (state.month === 1) {
      return { month: 12, year: state.year - 1,};
    } 

    else {
      return { month: state.month - 1,};
      }
    })},




}));




//modal store

export interface modalStoreType{
 
  taskModal: boolean;
  
  openCloseTaskModal: () => void;
}

export const modalStore = create<modalStoreType>((set) => ({
  
  taskModal: false,
 

  openCloseTaskModal: () => {set((state) => ({
    taskModal: !state.taskModal,

    }))},

}));

//task class

class TaskClass{
  public readonly date: string;
  public readonly title: string;
  public readonly dueTime: string;
  public readonly description: string;
  public readonly color: string;
  public readonly owner: string;

  constructor(date: string, title: string, dueTime: string, description: string, color: string, owner: string){
    this.date = date;
    this.title = title;
    this.dueTime = dueTime;
    this.description = description;
    this.color = color;
    this.owner = owner;
  }
}


//task store

export interface taskStoreType{
  admin: boolean;

  date: string;
  title: string;
  dueTime: string;
  description: string;
  color: string;
  owner: string;

  taskDatabase: Map<string, TaskClass[]>;

  setAdmin: () => void;

  setDate: (title: string) => void;
  setTitle: (setTime: string) => void;
  setDueTime: (dueTime: string) => void;
  setDescription: (description: string) => void;
  setColor: (dueTime: string) => void;
  setOwner: (description: string) => void;

  resetTaskVariables: () => void;
  setTaskDatabase: (date: string, title: string, dueTime: string, description: string, color: string, owner: string) => void;
  removeTask: (key: string, taskIndex: number) => void;
}


export const taskStore = create<taskStoreType>((set) => ({
  admin: true,

  date: 'date',
  title: 'Title',
  dueTime: 'Due Time',
  description: 'Description',
  color: 'Red',
  owner: 'owner',

  taskDatabase: new Map(),

  setAdmin: () => set((state) => ({ admin: !state.admin })),

  setDate : (date: string) => set(() => ({date})),
  setTitle : (title: string) => set(() => ({title})),
  setDueTime : (dueTime: string) => set(() => ({dueTime})),
  setDescription : (description: string) => set(() => ({description})),
  setColor : (color: string) => set(() => ({color})),
  setOwner : (owner: string) => set(() => ({owner})),

  resetTaskVariables: ( ) => 
    set(() => {
      
  
      return { title: '',dueTime: '',description: '', color: 'Red'};
    }),
 
  setTaskDatabase: ( date: string, title: string , dueTime: string, description: string, color: string, owner: string) => 
    set((state) => {
      if (title === ''){
        title = 'No Title'
      }
      // Create the new task entry
      const task = new TaskClass(date, title, dueTime, description, color, owner);

      // Create a new Map to ensure immutability
      const updatedDatabase = new Map(state.taskDatabase);

      // Get the existing tasks for the date or initialize with an empty array
      const existingTasks = updatedDatabase.get(date) || [];

      updatedDatabase.set(date, [...existingTasks, task]);
  
      return { taskDatabase: updatedDatabase  };
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