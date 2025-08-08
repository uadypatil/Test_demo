import React, { useEffect, useState } from 'react';
import axios from 'axios';
import base_url from '../config'; 

const GetData = ({ route }) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const url = base_url + route;

    axios.get(url)
      .then(response => {
        setData(response.data);
        setStatus(response.status);
      })
      .catch(error => {
        if (error.response) {
          setStatus(error.response.status);
        } else {
          setStatus(500);
        }
        setData(null);
      });
  }, [route]);

  return (
    <div>
      <h5>Status: {status}</h5>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default GetData;
