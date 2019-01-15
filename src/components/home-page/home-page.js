import React, { useState, useEffect } from 'react';
import './home-page.scss';
import Fetch from '../../lib/Fetch';

const HomePage = () => {
  const [ data, setData ] = useState([]);

  const fetchData = async () => {
    const response = await Fetch('/blogposts')
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { fetchData() }, []);

  return (
    <div className="home-page">
      HomePage
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>User</th>
          </tr>
          </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}> 
            {
              <React.Fragment>
                <td>{item.id || '-'}</td>
                <td>{item.title || '-'}</td>
                <td>{item.content || '-'}</td>
                <td>{item.user || '-'}</td>
              </React.Fragment>
            }
            </tr>))
          }
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;