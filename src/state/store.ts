import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IActivity } from "../common/types";

interface CurrentActivityState {
  activity: IActivity | null;
  fetchActivity: () => Promise<void>;
}

export const useCurrentActivityStore = create<CurrentActivityState>((set) => ({
  activity: null,
  fetchActivity: async () => {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    set({ activity: await response.json() });
  },
}));
