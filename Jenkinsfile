pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                sh "npm ci"
            }
        }
        stage('Cypress run') {
            steps {
                sh "allure:clear"
                sh "cy:run:allure"
            }
        }
        stage('Allure report') {
            steps {
                sh "allure:generate"
            }
        }
    }
}