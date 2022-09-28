#!/usr/bin/env groovy
pipeline {
    agent any
    options {
        parallelsAlwaysFailFast()
    }

    stages {
        stage('Pipeline') {
            parallel {
               stage('Main'){
                    when {
                        branch 'main'
                    }
                    steps {
                        sh "npm ci"
                    }
               }
               stage('Pr') {
                    when {
                        not { branch 'main'}
                    }
                    steps{
                        sh "npm ci"
                    }
               }
            }
        }
    }
}
