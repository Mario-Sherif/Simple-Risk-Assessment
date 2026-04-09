# 🔐Login Risk Analyzer

A simple JavaScript project that analyzes login attempts and determines the risk level based on:
- Number of failed login attempts
- User age

## 🚀 Features

- Detects **Low Risk**
- Detects **Medium Risk**
- Detects **High Risk**
- Detects **Critical Risk** (for underage users with repeated attempts)

## 🧠 Logic

The system evaluates risk based on the following conditions:

| Failed Attempts     |    Age Condition     |        Risk Level       |
|----------------------|-----------------------|--------------------------|
|       < 3            |       Any             |         Low Risk         |
|      3 - 5           |       Any             |         Medium Risk      |
|       > 5            |       Any             |         High Risk        |
|       > 3            |      < 18             |         Critical Risk    |
