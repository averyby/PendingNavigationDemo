import React from 'react';
import axios from 'axios';
import { hot } from 'react-hot-loader/root';
import './AppRoot.scss';

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios({
      method: 'POST',
      url: '/api/ims/profile/position',
      data: {
        "header": {},
        "request": {
          "c": "",
          "m": "",
          "p": {
            "jd_id": 123,
            "job_func": "史诗级PHP开发",
            "plc_id": 1000105,
            "work_dura": 0,
            "session": "eyJmcm9tIjoiQSIsInNyY19pZCI6MSwibWFuYWdlcl9pZCI6MCwidXNlcl9pZCI6MCwiZXhwaXJlIjoxNTUxNzc0MDAwLCJzaWduYXR1cmUiOiI4NTY1ZDg5MjBjMWFhNmQ3NmQ3ZTExMmQxNjEyOGFhOTBkNTJhN2MzIn0="
          }
        }
      }
    }).then(res => {
      console.log('res', res);

    });

  }

  render() {
    return (
      <div className="container app-root-container">
        <div className="row">
          <div className="col-sm">Custom column</div>
          <div className="col-sm">Custom column</div>
        </div>
      </div>
    );
  }
}

export default hot(AppRoot);