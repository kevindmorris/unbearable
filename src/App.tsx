import { useCurrentActivityStore } from "./state/store";

export default function App() {
  const activity = useCurrentActivityStore((state) => state.activity);
  const fetchActivity = useCurrentActivityStore((state) => state.fetchActivity);

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <button onClick={fetchActivity} className="border rounded p-2">
        Find Activity
      </button>
      <p>{JSON.stringify(activity)}</p>
    </div>
  );
}
