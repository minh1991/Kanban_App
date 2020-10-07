import React, { Component } from 'react';
import { getProject } from '../../Actions/ProjectActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

class UpdateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      projectName: '',
      projectIdentifier: '',
      description: '',
      start_date: '',
      end_date: '',
      created_At: '',
      updated_At: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // LifeCycle Hook START
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    const { id, projectIdentifier, projectName, start_date, updated_At, end_date, description, created_At } = nextProps.project;
    this.setState({
      id: id,
      projectName: projectName,
      projectIdentifier: projectIdentifier,
      description: description,
      start_date: moment(start_date, 'DD MM YYYY hh:mm:ss', true),
      end_date: end_date,
      updated_At: updated_At,
      created_At: created_At,
    });
  }
  // LifeCycle Hook END

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const updateProject = {
      id: this.state.id,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
    };
    this.props.createProject(updateProject, this.props.history);
  }
  render() {
    console.log(this.state);
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Project form</h5>
              <hr />
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Project Name"
                    value={this.state.projectName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    value={this.state.projectIdentifier}
                    onChange={this.onChange}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Project Description"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input type="date" className="form-control form-control-lg" name="start_date" value={this.state.start_date} onChange={this.onChange} />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input type="date" className="form-control form-control-lg" name="end_date" value={this.state.end_date} onChange={this.onChange} />
                </div>

                <input type="submit" className="btn btn-primary btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.project,
});
export default connect(mapStateToProps, { getProject })(UpdateProject);
