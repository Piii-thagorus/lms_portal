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
            withSonarQubeEnv(credentialsId: 'sonar-credentialsId',
            installationName: 'SonarqubeCredential') {
                sh '''$SCANNER_HOME/bin/sonar-scanner \
                -Dsonar.projectKey=lms
                -Dsonar.projectName=lms \
                -Dsonar.sources=apps
                -Dsonar.tests=apps \
                -Dsonar.typescript.tsconfigPath=tsconfig.base.json \
                -Dsonar.test.inclusions=**/* .spec.ts \
                -Dsonar, testExecut lonReportPaths-test-reports/ut_report.xml\
                -Dsonar.javascript.lcov.reportPaths-coverage/lcov.info
                '''
            }
        }
   }
   stage('Quality Gate') {

        steps{
            timeout(time: 5, unit: 'MINUTES'){
                  waitForQualityGate abortPipeline: true
            }
        }
   }
}
