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
