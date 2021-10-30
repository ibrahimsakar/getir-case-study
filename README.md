# getir-case-study

## Table of Contents

1. [Installation](#installation)
    * [Cloning repo and installation of dependencies](#cloning-repo-and-installation-of-dependencies)
    * [Testing](#testing)
2. [Endpoints](#endpoints)
    * [Keys](#keys)
        - [/getKeys](#/getKeys)


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