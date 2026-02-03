import React from 'react';
import Macwindow from './Macwindow';
import githubData from '../../assets/github.json';
import './Github.scss';

const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repolink: "", demolink: "" } }) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className= "description">{data.description}</p>

      <div className="tags">
        {data.tags.map((tag, index) => (
          <p className="tag" key={index}>{tag}</p>
        ))}
      </div>

      <div className="urls">
        <a href={data.repolink}>Repository</a>
        <a href={data.demolink}>Demo Link</a>
      </div>
    </div>
  );
};

const Github = ({ windowName, setWindowsState }) => {
  return (
    <Macwindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cards">
        {githubData.map((project, index) => (
          <GitCard key={index} data={project} />
        ))}
      </div>
    </Macwindow>
  );
};

export default Github;