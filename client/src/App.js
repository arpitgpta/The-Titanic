import axios from 'axios'
import React, { useState, useEffect } from 'react'


function App() {
  const [prediction, setPrediction] = useState('waiting')
  useEffect(() => {
    const userId = 4;
    const blogId = 5;
    const data = {
      userId, blogId
    };
    const url = '/like'
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data,
      url
    };
    axios(options).then(res => {
      console.log(res);
    })

    // axios.get('/predict').then((x) => {
    //   setPrediction(x.data)
    // }, [])

  })

  return (
    <div className="App">
      The react app
      {prediction}
    </div>
  );
}

export default App;
