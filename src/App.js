import React, { useState } from 'react';
import './App.css';
import TopNav from './components/TopNav'
import Quiz from './components/Quiz'
import { Layout, Button } from 'antd';


const { Header, Content } = Layout;

function App() {
  const [start, setStart] = useState(false);
  return (
    <div className="App">
      <Layout>
        <Header className="header"><TopNav /></Header>
        {!start
          ? <Button className="get-started-button" onClick={() => setStart(true)}> Get Started</Button>
          : <Content className="content"> <Quiz /></Content>}
      </Layout>
    </div>
  );
}

export default App;
