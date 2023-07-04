import { create } from "zustand";

type CategoryStore = {
  news: any[];
  bbc: any[];
  cnn: any[];
  nbc: any[];
  trending:any[];
  setNews: (news: any[]) => void;
  setTrending: (news: any[]) => void;
  setBBC: (news: any[]) => void;
  setCNN: (news: any[]) => void;
  setNBC: (news: any[]) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  news: [],
  bbc: [],
  cnn: [],
  nbc: [],
  trending:[],
  setNews: (news) => set({ news }),
  setBBC: (bbc) => set({ bbc }),
  setCNN: (cnn) => set({ cnn }),
  setNBC: (nbc) => set({ nbc }),
  setTrending:(trending)=>set({trending})
}));
