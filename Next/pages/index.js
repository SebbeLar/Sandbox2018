import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <button>About</button>
    </Link>
    <p>Hello Next</p>
  </div>
);

export default Index;