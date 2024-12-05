import DisplayClock from "./DisplayClock";

const Clock = () => {
  return <div className="container w-screen h-screen bg-black flex justify-center items-center p-4">
    <DisplayClock duration={3600} />
  </div>;
};

export default Clock;
