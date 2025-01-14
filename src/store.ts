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


//task store

export interface taskStoreType{
  date: string;
  title: string;
  dueTime: string;
  description: string;
  color: string;
  owner: string;

  taskDatabase: string[][];

  setDate: (title: string) => void;
  setTitle: (setTime: string) => void;
  setDueTime: (dueTime: string) => void;
  setDescription: (description: string) => void;
  setColor: (dueTime: string) => void;
  setOwner: (description: string) => void;

  setTaskDatabase: (date: string, title: string, dueTime: string, description: string, color: string) => void;
  
}


export const taskStore = create<taskStoreType>((set) => ({
  title: 'Title',
  date: 'date',
  dueTime: 'Due Time',
  description: 'Description',
  color: 'Red',
  owner: 'owner',

  taskDatabase: [['title','date', 'dueTime', 'description' , 'color', 'owner']],

  setTitle : (title: string) => set(() => ({title})),
  setDate : (date: string) => set(() => ({date})),
  setDueTime : (dueTime: string) => set(() => ({dueTime})),
  setDescription : (description: string) => set(() => ({description})),
  setColor : (color: string) => set(() => ({color})),
  setOwner : (owner: string) => set(() => ({owner})),
 
  setTaskDatabase: ( title: string, date: string, dueTime: string, description: string, color: string) => 
    set((state) => {
      const newTask = [title, date, dueTime, description, color, 'blank for now'];
      const updatedTaskDatabase = [...state.taskDatabase, newTask];
  
      return { taskDatabase: updatedTaskDatabase };
    }),

}));