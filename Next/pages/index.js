import Link from 'next/link';
import Header from '../components/Header';

const Index = () => (
  <div>
    <Header />
    <Link href="/about">
      <button>About</button>
    </Link>
    <p>Hello Next</p>
  </div>
);

export default Index;