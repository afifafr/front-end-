import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Formtable from './components/Formtable';

axios.defaults.baseURL = 'http://localhost:8080/';

function App() {
  const [isAdding, setIsAdding] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    mobile: "",
    _id: "",
  });
  const [dataList, setDataList] = useState([]);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/create', formData);
      console.log(response);
      if (response.data.success) {
        setIsAdding(false);
        alert(response.data.message);
        fetchData();
      }
    } catch (error) {
      console.error('Error in handleFormSubmit:', error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get('/');
      console.log(response);
      if (response.data.success) {
        setDataList(response.data.data);
      }
    } catch (error) {
      console.error('Error in fetchData:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/delete/${id}`);

      if (response.data.success) {
        fetchData();
        toast.success(response.data.message);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Error in handleDelete:', error.message);
      toast.error(`Failed to delete data: ${error.message}`);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/update/', formDataEdit);
      if (response.data.success) {
        fetchData();
        toast.success(response.data.message);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Error in handleUpdate:', error.message);
      toast.error(`Failed to update data: ${error.message}`);
    }
  };

  const handleEditInputChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };

  return (
    <>
      <div className="container">
        <button className="btn btn-add" onClick={() => setIsAdding(true)}>
          ADD
        </button>

        {isAdding && (
          <Formtable
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            handleClose={() => setIsAdding(false)}
            rest={formData}
          />
        )}

        {editSection && (
          <Formtable
            handleFormSubmit={handleUpdate}
            handleInputChange={handleEditInputChange}
            handleClose={() => setEditSection(false)}
            rest={formDataEdit}
          />
        )}

        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email id</th>
                <th>Mobile</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataList[0] ? (
                dataList.map((el) => (
                  <tr key={el._id}>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.mobile}</td>
                    <td>
                      <button className="btn-edit" onClick={() => handleEdit(el)}>
                        Edit
                      </button>
                      <button className="btn-delete" onClick={() => handleDelete(el._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
