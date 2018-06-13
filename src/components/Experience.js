import React, {Component} from 'react';


class Experience extends Component{

	render(){
		return(  
			 <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">{this.props.title}</h3>
                            <div class="time">{this.props.period}</div>
                        </div>
                        <div class="company">{this.props.company}</div>
                    </div>
                    <div class="details">
                        <p>{this.props.details}</p>  
                       
                    </div>
                </div>
                 );
	}
}

export default Experience;