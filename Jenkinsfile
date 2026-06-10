pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/idbswnd1000/react_query_frontend.git'
            }
        }

        stage('Docker Build & Run') {
            steps {
                sh '''
                    docker compose down
                    docker compose up -d --build
                '''
            }
        }
    }
}