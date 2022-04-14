export const mockComponent = (
  moduleName: string,
  propOverrideFn: (param: Object) => Object = () => {
    return {};
  },
) => {
  const RealComponent = jest.requireActual(moduleName);

  const React = require('react');
  const CustomizedComponent = (props: Object & {children?: any}) => {
    return React.createElement(
      'CustomizedComponent',
      {
        ...props,
        ...propOverrideFn(props),
      },
      props.children,
    );
  };

  CustomizedComponent.propTypes = RealComponent.propTypes;
  return CustomizedComponent;
};
