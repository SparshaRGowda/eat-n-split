import { FriendsList } from "./FriendsList";

function App() {
  const friends = [
    {
      name: "Clark",
      image: "https://i.pravatar.cc/150?img=57",
      balance: -7,
    },
    {
      name: "Sarah",
      image: "https://i.pravatar.cc/150?img=1",
      balance: 20,
    },
    {
      name: "Anthony",
      image: "https://i.pravatar.cc/150?img=12",
      balance: 0,
    },
  ];

  return (
    <>
      <FriendsList friends={friends} />
    </>
  );
}
export default App;
