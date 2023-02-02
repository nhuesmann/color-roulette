import { Slot } from './Slot';

export const App = () => {
  return (
    <div className="h-screen w-screen bg-slate-800 flex justify-center items-center space-x-6">
      <Slot slot={0} />
      <Slot slot={1} />
      <Slot slot={2} />
      <Slot slot={3} />
      <Slot slot={4} />
      <Slot slot={5} />
    </div>
  );
};
