'use strict';

const e = React.createElement;

class ResumeDownload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You have downloaded my resume.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Resume'
    );
  }
}

const domContainer = document.querySelector('#resume_download_container');
ReactDOM.render(e(ResumeDownload), domContainer);