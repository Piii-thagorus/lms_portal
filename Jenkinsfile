pipeline {
    agent{
        docker.image("").inside('--tmpfs /.config')
    }
    stage("Prepare"){
         sh 'npm install'

    }
    
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
