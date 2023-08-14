import BarLoader from 'react-spinners/BarLoader';

export default function Loader() {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center h-screen">
          <BarLoader color="#F15757" speedMultiplier={4} />
        </div>
      </div>
    </section>
  );
}
