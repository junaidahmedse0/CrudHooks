import React from "react";
const UserTable = props =>
  <table>
    <thead className="table table-bordered  tbl-width">
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Password</th>

        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0
        ? props.users.map(user =>
            <tr key={user.id} className="p-2">
              <td>
                {user.name}
              </td>
              <td>
                {user.username}
              </td>
              <td>
                {user.password}
              </td>

              <td className="">
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className="btn btn-success  ml-3"
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger ml-3"
                  onClick={() => props.deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        : <tr>
            <td colSpan={3}>No users</td>
            <td />
          </tr>}
    </tbody>
  </table>;
export default UserTable;
