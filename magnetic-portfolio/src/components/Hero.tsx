const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl">
        <h1 className="text-6xl font-bold font-serif mb-4">{title}</h1>
        <p className="text-xl font-sans">{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
