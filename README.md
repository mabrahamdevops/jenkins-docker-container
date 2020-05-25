# Jenkins-Docker-Container

## Purpose and Process

This project is a research use case to develop a uniform developer deployment instance of Jenkins and Docker running in in a Docker container

## Why use Docker to run Jenkins

1. Everyone will have the same container image of Jenkins
2. Operating system agnostic 
      - Can run Docker on Ubuntu in Digital Ocean, AWS, Google Cloud, or Azure. 
      - Can run locally on Mac, Windows, etc
3. Can easily upgrade Jenkins by pulling latest Docker Image and can modify the Jenkins container image by creating a Dockerfile

The purpose is to provide an automated environment for developers to deploy and test code that can be built in all environments including Dev, Test, QA, and production (**CAUTION: This test package is not secure at this time and SHOULD NOT be used to deploy production grade code)

The concept is to have an automated package that can be deployed that standardizes the Jenkins and Docker versions and global tools across environments and platforms. Using a container, a developer or devops engineer can quickly deploy Jenkins and Docker on Windows, Linux, or MAC and have the same toolset to test code.

## Scalability

Please see README in github.com/mabraham/mabrahamdevops/jenkins-docker-build-cluster

## The use case will consist of three phases and each one is defined below.

The basic concept of deploying Jenkins and Docker to a Linux vm in a Docker container to build and test a basic nodejs application. This test will verify the fundamental theory that Jenkins and Docker can be used to deploy code via a container.

## Deployment Process

Jenkins and Docker will be deployed to to the AWS Jenkins \Docker build cluster.  See github.com/mabraham/jenkins-docker-build-cluster for more information on this piece.

 1. Jenkins pipeline
 2. Terraform
 3. Dockerfile and docker image
