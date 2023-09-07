import { useEffect, useState } from "react";

function QueryList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAllQueries ();
  }, []);

  const getAllQueries = async () => {
    let url = `http://localhost:4000/showallqueries`;
    let res = await fetch(url);
    let list = await res.json();

    setUserList([...list]);
    }
  
    const deletequery = (id, name) => {
      if (window.confirm(`Are you sure you want to delete ${name}`)) {
        fetch("http://localhost:4000/deletequery", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name : name,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            alert(data.data);
            getAllQueries();
          });
      } else {
      }
    };


  return (
    <>
       <div className="row justify-content-center ">
      <div className="row justify-content-center " style={{maxWidth:"70vw"}}>
        <div className="col-sm-12 col-md-12">
          <h3>&#x2709; Queries List</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Query</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td className="text-capitalize">{item.name}</td>
                  
                  <td>{item.email}</td>
                  <td >{item.Query}</td>
                  <td className="fs-5">
                    
                    <input type="button" value="&#128686;" onClick={() => deletequery(item._id, item.name)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </>
  );

};

export default QueryList;
