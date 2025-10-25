interface ProjectSagaProps {
  bottleneck: string;
  insight: string;
  blueprint: React.ReactNode;
  breakthrough: string;
  testimonial: string;
}

const ProjectSaga = ({ bottleneck, insight, blueprint, breakthrough, testimonial }: ProjectSagaProps) => {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold font-serif mb-4">The Bottleneck</h2>
        <p className="text-lg">{bottleneck}</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold font-serif mb-4">The Insight</h2>
        <p className="text-lg">{insight}</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold font-serif mb-4">The Blueprint</h2>
        <div>{blueprint}</div>
      </div>
      <div>
        <h2 className="text-3xl font-bold font-serif mb-4">The Breakthrough</h2>
        <p className="text-lg">{breakthrough}</p>
        <blockquote className="mt-4 border-l-4 border-coral-accent pl-4 italic">
          {testimonial}
        </blockquote>
      </div>
    </div>
  );
};

export default ProjectSaga;
