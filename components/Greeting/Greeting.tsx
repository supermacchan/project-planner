import { GreetingProps } from './Greeting.props';

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <span className="mr-8">Hello, {name}!</span>;
};

export default Greeting;
