import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import {CodePipeline, CodePipelineSource, ShellStep} from 'aws-cdk-lib/pipelines'

export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  const democicdpipeline = new CodePipeline(this, 'demopipeline', {
    synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('bansa2/democicd021223', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })

  });
  }
}
