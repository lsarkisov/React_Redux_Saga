import { connect } from 'react-redux';
import PersonsList from '../../components/persons-list';
import { fetchPersonsList } from '../../actions/persons-list';

const mapStateToProps = (state, ownProps) => {
  const { persons } = state.personsList;
  return {
    persons,
  ...ownProps,
}};

const mapDispatchToProps = { fetchPersonsList };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonsList);