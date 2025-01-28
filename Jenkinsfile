pipeline {
    agent any

    environment {
        COMMIT_AUTHOR = sh(returnStdout: true, script: 'git show -s --pretty="%an <%ae>"').trim()
        COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
        BRANCH = sh(returnStdout: true, script: 'echo ${GIT_BRANCH} | sed "s~origin/~~"').trim()
    }
    stages {
        stage('Test') {
            environment {
                SERVER_URL = "https://cloud.gladys-ai.ru"
            }
            steps {                
                withCredentials([string(credentialsId: 'SSL_CERT', variable: 'CERT_CONTENT'),
                                 string(credentialsId: 'SSL_KEY', variable: 'KEY_CONTENT')]) {
                    script {
                        // Use CERT_CONTENT and KEY_CONTENT to write into cert dir 
                        writeFile file: 'deploy/cert/ssl.crt', text: CERT_CONTENT
                        writeFile file: 'deploy/cert/ssl.key', text: KEY_CONTENT
                    }
                }
                echo 'Brief testing of backend'

                sh '''
                    ls -lha deploy
                    pwd
                    ls -lha
                    docker container ls
                    echo "${SERVER_URL}"
                '''
            }
        }
    }
}
