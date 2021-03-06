# getir-case-study

## Table of Contents

1. [Installation](#installation)
    * [Cloning repo and installation of dependencies](#cloning-repo-and-installation-of-dependencies)
    * [Testing](#testing)
    * [Warning for Docker](#warning-for-docker)
2. [Endpoints](#endpoints)
    * [Keys](#keys)
        - [/getKeys](#/getKeys)
3. [Deploy to Your Account](#deploy-to-your-account)


## Installation

#### Cloning repo and Installation of Dependencies
```
git clone https://github.com/ibrahimsakar/getir-case-study.git
# or gh repo clone ibrahimsakar/getir-case-study

cd getir-case-study

npm install
```

#### Testing
```
npm test
```


### **WARNING FOR DOCKER**

```
You need to add the MONGO_CONNECTIONSTRING environment variable to your docker-compose.yml.
```


## Endpoints

### Keys

#### /getKeys


##### Request Parameters

```
{
    "startDate": "2016-01-26",
    "endDate": "2016-02-03",
    "minCount": 1000,
    "maxCount": 3000
}
```

##### Example Response

```
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "ROYQdRsl",
            "createdAt": "2016-02-01T01:28:55.141Z",
            "totalCount": 2424
        },
        {
            "key": "ZpoHRnZT",
            "createdAt": "2016-01-29T13:18:38.649Z",
            "totalCount": 2337
        },
        {
            "key": "bxoQiSKL",
            "createdAt": "2016-01-29T01:59:53.494Z",
            "totalCount": 2991
        },
        {
            "key": "NOdGNUDn",
            "createdAt": "2016-01-28T07:10:33.558Z",
            "totalCount": 2813
        }
    ]
}
```


## Deploy To Your Account

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ibrahimsakar/getir-case-study)


### **Don't forget to set MONGO_CONNECTIONSTRING environment variable.**
