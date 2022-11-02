pipeline {

    environment {
        HOME = "${env.WORKSPACE}"
    }

    agent {
        docker {
            any
        } 
    }

    
    options {
        parallelsAlwaysFailFast()
    }

    stages {

    stage('Prepare'){
        steps{
         sh 'echo "starting"'
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
                    -Dsonar.projectKey=jenkins-token \
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
