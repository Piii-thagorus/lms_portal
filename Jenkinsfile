pipeline {

    environment {
        HOME = "${env.WORKSPACE}"
    }

    agent {
        docker { image "node:latest" }
    }

    
    options {
        parallelsAlwaysFailFast()
    }

    stages {

    stage('Prepare'){
        steps{
         sh 'npm install'
        }

    }
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
            }
        }
        stage('Sonarqube analysis') {
            when {
                not { branch 'main'}
            }
            environment {
                SCANNER_HOME = tool 'Sonar-scanner'
            }
            steps{
                withSonarQubeEnv('LMS_Sonarqube') {
                    sh '''$SCANNER_HOME/bin/sonar-scanner \
                    -Dsonar.projectKey=lms \
                    '''
                }
            }
       }
       stage('Quality Gate') {

            steps{
                timeout(time: 20, unit: 'MINUTES'){
                      waitForQualityGate abortPipeline: true
                }
            }
       }
        }    
}
