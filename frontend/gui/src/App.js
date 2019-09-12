import React, { Component } from 'react';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import ArticleList from './containers/ArticleListView';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

// kill $(lsof -t -i:8000) 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

export default App;
