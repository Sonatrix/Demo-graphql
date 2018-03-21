import React, {Component} from 'react';
import {
	Card, 
	CardTitle, 
	CardText
} from 'material-ui/Card';

class Link extends Component {
	render() {
	    return (
	    	<Card>
			    <CardTitle title={this.props.link.url} />
			    <CardText>
				    {this.props.link.description}
			    </CardText>
			  </Card>
	    )
  }
}

export default Link;
