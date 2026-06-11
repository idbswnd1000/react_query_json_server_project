FROM jenkins/jenkins:lts-jdk17

USER root

# Git 설치
RUN apt-get update && \
    apt-get install -y git curl wget unzip

# Node.js 설치
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs

# Docker CLI 설치
RUN apt-get install -y docker.io

# 버전 확인
RUN git --version && \
    node -v && \
    npm -v && \
    docker --version

USER jenkins

EXPOSE 8080
EXPOSE 50000