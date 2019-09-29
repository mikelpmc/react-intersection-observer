import { Component } from 'react';
import PropTypes from 'prop-types';

class Observer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    rootElem: PropTypes.element,
    rootMargin: PropTypes.string,
    threshold: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    triggerOnce: PropTypes.bool
  };

  static defaultProps = {
    rootElem: null, // Browser window
    rootMargin: '0px',
    threshold: 0,
    triggerOnce: true
  };

  constructor(props) {
    super(props);

    this.state = {
      isInView: false
    };

    this.observer = null;
    this.createObserver();
  }

  handleCallback = entries => {
    const { triggerOnce } = this.props;
    const { isInView } = this.state;

    if (triggerOnce && isInView) return;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.setState({
          isInView: true
        });
      }
    });
  };

  createObserver = () => {
    const { rootElem, rootMargin, threshold } = this.props;

    const options = {
      root: rootElem,
      rootMargin,
      threshold
    };

    const observer = new IntersectionObserver(this.handleCallback, options);

    this.observer = observer;
  };

  handleObserveElem = elem => {
    if (this.observer) this.observer.observe(elem);
  };

  handleGetRef = elem => {
    if (elem) this.handleObserveElem(elem);
  };

  render() {
    const { isInView } = this.state;
    const { children } = this.props;

    return children({ isInView, ref: this.handleGetRef });
  }
}

export default Observer;
