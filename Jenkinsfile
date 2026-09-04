pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18' // Name must match the one in Jenkins global tools
    }

    environment {
        REPO_URL = 'https://github.com/dharam-java/cicd-react.git'
        BRANCH = 'main'
        DEPLOY_DIR = 'C:\\Program Files\\nginx-1.30.4\\html'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${BRANCH}", url: "${REPO_URL}"
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        // stage('Run Tests') {
        //     steps {
        //         bat 'npm test -- --watchAll=false'
        //     }
        // }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }

        stage('Copy Build to Deployment Folder') {
            steps {
                bat """
                    if exist "${DEPLOY_DIR}" (
                        rmdir /s /q "${DEPLOY_DIR}"
                    )
                    mkdir "${DEPLOY_DIR}"
                """
                bat 'xcopy /E /H /C /I /Y build\\* "%DEPLOY_DIR%\\"'
            }
        }
    }


    post {
        success {
            echo '✅ Build succeeded!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}