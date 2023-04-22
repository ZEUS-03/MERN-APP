import UserItem from "./UserItem";

const UserList = (props) => {
  return (
    <div className="flex justify-center items-center">
      {props.items.length === 0 ? (
        <p>No user found!</p>
      ) : (
        props.items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              image={user.image}
              placeCount={user.places}
            />
          );
        })
      )}
    </div>
  );
};
export default UserList;
