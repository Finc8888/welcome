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
                echo 'Brief testing of backend'

                # withCredentials([string(credentialsId: 'server-port', variable: 'SERVER_PORT'), 
                        # string(credentialsId: 'server-host', variable: 'SERVER_HOST')]) {
                    # sh 'ssh-keyscan -H $SERVER_HOST >> ~/.ssh/known_hosts'
                    #  sh 'scp -r -P $SERVER_PORT ../welcome/css/ $SERVER_HOST:/home/vps/welcome/css'
                # }

                sh '''
                    pwd
                    ls -lha
                    docker container ls
                    echo "${SERVER_URL}"
                '''
            }
        }
    }
}
