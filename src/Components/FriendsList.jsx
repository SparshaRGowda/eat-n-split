/* eslint-disable react/prop-types */
import { useState } from "react";
import { SplitBill } from "./SplitBill";
import { AddFriend } from "./AddFriend";
import { Friend } from "./Friend";

export function FriendsList({ friends }) {
  const [friendsList, setFriendsList] = useState(friends);
  const [addFriend, setAddFriend] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [openSplit, setOpenSplit] = useState(false);
  const [splitWith, setSplitWith] = useState("");
  const [palBal, setPalBal] = useState("");

  function handleAddFriend() {
    const newFriend = { name: name, image: image, balance: 0 };
    setFriendsList([...friendsList, newFriend]);
    setName("");
    setImage("");
  }

  function handleEditBalance(newBal) {
    setFriendsList((friendsList) =>
      friendsList.map((friend) =>
        friend.name === splitWith ? { ...friend, balance: newBal } : friend
      )
    );
    setOpenSplit(false);
  }

  return (
    <div className="flex gap-5 mt-10 ml-10">
      <div>
        {friendsList.map((friend, index) => (
          <Friend
            key={index}
            friend={friend}
            setSplitWith={setSplitWith}
            setOpenSplit={setOpenSplit}
            setPalBal={setPalBal}
          />
        ))}

        <button
          className="bg-orange-200 h-8 w-20 rounded-md m-2"
          onClick={() => setAddFriend(true)}
        >
          Add
        </button>
        {addFriend === true && (
          <AddFriend
            onAdd={setAddFriend}
            name={name}
            setName={setName}
            setImage={setImage}
            image={image}
            addFriend={handleAddFriend}
          />
        )}
      </div>
      {openSplit === true && (
        <SplitBill
          splitWith={splitWith}
          setPalBal={setPalBal}
          handleEditBalance={handleEditBalance}
          palBal={palBal}
          setOpenSplit={setOpenSplit}
        />
      )}
    </div>
  );
}
