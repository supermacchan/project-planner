import data from '@/data/layout.json';

import { GreetingProps } from './Greeting.props';

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  const { greeting } = data.header;

  return (
    <span className="mr-8">
      {greeting} {name}!
    </span>
  );
};

export default Greeting;
