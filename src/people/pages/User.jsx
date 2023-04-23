import UserList from "../components/UsersList";

const User = () => {
  const USER = [
    {
      id: "u1",
      name: "Mia Schzwegar",
      places: 3,
      image: "https://cdn2.sexnaked.net/img/256/256734.jpg",
    },
  ];
  return <UserList items={USER} />;
};
export default User;
