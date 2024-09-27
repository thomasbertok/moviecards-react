import { create } from "zustand";

const useModalStore = create((set) => ({
  isOpen: false,
  content: null,
  setContent: (value) => set({ modalContent: value }),
  openMovieModal: (value) => set({ isOpen: true }),
  closeMovieModal: () => set({ isOpen: false, content: null }),
  setMovieModal: (content) => {
    set({
      content: content,
      isOpen: true,
    });
  },
}));

export default useModalStore;
