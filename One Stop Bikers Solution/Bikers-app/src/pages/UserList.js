
import { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [userList, setUserList] = useState([]);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getAllUserAction();
  }, []);

 
  const getAllUserAction = async () => {
    try {
      const url = "http://localhost:9090/get-user";
      const res = await fetch(url);
      const list = await res.json();
      setUserList(list);
    } catch (error) {
      console.error(error);
    }
  };

  // const selectUser = (id) => {
  //   let item = users.find((user) => user.id === id);
  //   setName(item.name);
  //   setEmail(item.email);
  //   setMobile(item.mobile);
  //  // setPassword(item.password);
  // };

  const updateUser = async (id) => {
    try {
      console.log("i m here");

      const item = { name, mobile, email, password };
      console.log("item", item);
      console.warn("item", item);
      const response = await axios.put(`http://localhost:9090/${id}`, item);
      console.log("item", item);
      console.warn(response.data);
      getAllUserAction();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (id) => {
   if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      try {
        const response = await axios.delete(`http://localhost:9090/${id}`);
        alert(response.data.message);
        getAllUserAction();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="row justify-content-center" style={{ width: "80vw" }}>
        <div className="col-sm-12 col-md-12 justify-content-center">
          <h3>&#128101; User List</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((item, id) => (
                <tr key={item.id}>
                  <th scope="row">{id + 1}</th>
                  <td className="text-capitalize">{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.password}</td>
                  <td className="fs-5">
                    {/* <input
                      type="button"
                      value="&#x270E;"
                      onClick={() => selectUser(item.id)}
                    /> */}
                    <input
                      type="button"
                      value="&#128686;"
                      onClick={() => deleteUser(item.id, item.name)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row justify-content-center" style={{ width: "80vw" }}>
        <div className="col-sm-12 col-md-12 justify-content-center">
          <h3>&#128221; Update User</h3>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile:</label>
            <input
              type="text"
              className="form-control"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
         
          <button className="btn btn-primary" onClick={updateUser}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserList;

