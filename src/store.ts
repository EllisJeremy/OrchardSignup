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
  title: string;
  dueTime: string;
  description: string;

  setTitle: (title: string) => void;
  setDueTime: (title: string) => void;
  setDescription: (title: string) => void;
}


export const taskStore = create<taskStoreType>((set) => ({
  
  title: 'Title',
  dueTime: 'Due Time',
  description: 'Description',

  setTitle : (title: string) => set(() => ({title})),
  setDueTime : (dueTime: string) => set(() => ({dueTime})),
  setDescription : (description: string) => set(() => ({description})),
 

}));