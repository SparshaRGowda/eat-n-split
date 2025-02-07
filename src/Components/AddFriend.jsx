export function AddFriend({
  onAdd,
  name,
  image,
  setName,
  setImage,
  addFriend,
}) {
  return (
    <div className="bg-red-300 w-[300px] h-[200px]">
      <div className="flex flex-col m-10">
        <div>
          <label>Friend name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
      </div>
      <button
        className="bg-orange-200 h-8 w-20 rounded-md m-2"
        onClick={addFriend}
      >
        Add
      </button>
      <button
        className="bg-orange-200 h-8 w-20 rounded-md m-2"
        onClick={() => onAdd(false)}
      >
        Close
      </button>
    </div>
  );
}
