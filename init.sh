#!/bin/bash

# husky 설치
npx husky install

# 커밋 템플릿 설정
git config --local commit.template .gitmessage.txt