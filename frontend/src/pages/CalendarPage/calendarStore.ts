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
        return { month: 1, year: state.year + 1 };
      } else {
        return { month: state.month + 1 };
      }
    });
  },

  decrementMonth: () => {
    set((state) => {
      if (state.month === 1) {
        return { month: 12, year: state.year - 1 };
      } else {
        return { month: state.month - 1 };
      }
    });
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
    }));
  },
  openCloseLoginModal: () => {
    set((state) => ({
      loginModal: !state.loginModal,
    }));
  },
}));

//task class

export class TaskClass {
  public readonly id: number;
  public readonly date: string;
  public readonly title: string;
  public readonly startTime: string;
  public readonly endTime: string | null;
  public readonly description: string;
  public readonly color: string;
  public readonly type: string;
  public readonly repeat: string | null;
  public readonly ownerId: number | null;
  public readonly ownerEmail: string | null;
  public readonly ownerName: string | null;

  constructor(
    id: number,
    date: string,
    title: string,
    startTime: string,
    endTime: string | null,
    description: string,
    color: string,
    type: string,
    repeat: string | null,
    ownerId: number | null,
    ownerEmail: string | null,
    ownerName: string | null,
  ) {
    this.id = id;
    this.date = date;
    this.title = title;
    this.startTime = startTime;
    this.endTime = endTime;
    this.description = description;
    this.color = color;
    this.type = type;
    this.repeat = repeat;
    this.ownerId = ownerId;
    this.ownerEmail = ownerEmail;
    this.ownerName = ownerName;
  }
}

//task store

export interface taskStoreType {
  date: string;
  title: string;
  startHour: string;
  startMinute: string;
  endHour: string;
  endMinute: string;
  startMeridiem: string;
  endMeridiem: string;
  description: string;
  color: string;
  owner: number;
  type: string;
  repeat: string;

  taskError: string;
  taskDatabase: Map<string, TaskClass[]>;
  reload: number;

  setDate: (title: string) => void;
  setTitle: (setTime: string) => void;
  setStartHour: (startHour: string) => void;
  setStartMinute: (startMinute: string) => void;
  setEndHour: (endHour: string) => void;
  setEndMinute: (endMinute: string) => void;
  setStartMeridiem: (startMeridiem: string) => void;
  setEndMeridiem: (endMeridiem: string) => void;
  setDescription: (description: string) => void;
  setColor: (color: string) => void;
  setOwner: (owner: number) => void;
  setType: (type: string) => void;
  setRepeat: (repeat: string) => void;

  setTaskError: (type: string) => void;

  setTaskDatabase: (taskDatabase: Map<string, TaskClass[]>) => void;
  triggerReload: () => void;

  resetTaskVariables: () => void;
}

export const taskStore = create<taskStoreType>((set) => ({
  date: "",
  title: "",
  startHour: "",
  startMinute: "",
  endHour: "",
  endMinute: "",
  startMeridiem: "AM",
  endMeridiem: "AM",
  description: "",
  color: "red",
  owner: -1,
  type: "event",
  repeat: "null",

  taskError: "",

  taskDatabase: new Map(),
  reload: 0,

  setDate: (date: string) => set(() => ({ date })),
  setTitle: (title: string) => set(() => ({ title })),
  setStartHour: (startHour: string) => set(() => ({ startHour })),
  setStartMinute: (startMinute: string) => set(() => ({ startMinute })),
  setEndHour: (endHour: string) => set(() => ({ endHour })),
  setEndMinute: (endMinute: string) => set(() => ({ endMinute })),
  setStartMeridiem: (startMeridiem: string) => set(() => ({ startMeridiem })),
  setEndMeridiem: (endMeridiem: string) => set(() => ({ endMeridiem })),
  setDescription: (description: string) => set(() => ({ description })),
  setColor: (color: string) => set(() => ({ color })),
  setOwner: (owner: number) => set(() => ({ owner })),
  setType: (type: string) => set(() => ({ type })),
  setRepeat: (repeat: string) => set(() => ({ repeat })),

  setTaskError: (taskError: string) => set(() => ({ taskError })),

  setTaskDatabase: (taskDatabase: Map<string, TaskClass[]>) => set(() => ({ taskDatabase })),
  triggerReload: () => set((state) => ({ reload: state.reload + 1 })),

  resetTaskVariables: () =>
    set(() => {
      return {
        title: "",
        description: "",
        color: "red",
        type: "event",
        repeat: "null",
        owner: -1,
        startHour: "",
        startMinute: "",
        endHour: "",
        endMinute: "",
        startMeridiem: "AM",
        endMeridiem: "AM",
      };
    }),
}));
