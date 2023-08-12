import { Link } from 'react-router-dom';

const Logo = (props) => {
  const setType = props.setType;

  return (
    <Link to="/all" onClick={() => setType('all')}>
      <div className="logo text-lg">
        <span className="tracking-widest italic">
          <span className="font-bold">L</span>
          <span className="font-bold">orem</span>{' '}
          <span className="font-bold">I</span>
          <span className="font-bold">psum</span>
        </span>
        <span className="text-center font-bold">Clothing</span>
      </div>
    </Link>
  );
};

export { Logo };
