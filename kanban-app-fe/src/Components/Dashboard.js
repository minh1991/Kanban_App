import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../Actions/ProjectActions';
import CreateProjectButton from './Project/CreateProjectButton';
import ProjectItem from './Project/ProjectItem';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  // LifeCycle Hook START
  componentDidMount() {
    this.props.getProjects();
  }
  // LifeCycle Hook END
  render() {
    const { projects } = this.props.project;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              {projects.map((project) => {
                return <ProjectItem key={project.id} project={project} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  project: state.project,
});
export default connect(mapStateToProps, { getProjects })(Dashboard);
