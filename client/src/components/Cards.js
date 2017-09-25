import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCards } from '../actions/cards';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';

class Cards extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCards())
  }

  cards = () => {
    return this.props.cards.map( card =>
      <Grid.Column computer={4}>
        <Card>
          <Image src={card.logo} />
          <Card.Content>
            <Card.Header>
              {card.name}
            </Card.Header>
            <Card.Meta>
              <span>
                {card.author}
              </span>
            </Card.Meta>
            <Card.Description>
              {card.category}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/cards/${card.id}`}>
              View Card
            </Link>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Cards</Header>
          <Grid columns={16}>
            <Grid.Row>
             { this.cards() }
            </Grid.Row>
          </Grid>
        </Container>
      )
    }

  }

  const mapStateToProps = (state) => {
    return { cards: state.cards }
  }

export default connect(mapStateToProps)(Cards);
