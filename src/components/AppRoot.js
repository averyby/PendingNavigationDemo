import React from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { hot } from 'react-hot-loader/root';
// import ReactJson from 'react-json-view';
import JSONTree from 'react-json-tree';
import queryString from 'query-string';
import './AppRoot.scss';

let params = {};

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jd: null,
      position: null,
      cv: null,
      talent: null,
      error: false
    };
  }

  componentDidMount() {
    const type = '';
    const parsed = queryString.parse(location.search);
    console.log('query string parsed', parsed);
    const { session, jd_id, job_func, plc_id, work_dura, cv_id } = parsed;
    params = parsed;

    if (jd_id) {
      this.getJD();
      return;
    }
    if (cv_id) {
      this.getCV();
      return;
    }
    this.setState({ error: true });
    toast('未收到 cv_id 或 jd_id');
  }

  informOutside = (data) => {
    try {
      console.log('window', window);
      console.log('HTMLIFrameElement', HTMLIFrameElement);
      const targetWindow = window.opener || HTMLIFrameElement.contentWindow;
      targetWindow.postMessage(data, '*');
    } catch (e) {
      // console.error(e);
    }
  };

  getJD = async () => {
    const jdRes = await axios({
      method: 'POST',
      url: '/api/ims/profile/position',
      data: {
        "header": {},
        "request": {
          "c": "",
          "m": "",
          "p": {
            "jd_id": params.jd_id,
            "job_func": params.job_func,
            "plc_id": params.plc_id,
            "work_dura": params.work_dura,
            "session": params.session
          }
        }
      }
    });

    this.responseValidate(jdRes);

    const jdResults = jdRes.data.response.results;

    this.informOutside(jdResults);

    console.log('JD 数据', jdResults.jd);
    console.log('岗位画像数据', jdResults.position_profile);

    this.setState({
      jd: jdResults.jd,
      position: jdResults.position_profile
    });
  };

  getCV = async () => {
    const cvRes = await axios({
      method: 'POST',
      url: '/api/ims/profile/talent',
      data: {
        "header": {},
        "request": {
          "c": "",
          "m": "",
          "p": {
            "cv_id": params.cv_id,
            "session": params.session
          }
        }
      }
    });
    this.responseValidate(cvRes);
    const cvResults = cvRes.data.response.results;

    this.informOutside(cvResults);

    console.log('CV 数据', cvRes.cv);
    console.log('人才画像数据', cvRes.talent_profile);
    this.setState({
      cv: cvResults.cv,
      talent: cvResults.talent_profile
    });
  };

  responseValidate = (res) => {
    const serverResponse = res.data;
    if (!serverResponse) {
      this.setState({ error: true });
      toast('服务端响应数据为空');
      throw new Error('服务端响应数据为空');
    }
    const trueResponse = serverResponse.response;
    if (!trueResponse) {
      this.setState({ error: true });
      toast('响应对象无 response 域');
      throw new Error('响应对象无 response 域')
    }
    const { err_msg, err_no } = trueResponse;
    if (err_no !== 0) {
      this.setState({ error: true });
      toast(`服务端给出的 err_msg: ${err_msg}`);
      throw new Error(`服务端给出的 err_msg: ${err_msg}`);
    }
  };

  getContent = () => {
    const { error, position } = this.state;
    const data = position;

    if (error) return '加载出错，请稍后重试';
    return data ? <JSONTree data={data} /> : 'Loading...';
  };

  render() {
    const data = this.state.position;

    return (
      <div>
        {/*<ReactJson src={this.state.jd} />*/}
        {this.getContent()}
        <ToastContainer />
      </div>
    );
  }
}

export default hot(AppRoot);