import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react'

class Link extends Component {
	render() {
	    return (
	    	<Card>
	    	<Card.Content header='Url Details' />
			    <Card.Content description={this.props.link.description} />
			    <Card.Content extra>
			      <Icon name='user' />
			      {this.props.link.url}
			    </Card.Content>
			  </Card>
	    )
  }
}

export default Link;
