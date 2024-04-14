import * as React from 'react';
import '../styles/Upload.css'
import Chat from './Chat';

export default function Upload() {
  const [file, setFile] = React.useState(null);
  const [selectedModel, setSelectedModel] = React.useState('');
  const [status, setStatus] = React.useState(false);

  const [score, setScore] = React.useState(null);
  const [modelId, setModelId] = React.useState(null);
  const [plotImage, setPlotImage] = React.useState('');

  const [inputValue, setInputValue] = React.useState('');
  const [prediction, setPrediction] = React.useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      setFile(selectedFile);
    } else {
      alert('Please select an Excel file.');
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!file) {
        alert('Please select a file.');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('model_name', selectedModel);

      const response = await fetch('http://127.0.0.1:8000/model/train/', {
        method: 'POST',
        body: formData
      });

      if (response.status === 200) {
        const responseData = await response.json();
        setScore(responseData.score);
        setModelId(responseData.model_id);
        setPlotImage(responseData.plot_image);
        setFile(null);
        setStatus(true);
      } else {
        setStatus(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleResult = (e) =>{
    e.preventDefault()
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePredict = async () => {
    try {
      const formData = new FormData();
      formData.append('model_id', modelId);
      formData.append('input_x', inputValue);

      const response = await fetch('http://127.0.0.1:8000/model/predict/', {
        method: 'POST',
        body: formData
      });

      if (response.status === 200) {
        const responseData = await response.json();
        setPrediction(responseData.predicted_y);
      } else {
        console.log('Prediction failed');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDownload = async () => {
    try {
      const formData = new FormData();
      formData.append('model_id', modelId);

      const response = await fetch('http://127.0.0.1:8000/model/download/', {
        method: 'POST',
        body: formData
      });

      if (response.status === 200) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${modelId}.pkl`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
      console.log('Download Failed');
      }
    } catch (e) {
      console.log(e);
    }
  };

  
  return (
    <>
      {!status ? (
        <form className='upload'>
          <input type="file" className='upld' name="uploaded-image" id="upld" accept='.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' onChange={handleChange} />
          <select className='dropdown-menu' value={selectedModel} onChange={handleModelChange}>
            <option className='dropdown-value' value="">Select Model</option>
            <option className='dropdown-value' value="LinearRegression">Linear Regression</option>
            <option className='dropdown-value' value="LogisticRegression">Logistic Regression</option>
          </select>
          <button className='submit-file' onClick={handleSubmit}>Submit</button>
        </form>
      ) : (
        <div className='upload after-submit'>
          <div className='data-div'>
            <h2>Model Result</h2>
            <p className='model-score'>Score of the model is: {score}</p>
            <input className='prediction-input' type="number" value={inputValue} onChange={handleInputChange} />
            <button className='prediction-submit' onClick={handlePredict}>Predict</button>
            <button className='download-model' onClick={handleDownload}>Download</button>
            {prediction && <p className='prediction-output'>Prediction: {prediction}</p>}
          </div>
          <div className='image-div'>
            <img className="image-s" src={`data:image/png;base64,${plotImage}`} alt="Plot" />
          </div>
          <Chat />
        </div>
      )}
    </>
  )
}
