import React ,{Component} from 'react';



class Projects extends Component{

	render(){

		return(
                  <div className="item">
                    <span className="project-title"><a to={this.props.url}>{this.props.name}</a></span> - <span className="project-tagline">{this.props.details}</span> 
                </div>
			);
	}
}

export default Projects;