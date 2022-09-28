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
               stage()
            }
        }
    }
}
