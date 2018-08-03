import React from 'react';

export default class JobForm extends React.Component {
    state = {
      title: '',
      description: '',
      jobId: '',
      error: ''
    };
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onJobIdChange = (e) => {
        const jobId = e.target.value;
        this.setState(() => ({ jobId }));
    };
    onSubmit = (e) => {
      e.preventDefault();
      if(!this.state.title || !this.state.description) {
          this.setState(() => ({error: "Please provide Title and Description"}))
      } else {
          this.setState (() => ({ error: '' }));
          //console.log(this.state);
          this.props.onSubmit({
              title: this.state.title,
              description: this.state.description,
              jobId: this.state.jobId
          });
      }
    };
    render() {
        return (
            <div className="wrapper">
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        className="input__apply"
                        type='text'
                        placeholder="Job Title"
                        autoFocus
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                    <input
                        className="input__apply"
                        type="text"
                        placeholder="Job Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        className="input__apply"
                        type="text"
                        placeholder="Job ID"
                        value={this.state.jobId}
                        onChange={this.onJobIdChange}
                    />
                    <button className="btn">Post Job</button>
                </form>
            </div>
        )
    }
}
