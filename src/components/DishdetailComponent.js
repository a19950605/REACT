import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div />;
  }

  renderComments(comments) {
    if (comments != null) {            

        const comment = comments.map((comment) => {
            const fDate = new Date(comment.date).toLocaleDateString
            ('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {fDate}</p>
                </li>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">{comment}</ul>
            </div>       
        );
                
    } 
    else {
        return (
            <div></div>
        );
    }
}

  render() {
    const selectedItem = this.props.dish
    if (selectedItem == null) {
        return (<div></div>)
    }
    return (
        
      <div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(selectedItem)}
          </div>
          <div className="col-12 col-md-5 m-1">
          {this.renderComments(selectedItem.comments)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
