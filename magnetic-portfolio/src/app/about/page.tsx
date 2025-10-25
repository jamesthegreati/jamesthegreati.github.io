import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold font-serif text-center mb-12">The Human Core</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold font-serif mb-4">Behind the Code</h2>
          <p className="mb-4">
            This is a story about a project that didn&apos;t go as planned and the crucial lesson it taught me. It&apos;s a reminder that growth often comes from failure, and that vulnerability is a strength, not a weakness.
          </p>
          <p>
            The biggest lesson was the importance of clear and constant communication. We learned that assuming everyone is on the same page is a recipe for disaster. Now, I over-communicate, and it has made all the difference.
          </p>
        </div>
        <div>
          <Image
            src="https://via.placeholder.com/500"
            alt="My workspace"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="my-16">
        <h2 className="text-3xl font-bold font-serif mb-4">My Personal OS</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>A favorite book on systems design: &quot;Designing Data-Intensive Applications&quot; by Martin Kleppmann</li>
          <li>An inspiring sci-fi author: N. K. Jemisin</li>
          <li>A passion for Kiswahili grammar</li>
          <li>A love for the artist: Jean-Michel Basquiat</li>
          <li>A philosophy I live by: &quot;Progress, not perfection.&quot;</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
