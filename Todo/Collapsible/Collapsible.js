import React, { Component } from "react";

import { Collapse, CardBody, Card, CardHeader } from "reactstrap";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: 0, cards: [1, 2, 3, 4] };
  }

  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? 0 : Number(event),
    });
  }
  render() {
    const { cards, collapse } = this.state;
    return (
      <div className='container mt-3'>
        {cards.map((index) => {
          return (
            <Card style={{ marginBottom: "1rem" }} key={index}>
              <CardHeader onClick={this.toggle} data-event={index}>
                <b>ACCORDION HEADER</b>
              </CardHeader>
              <Collapse isOpen={collapse === index}>
                <CardBody>
                  <b>ACCORDION BODY</b>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet natus sint provident vel ab reprehenderit cum soluta,
                  suscipit facere nisi sed earum repellendus fuga debitis, nam
                  molestiae minima voluptates possimus.
                </CardBody>
              </Collapse>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Collapsible;
