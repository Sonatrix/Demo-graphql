import React , {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Link from './Link'

class LinkList extends Component {

	render () {
	  if (this.props.feedQuery && this.props.feedQuery.loading) {
	    return <div>Loading</div>
	  }

	  if (this.props.feedQuery && this.props.feedQuery.error) {
	    return <div>Error</div>
	  }

  		const linksToRender = this.props.feedQuery.links
 
		return (
			<div>{linksToRender.map((link, index)=> <Link key={link.id} link={link}/>)}</div>
			)
	}
}

const FEED_QUERY = gql`
  query FeedQuery {
      links {
        id
        url
        description
      }
  }
`

// 3
export default graphql(FEED_QUERY, { name: 'feedQuery' }) (LinkList)