#!/usr/bin/env groovy
pipeline {
    agent any
    options {
        parallelsAlwaysFailFast()
    }
    environment {
        NX_BRANCH = env.BRANCH_NAME.trim()
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
               stage {
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
