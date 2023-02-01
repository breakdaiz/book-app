import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  InputGroup,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Gallery from "./gallery";

class Global extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      items: [],
    };
  }
  search() {
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes/?q=";
    fetch(`${BASE_URL}${this.state.query}`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        let { items } = json;
        this.setState({
          items: items,
        });
      });
    console.log("search", this.state.query);
  }

  render() {
    return (
      <div className="Global">
        <Container fluid="md">
          <Row>
            <Col>
              <h2>Book Explorer</h2>
              <FormGroup>
                <InputGroup>
                  <FormControl
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        this.search();
                      }
                    }}
                    onChange={(event) =>
                      this.setState({ query: event.target.value })
                    }
                    type="text"
                    placeholder="Search for a book"
                  />
                  <Button
                    onClick={() => this.search()}
                    variant="outline-secondary"
                  >
                    <FaSearch />
                  </Button>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Gallery items={this.state.items} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Global;
