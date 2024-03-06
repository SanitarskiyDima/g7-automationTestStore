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
                sh "npm run allure:clear"
                sh "npm run cy:run:allure"
            }
        }
        stage('Allure report') {
            steps {
                sh "npm run allure:generate"
            }
        }
    }
}