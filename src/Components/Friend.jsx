/* eslint-disable react/prop-types */
export function Friend({ friend, setSplitWith, setOpenSplit, setPalBal }) {
  function handleSelect(name, balance) {
    setOpenSplit(true);
    setSplitWith(name);
    setPalBal(balance);
  }
  return (
    <div className="flex bg-red-300 w-[400px] p-3">
      <img src={friend.image} alt="image" className="size-10 rounded-full" />
      <div className="ml-5 w-[15em]">
        <h2>{friend.name}</h2>
        <p>
          {friend.balance < 0 && `You owe ${friend.name} ${friend.balance}`}
          {friend.balance > 0 && `${friend.name} owes you ${friend.balance}`}
          {friend.balance === 0 && `You and ${friend.name} are even`}
        </p>
      </div>
      <button
        className="bg-orange-200 h-10 w-20 rounded-md"
        onClick={() => handleSelect(friend.name, friend.balance)}
      >
        Select
      </button>
    </div>
  );
}
