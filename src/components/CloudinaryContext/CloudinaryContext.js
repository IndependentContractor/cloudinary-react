import React from 'react';
import CloudinaryComponent from '../CloudinaryComponent';

/**
 * Provides a container for Cloudinary components. Any option set in CloudinaryContext will be passed to the children.
 * @example
 *    <CloudinaryContext cloudName="mycloud" dpr="auto">
 *      <!-- other tags -->
 *      <Image publicId={id}/>
 *    </CloudinaryContext>
 *
 */
export default class CloudinaryContext extends CloudinaryComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  getChildContext() {
    let {children, ...otherProps} = this.props;
    let context = {};
    // only pass valid Cloudinary options
    CloudinaryComponent.VALID_OPTIONS.forEach(key => {
      let val = otherProps[key] || this.context[key];
      if(val !== null && val !== undefined){
        context[key] = val;
      }
    });
    return context;
  }

  componentWillReceiveProps(nextProps, nextContext) {
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
CloudinaryContext.propTypes = CloudinaryComponent.propTypes;
CloudinaryContext.defaultProps = {};
CloudinaryContext.childContextTypes = CloudinaryComponent.contextTypes;