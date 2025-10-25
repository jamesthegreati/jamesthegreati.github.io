'use client';

import Hero from '@/components/Hero';
import CodeSnippet from '@/components/CodeSnippet';
import InteractivePipeline from '@/components/InteractivePipeline';
import CostCalculator from '@/components/CostCalculator';
import ProjectSaga from '@/components/ProjectSaga';
import PortalTransition from '@/components/PortalTransition';

const CloudPage = () => {
  return (
    <PortalTransition transitionType="cloud">
      <div className="container mx-auto px-4">
        <Hero
          title="Infrastructure That Breathes."
          subtitle="I architect and deploy scalable, resilient, and cost-efficient cloud systems that power growth."
        />
      <section className="my-16">
        <h2 className="text-4xl font-bold font-serif text-center mb-8">
          The Anatomy of a System.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CodeSnippet
            language="yaml"
            code={`
AWSTemplateFormatVersion: '2010-09-09'
Description: An AWS Lambda function that triggers on an S3 event.
Resources:
  MyLambdaFunction:
    Type: 'AWS::Lambda::Function'
    Properties:
      Handler: index.handler
      Runtime: nodejs18.x
      Role: !GetAtt MyLambdaExecutionRole.Arn
      Code:
        ZipFile: |
          exports.handler = async (event) => {
            console.log('S3 event:', JSON.stringify(event, null, 2));
          };
  MyLambdaExecutionRole:
    Type: 'AWS::IAM::Role'
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: lambda.amazonaws.com
            Action: 'sts:AssumeRole'
            `}
          />
          <InteractivePipeline />
        </div>
      </section>
      <section className="my-16">
        <h2 className="text-4xl font-bold font-serif text-center mb-8">
          From Bottlenecks to Bulletproof.
        </h2>
        <ProjectSaga
          bottleneck="The client's infrastructure couldn't keep up with their rapid growth, leading to frequent outages and performance issues."
          insight="The monolithic architecture was the single point of failure. We needed to move to a microservices-based approach on a serverless platform."
          blueprint={<p>Here I would show architectural diagrams and infrastructure-as-code snippets.</p>}
          breakthrough="The new architecture improved uptime to 99.99% and reduced infrastructure costs by 40%."
          testimonial="&quot;Jules didn't just fix our problems; he built a foundation for our future.&quot;"
        />
      </section>
      <section className="my-16">
        <CostCalculator />
      </section>
    </div>
    </PortalTransition>
  );
};

export default CloudPage;
