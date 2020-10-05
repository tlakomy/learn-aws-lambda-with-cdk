#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { LearnLambdaStack } from "../lib/learn_lambda-stack";

const app = new cdk.App();
const environment = { region: "eu-central-1" };
new LearnLambdaStack(app, "LearnLambdaStack", { env: environment });
