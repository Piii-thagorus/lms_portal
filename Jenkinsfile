pipeline {

    agent any

    options {
        parallelsAlwaysFailFast()
    }

    stages {
 
        stage('Parrallel Testing') {
            agent{
                docker {
                    image 'node:latest'
                }
            }
            stages{
               stage('Prepare'){
            
                    steps{
                        cache(maxCacheSize: 1000, defaultBranch: 'test', caches: [
                            [
                                $class: 'ArbitraryFileCache', path: 'node_modules', 
                                cacheValidityDecidingFile: 'package-lock.json', compressionMethod: 'TARGZ'
                            ]
                        ]) {
                                sh 'npm install --force'
                                sh 'ls ~/.npm'
                            }
                        
                    }

                }
                stage('Building and Testing'){
                    parallel {
                        stage('Main'){
                            
                            when {
                                not { branch 'main'}
                            }
                            
                            steps {
                                sh "npx nx repair"
                            }
                        }    
                }
            }}
        }
        stage('Sonarqube analysis') {
            
            agent any
            
            when {
                not { branch 'main'}
            }
            
            environment {
                SONARQUBE_CREDENTIALS= credentials('sonarqube_server_credentials')
                SCANNER_HOME = tool 'Sonar-scanner'
                PROJECT_NAME = "LMS_Portal"
                PROJECT_TOKEN= credentials("jenkins_token")

            }
            steps{
                withSonarQubeEnv('LMS_Sonarqube') {
                    sh '''$SCANNER_HOME/bin/sonar-scanner  -Dsonar.login=$SONARQUBE_CREDENTIALS_USR \
                    -Dsonar.password=$SONARQUBE_CREDENTIALS_PSW \
                    -Dsonar.projectKey=$PROJECT_TOKEN \
                    -Dsonar.projectName=$PROJECT_NAME 
                    '''
                }
            }
       }
       stage('Quality Gate') {

            steps{
                timeout(time: 20, unit: 'MINUTES'){
                      //waitForQualityGate abortPipeline: false
                }
            }
       }
        }    
}
