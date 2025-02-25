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
                withCredentials([
                    file(credentialsId: 'SSL_CERT', variable: 'CERT_FILE'),
                    file(credentialsId: 'SSL_KEY', variable: 'KEY_FILE')
                ]) {
                    script {
                        // Copy the secret files to the desired location
                        sh 'cp $CERT_FILE deploy/cert/ssl.crt'
                        sh 'cp $KEY_FILE deploy/cert/ssl.key'
                    }
                    sh '''
                        chmod 600 deploy/cert/ssl.crt deploy/cert/ssl.key
                        docker image build -f ./deploy/Dockerfile -t welcome .
                        docker image save -o ./deploy/welcome.tar welcome
                    '''
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
