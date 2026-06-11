pipeline {
    agent any

    stages {

        stage('Git Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/idbswnd1000/react_query_frontend.git'
            }
        }

        stage('Install') {
            steps {
                sh 'cd frontend && npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'cd frontend && npm run build'
            }
        }

        stage('Docker Compose Build') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Docker Compose Up') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}